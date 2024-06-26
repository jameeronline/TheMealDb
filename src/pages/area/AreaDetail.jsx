import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sortBy from "sort-by";

import Spinner from "components/common/Spinner";
import Thumbnail from "components/Thumbnail";
import Alert from "components/Alert";
import Alerts from "components/Alerts";

// Icons
import {
  BiGridAlt,
  BiListUl,
  BiArrowBack,
  BiSortAZ,
  BiSortZA,
} from "react-icons/bi";

//Helper functions
import { capitalizeString, hasData } from "src/utils/helperFunctions";

//react query
import { useAreaMeals } from "src/api-services/queries";

export default function AreaDetail() {
  const navigate = useNavigate();
  const { cuisineType } = useParams();

  const [isGird, setIsGrid] = useState(true);
  const [isSort, setIsSort] = useState(true);

  //const url = `filter.php?a=${cuisineType}`;

  //const { data, error, isLoading } = useMealsAPI(url);
  const { data, error, isLoading, isError } = useAreaMeals(cuisineType ?? "");

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <Alerts type="danger">
        <span>
          {error?.message ? error.code + " : " + error.message : null}
        </span>
      </Alerts>
    );
  }

  const handleGridChange = () => {
    setIsGrid((prevGrid) => !prevGrid);
  };

  const handleSort = () => {
    setIsSort((prevSort) => !prevSort);

    if (isSort) {
      console.log("z-a" + isSort);
      data.meals.sort(sortBy("-strMeal"));
    } else {
      console.log("a-z" + isSort);
      data.meals.sort(sortBy("strMeal"));
    }
  };

  const isEmpty = !hasData(data?.meals);

  return (
    <>
      {isEmpty && (
        <Alerts>
          <p>There is no meals available on this category</p>
        </Alerts>
      )}
      {!isEmpty && (
        <>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-3xl font-bold inline-flex items-baseline gap-2">
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex w-10 h-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-primary-50"
              >
                <BiArrowBack className="w-6 h-6 transition-colors duration-300 group-hover:fill-primary-500" />
              </button>
              {data?.meals?.length && (
                <span className="flex flex-col lg:flex-row items-baseline lg:gap-2">
                  {capitalizeString(cuisineType)}
                  <em className="text-sm font-normal not-italic">
                    ({data.meals.length} meals found)
                  </em>
                </span>
              )}
            </h1>

            <div className="flex justify-between md:inline-flex gap-4 items-center">
              <button
                onClick={handleGridChange}
                className="flex flex-1 items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide transition duration-300 border rounded focus-visible:outline-none whitespace-nowrap border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 focus:border-primary-700 focus:text-primary-700"
              >
                {isGird ? (
                  <>
                    <span className="order-2">List</span>
                    <BiListUl className="w-6 h-6" />
                  </>
                ) : (
                  <>
                    <span className="order-2">Grid</span>
                    <BiGridAlt className="w-6 h-6" />
                  </>
                )}
              </button>

              <button
                onClick={handleSort}
                className="flex flex-1 items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 border rounded focus-visible:outline-none whitespace-nowrap border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 focus:border-primary-700 focus:text-primary-700"
              >
                <span className="order-2">Sort</span>
                <span className="relative only:-mx-5">
                  {isSort ? (
                    <BiSortAZ className="w-6 h-6" />
                  ) : (
                    <BiSortZA className="w-6 h-6" />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {data.meals.map((item) => {
              return (
                <div
                  className={`${
                    isGird
                      ? "col-span-4 md:col-span-4 lg:col-span-3"
                      : "col-span-4 md:col-span-8 lg:col-span-6"
                  } `}
                  key={item.idMeal}
                >
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

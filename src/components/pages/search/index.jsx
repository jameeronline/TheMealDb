import { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import Spinner from "../../Spinner";
import RecipieThumb from "../../RecipieThumb";
import Alert from "../../AlertError";

import { BiX } from "react-icons/bi";

import { fetchSearch } from "../../../utils/dataLayer";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm == "") {
      return;
    }

    setIsLoading(true);

    const searchedMeals = await fetchSearch(searchTerm);
    setItems(searchedMeals);
    setIsLoading(false);
  };

  const resetSearch = (e) => {
    e.preventDefault();

    setItems([]);
    setSearchTerm("");

    searchInput.current.focus();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Search</h1>
          {/* loadding */}
          {isLoading && <Spinner className="w-6 h-6" />}
        </div>

        <div className="relative my-6">
          <form onSubmit={handleSubmit}>
            <input
              ref={searchInput}
              id="id-l11"
              type="text"
              name="id-l11"
              value={searchTerm}
              placeholder="Discover recipes from around the world..."
              className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch className="absolute top-3 left-4 h-6 w-6 stroke-primary-200 peer-disabled:cursor-not-allowed" />
            <button
              type="button"
              onClick={resetSearch}
              className={`${
                !searchTerm && "hidden"
              } absolute top-3 right-4 h-6 w-6 inline-flex items-center justify-center stroke-slate-400 peer-disabled:cursor-not-allowed`}
            >
              <BiX className="w-6 h-6" />
            </button>
          </form>
        </div>
        {/* verify API return & Display error */}
        {!Array.isArray(items) && <Alert />}
      </div>
      {/* loadding */}
      {/* {isLoading && (
        <div className="h-max grid place-items-center">
          <Spinner />
        </div>
      )} */}
      {/* Meal Grid */}

      {items !== null && items.length > 0 && (
        <div className="mt-10">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {items.map((item) => {
              return (
                <div className="col-span-3" key={item.idMeal}>
                  <RecipieThumb item={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

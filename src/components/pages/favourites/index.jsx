import { useContext } from "react";

import RecipieThumb from "../../RecipieThumb";

//Context
import { ThemeContext } from "../../context/ThemeContext";

export default function Favourites() {
  const { favourites } = useContext(ThemeContext);
  console.log(favourites.length);

  return (
    <>
      {favourites.length < 1 && <p>There is no favourites items</p>}
      {/* Meal Grid */}
      {favourites.length > 0 && (
        <div className="mt-10">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-2xl font-bold">Favourites List</h1>
          </div>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {favourites.map((item) => {
              return (
                <div className="col-span-4 lg:col-span-3" key={item.idMeal}>
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
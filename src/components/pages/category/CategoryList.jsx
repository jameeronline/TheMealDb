import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import ListingItems from "../../ListingItems";

const CategoryList = ({ categories }) => {
  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3">
            {categories != null && categories.length > 0 && (
              <ListingItems
                title="Category"
                items={categories}
                itemKey="strCategory"
                itemLabel="category"
              />
            )}
          </div>
          <div className="col-span-4 lg:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
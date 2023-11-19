import { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Banner from "./HomeBanner";

//Import Custom Components
//import ShowMeal from "./components/MealCard";
// import CheckboxFilter from "./CheckboxFilter";
// import RadioFilter from "./ListingItems";

import HomeCategoryList from "./HomeCategoryList";

//custom Hooks
import useFetchData from "../../hooks/use-fetch-data";

//Import Custom Components
// import CategoryList from "./CategoryList";
// import CategoryDetails from "./CategoryDetails";
// import MealDetail from "./MealDetail";

const Home = ({ categoryDetails, randomMeal, getRandomMeals }) => {
  // const { data, loading, showError } = useFetchData(
  //   "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
  // );
  // const [meals, setMeals] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(
  //   new Array(categories.length).fill(false)
  // );
  // const [selectedArea, setSelectedArea] = useState(
  //   new Array(areas.length).fill(false)
  // );
  // const [filteredMeals, setFilteredMeals] = useState([]);

  // // UI States
  // const [layout, setLayout] = useState("grid");
  // const [pageLength, setPageLength] = useState(6);
  // const [activePage, setActivePage] = useState(0);

  // const selectCategory = (value) => {
  //   this.setState({
  //     selectedCategory: value,
  //   });
  // };

  // const selectArea = (value) => {
  //   var selectedValue = value;
  //   var previousValue = selectedArea;
  //   if (previousValue.includes(selectedValue)) {
  //     previousValue = previousValue.filter(function (currentValue) {
  //       return currentValue !== value;
  //     });
  //   } else {
  //     previousValue.push(value);
  //   }

  //   var filteredList = meals;
  //   filteredList = filteredList.filter(function (item) {
  //     console.log(previousValue.toString().toLowerCase());
  //     return (
  //       previousValue
  //         .toString()
  //         .toLowerCase()
  //         .search(item.strArea.toLowerCase()) !== -1
  //     );
  //   });

  //   console.log(filteredList.length);

  //   this.setState({
  //     selectedArea: previousValue,
  //     filteredMeals: filteredList,
  //   });
  // };

  // const checkboxFilter = (itemVal, selectedArray) => {
  //   for (var i = 0; i < selectedArray.length; i++) {
  //     if (selectedArray[i] === itemVal) {
  //       return true;
  //     }
  //   }
  // };

  // const resetcheckboxFilter = () => {
  //   this.setState({
  //     selectedArea: [],
  //   });
  // };

  // const changeLayout = (val) => {
  //   this.setState({
  //     layout: val,
  //   });
  // };

  // const onCategoryChange = (val) => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + val)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((myJson) => {
  //       this.setState({
  //         meals: myJson.meals,
  //       });
  //     });
  // };

  // const showPagination = () => {
  //   var items = [];
  //   //var active = active;
  //   if (meals !== null) {
  //     console.log(meals.length);
  //     for (
  //       let number = 1;
  //       number <= Math.ceil(meals.length / pageLength);
  //       number++
  //     ) {
  //       items.push(
  //         <Pagination.Item onClick={console.log(number)} key={number}>
  //           {number}
  //         </Pagination.Item>
  //       );
  //     }
  //     return items;
  //   }
  // };

  // if (data) {
  //   console.log(data);
  // } else {
  //   console.log("no data");
  // }

  return (
    <div className="2xl:container mx-auto">
      <Banner items={randomMeal} getRandomMeals={getRandomMeals} />
      <HomeCategoryList categoryDetails={categoryDetails} />
      <Link to="/area">Area Cusine</Link>
      {/* <Col sm={3}>
          <Link to="/category">Category</Link>
          {categories != null && categories.length > 0 && (
            <RadioFilter
              title="Category"
              items={categories}
              // value={selectedCategory}
              // selectchange={selectCategory}
              // itemKey="strCategory"
              // filterKey="radio"
            />
          )}
          {areas != null && areas.length > 0 && (
            <CheckboxFilter
              title="Area"
              items={areas}
              // value={selectedArea}
              // selectChange={selectArea}
              // reset={resetcheckboxFilter}
              // itemKey="strArea"
            />
          )}
        </Col> */}
    </div>
  );
};

//Prop validation
Home.propTypes = {
  randomMeal: PropTypes.array.isRequired,
  categoryDetails: PropTypes.array.isRequired,
  getRandomMeals: PropTypes.func.isRequired,
};

export default Home;
import "./App.css";
import { HelmetProvider } from "react-helmet-async";

//Router imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Layouts
import Layout from "components/layouts";

//Pages
import Home from "components/pages/home/Home";

import CategoryIndex, {
  loader as categoryLoader,
} from "src/components/pages/category/Index";
import CategoryList from "components/pages/category/CategoryList";
import CategoryDetail from "components/pages/category/CategoryDetail";

import AreaIndex, { loader as areaLoader } from "components/pages/area";
import AreaList from "components/pages/area/AreaList";
import AreaDetail from "components/pages/area/AreaDetail";

import Ingredients from "components/pages/ingredients";

import RecipeDetail from "components/pages/recipie_detail";

import Missing from "components/pages/404";
import Favourites from "components/pages/favourites";
import Search, { loader as searchLoader } from "components/pages/search";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";

//Users
import Login from "components/pages/auth/login";
import SingUp from "components/pages/auth/signup";

//CMS - Blog
import Blog from "components/pages/blog";
import Post from "components/pages/post";

//CMS - Footer Pages
import Terms from "components/pages/guidelines/Terms";
import Privacy from "./components/pages/guidelines/Privacy";

//Import Context
import ThemeProvider from "components/context/ThemeContext";
import DataProvider from "components/context/DataContext";

//import useFetch from "use-http";

//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<CategoryList />}>
          <Route index element={<CategoryIndex />} loader={categoryLoader} />
          <Route path=":categoryType" element={<CategoryDetail />} />
        </Route>
        <Route path="area" element={<AreaList />}>
          <Route index element={<AreaIndex />} loader={areaLoader} />
          <Route path=":cuisineType" element={<AreaDetail />} />
        </Route>
        <Route path="ingredients/:id" element={<Ingredients />} />
        <Route path="recipe-details/:id" element={<RecipeDetail />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />} loader={searchLoader} />

        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=":postID" element={<Post />} />
        </Route>

        <Route path="*" element={<Missing />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SingUp />} />
    </>
  )
);

export default function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <DataProvider>
            <RouterProvider router={router} />
          </DataProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

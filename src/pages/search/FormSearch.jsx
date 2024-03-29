import { useState, useRef, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { Form, useSubmit } from "react-router-dom";

//components
import InlineSpinner from "src/components/common/InlineSpinner";
//import Alert from "components/Alert";

//Icons
import { BiX, BiSearch } from "react-icons/bi";

//label bundle
import LABELS from "src/utils/labelBundle";
import PageHeader from "src/components/PageHeader";

export default function FormSearch({ isLoading, setSearchKeyword, query }) {
  const labels = LABELS.PAGES.SEARCH;
  const searchInput = useRef(null);
  const submit = useSubmit();
  const searchId = useId();

  //search input state
  useEffect(() => {
    document.getElementById(searchId).value = query;
  }, []);

  //const [searchKey, setSearchKey] = useState(query);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchInput.current.value == "") {
      return;
    }

    setSearchKeyword(searchKey);
  };

  const resetSearch = (e) => {
    e.preventDefault();
    document.getElementById(searchId).value = "";

    setSearchKeyword("");
    submit(e.currentTarget.form);
    searchInput.current.focus();
  };

  return (
    <>
      <PageHeader title={labels.TITLE} />
      <div className="flex justify-between items-center mb-6">
        {/* <h1 className="text-2xl font-bold">{labels.TITLE}</h1> */}
        {/* loadding */}
        {/* {isLoading && <InlineSpinner />} */}
      </div>

      {/* Search Form */}
      <div className="relative my-6">
        <Form className="">
          <label htmlFor={searchId} className="sr-only">
            Search input
          </label>
          <input
            autoFocus
            ref={searchInput}
            type="search"
            //value={searchKey}
            id={searchId}
            name="q"
            defaultValue={query}
            placeholder={labels.INPUT_PLACEHOLDER}
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            //onChange={(e) => setSearchKey(e.target.value)}
          />
          <BiSearch className="transition-colors duration-300 absolute top-3 left-4 h-6 w-6 peer-focus:fill-primary-500 peer-disabled:cursor-not-allowed" />
          {/* <p>query: {query === "" ? "true" : "false"}</p> */}
          {searchInput?.current?.value && (
            <button
              type="button"
              onClick={resetSearch}
              className={`absolute top-3 right-24 h-6 w-6 inline-flex items-center justify-center stroke-slate-400 peer-disabled:cursor-not-allowed`}
            >
              <BiX className="w-6 h-6 fill-slate-400" />
            </button>
          )}

          <button
            type="submit"
            className="absolute top-1 right-1 stroke-slate-400 peer-disabled:cursor-not-allowed inline-flex gap-4 cursor-pointer items-center justify-center rounded border-0 border-primary-500 bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Search
          </button>
        </Form>
        <small className="flex justify-between w-full mt-2 py-1 text-xs transition text-slate-400 ">
          <span>{labels.INPUT_HELP_TEXT}</span>
        </small>
      </div>
    </>
  );
}

FormSearch.propTypes = {
  isLoading: PropTypes.bool,
  setSearchKeyword: PropTypes.func,
  query: PropTypes.string,
};

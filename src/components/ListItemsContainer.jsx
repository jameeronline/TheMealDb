import PropTyes from "prop-types";

const ListItemsContainer = ({ children }) => {
  return (
    <>
      <div className="overflow-hidden bg-white rounded text-slate-500 border border-slate-200 hidden md:block">
        {children}
      </div>
    </>
  );
};

export default ListItemsContainer;

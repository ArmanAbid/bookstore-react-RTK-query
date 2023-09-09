import { useDispatch, useSelector } from "react-redux";
import { featuredFilter } from "../../features/filters/filterSlice";

export default function BookFilters() {
  const { filter } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(featuredFilter(value));
  };
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`lws-filter-btn ${filter === "all" && "active-filter"}`}
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className={`lws-filter-btn ${filter === "featured" && "active-filter"}`}
        onClick={() => handleClick("featured")}
      >
        Featured
      </button>
    </div>
  );
}

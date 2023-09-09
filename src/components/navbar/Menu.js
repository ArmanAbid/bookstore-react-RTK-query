import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchFilter } from "../../features/filters/filterSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    dispatch(searchFilter(""));
  };

  return (
    <ul className="hidden md:flex items-center space-x-6">
      <Link
        className={`${
          location.pathname === "/" && "font-semibold"
        } cursor-pointer`}
        to="/"
        id="lws-bookStore"
        onClick={handleClick}
      >
        <li>Book Store</li>
      </Link>
      <Link
        className={`${
          location.pathname === "/add" && "font-semibold"
        } cursor-pointer`}
        to="/add"
        id="lws-addBook"
        onClick={handleClick}
      >
        <li>Add Book</li>
      </Link>
    </ul>
  );
}

import logo from "../../assets/images/logo.svg";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../features/filters/filterSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(searchFilter(""));
  };
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            width="150px"
            className="object-contain"
            alt="logo"
            onClick={handleClick}
          />
        </Link>
        <Menu />
        <SearchBar />
      </div>
    </nav>
  );
}

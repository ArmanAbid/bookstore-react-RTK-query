import Book from "./Book";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Home from "../ui/Home";
import { useSelector } from "react-redux";
import Error from "../ui/Error";

export default function Books() {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const { search, filter } = useSelector((state) => state.filters);

  //FILTER BY SEARCH
  const filterBySearch = (book) => {
    return book.name.toLowerCase().includes(search.toLowerCase());
  };
  //FILTER BY FEATURED
  const filterByFeatured = (book) => {
    switch (filter) {
      case "featured":
        return book.featured && book;
      case "all":
        return book;
      default:
        return book;
    }
  };

  //CONTENT
  let content = null;

  if (isLoading) {
    content = <Home />;
  }
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && books.length === 0) {
    content = <div>No books found</div>;
  }
  if (!isLoading && !isError && books.length > 0) {
    content =
      books.filter(filterBySearch).filter(filterByFeatured).length !== 0 ? (
        books
          .filter(filterBySearch)
          .filter(filterByFeatured)
          .map((book) => <Book book={book} key={book.id} />)
      ) : (
        <div>No books found</div>
      );
  }
  return <>{content}</>;
}

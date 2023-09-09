import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBooksMutation } from "../../features/api/apiSlice";

export default function AddForm() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState("");

  const [addBooks, { isLoading, isError, isSuccess }] = useAddBooksMutation();

  const reset = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });
    navigate("/")
    reset();
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label for="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label for="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label for="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label for="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" className="submit" id="lws-submit" disabled={isLoading}>
        Add Book
      </button>
      <div>{isSuccess && "Successfully Added"}</div>
      <div>{isError && "Something went wrong"}</div>
    </form>
  );
}

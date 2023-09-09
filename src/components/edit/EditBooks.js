import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import EditForm from "./EditForm";

export default function EditBooks() {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookQuery(id);
  return (
    <div className="container">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
        {!isLoading && <EditForm book={book} />}
      </div>
    </div>
  );
}

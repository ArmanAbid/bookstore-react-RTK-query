import BookFilters from "../components/bookList/bookFilters";
import Books from "../components/bookList/Books";

export default function Home() {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>
          <BookFilters />
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Books/>
        </div>
      </div>
    </main>
  );
}

// import { Quotes } from "../../Models/interfaces/quotes";
import { useEffect, useState } from "react";
import { fetchAllQuotes } from "../../Middlewares/FetchAllQuotes/FetchAllQuotes";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { QouteState } from "../../Slices/Quotes";
import Card from "../../Components/Card/QuoteCard";
import { Quotes } from "../../Models/interfaces/quotes";

const Home = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const { QuotesList, loading } = useAppSelector(QouteState);
  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);
  if (loading) {
    return <div>Loading......</div>;
  }
  // Search Function (search by author or content)
  const search = (QuotesList: Quotes[]) => {
    return QuotesList.filter(
      (item) =>
        item.author.toLocaleLowerCase().includes(query) ||
        item.content.toLocaleLowerCase().includes(query)
    );
  };
  return (
    <>
      <h1 className="font-bold text-red-500 text-center text-2xl font-pacifico underline uppercase mt-10">
        -- Quotes Page --
      </h1>
      <div className="mt-10">
        <input
          type="search"
          placeholder="Search about quote........."
          className="outline-none border-2 border-DGreen rounded-3xl px-5 md:py-3 py-2 md:w-96  w-full"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <Card QuotesList={search(QuotesList)} />
      </div>
    </>
  );
};

export default Home;

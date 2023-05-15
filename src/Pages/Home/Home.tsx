// import { Quotes } from "../../Models/interfaces/quotes";
import { useEffect } from "react";
import { fetchAllQuotes } from "../../Middlewares/FetchAllQuotes/FetchAllQuotes";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { QouteState } from "../../Slices/Quotes";
import Card from "../../Components/Card/Card";

const Home = () => {
  const dispatch = useAppDispatch();
  const { QuotesList, loading } = useAppSelector(QouteState);
  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);
  if (loading) {
    return <div>Loading......</div>;
  }
  return (
    <>
      <h1 className="font-bold text-red-500 text-center uppercase">Home</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <Card QuotesList={QuotesList} />
      </div>
    </>
  );
};

export default Home;

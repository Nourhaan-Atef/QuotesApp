import Card from "../../Components/Card/QuoteCard";
import { QouteState } from "../../Slices/Quotes";
import { useAppSelector } from "../../Store/hooks";

const Favorites = () => {
  const { FavQuotes } = useAppSelector(QouteState);

  return (
    <div>
      <h1 className="font-bold text-red-500 text-center text-2xl font-pacifico underline uppercase mt-10">
       -- FAVORITES Page --
      </h1>
      {FavQuotes.length === 0 ? (
        <p className="font-merriweather text-2xl font-bold  mt-20 text-gray-600 ">No Favorite Quotes Available ):</p>
      ) : (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <Card QuotesList={FavQuotes} />
        </section>
      )}
    </div>
  );
};

export default Favorites;

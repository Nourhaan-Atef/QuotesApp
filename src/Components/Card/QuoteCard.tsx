import { Quotes } from "../../Models/interfaces/quotes";
import quoteSymbol from "../../assets/quoteSymbol.png";
import chossenStar from "../../assets/chossenStar.svg";
import normalStar from "../../assets/normalStar.svg";
import openQuote from "../../assets/open.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { getCertainQuote } from "../../Middlewares/GetCertainQuote/GetCertainQuote";
import {
  QouteState,
  addToFavorite,
  removeFromFavorite,
} from "../../Slices/Quotes";

interface Props {
  QuotesList: Quotes[] | undefined;
}
const Card: React.FC<Props> = ({ QuotesList }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { FavQuotes } = useAppSelector(QouteState);

  const HandleFavorites = (item: Quotes) => {
    let FavQuotesIds = FavQuotes.map((favQuote) => {
      return favQuote._id;
    });
    if (!FavQuotesIds.includes(item._id)) {
      dispatch(addToFavorite({ FavQuoteItem: item }));
    } else {
      dispatch(removeFromFavorite({ FavQuoteItem: item }));
    }
  };
  console.log(FavQuotes);
  return (
    <>
      {QuotesList?.map((item) => {
        return (
          <div
            className="px-3 py-2 rounded-ss-3xl rounded-ee-3xl mt-10 border-2 border-red-500 flex flex-col justify-between"
            key={item._id}
          >
            <section className="flex items-center justify-between ">
              <img src={quoteSymbol} alt="quoteSymbol" className="w-10" />
              <div className="flex gap-3 items-center">
                <img
                  src={openQuote}
                  alt="openQuote"
                  className="w-5 cursor-pointer"
                  onClick={() => {
                    dispatch(getCertainQuote({ id: item._id })).then((res) => {
                      if (res.meta.requestStatus === "fulfilled") {
                        navigate(`quote/${item._id}/details`);
                        console.log(item._id);
                      }
                    });
                  }}
                />
                <img
                  src={`${
                    FavQuotes.map((favQuote) => {
                      return favQuote._id;
                    }).includes(item._id)
                      ? chossenStar
                      : normalStar
                  }`}
                  alt="Fav Icon"
                  className="w-4 cursor-pointer"
                  onClick={() => HandleFavorites(item)}
                />
              </div>
            </section>
            <section className="flex justify-center text-DGreen">
              <p className="font-semibold font-raleway text-xl text-center">
                {`“ ${item.content} ”`}
              </p>
            </section>
            {/* <section className="grid md:grid-cols-3 grid-cols-2 gap-1 text-center">
              {item.tags.map((tag, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-red-500  py-px text-white rounded-xl"
                  >
                    {tag}
                  </p>
                );
              })}
            </section> */}
          </div>
        );
      })}
    </>
  );
};

export default Card;

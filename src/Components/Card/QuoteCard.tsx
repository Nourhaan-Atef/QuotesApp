import { useState } from "react";
import { Quotes } from "../../Models/interfaces/quotes";
import quoteSymbol from "../../assets/quoteSymbol.png";
import chossenStar from "../../assets/chossenStar.svg";
import normalStar from "../../assets/normalStar.svg";
import openQuote from "../../assets/open.svg";

interface Props {
  QuotesList: Quotes[];
}
const Card: React.FC<Props> = ({ QuotesList }) => {
  const [fav, setFav] = useState(false);
  return (
    <>
      {QuotesList.map((item) => {
        return (
          <div
            className="px-3 py-2 rounded-ss-3xl rounded-ee-3xl mt-10 border-2 border-DGreen flex flex-col justify-between"
            key={item._id}
          >
            <section className="flex items-center justify-between ">
              <img src={quoteSymbol} alt="quoteSymbol" className="w-10" />
              <div className="flex gap-3 items-center">
                <img
                  src={openQuote}
                  alt="openQuote"
                  className="w-5 cursor-pointer"
                />
                <img
                  src={`${fav ? chossenStar : normalStar}`}
                  alt="Fav Icon"
                  className="w-4 cursor-pointer"
                  onClick={() => setFav(!fav)}
                />
              </div>
            </section>
            <section className="flex justify-center text-DGreen">
              <p className="font-semibold font-raleway text-xl text-center">
                {`“ ${item.content} ”`}
              </p>
            </section>
            <section className="flex justify-end">
              <p className="font-bold font-raleway capitalize italic underline text-red-500">
                {item.author}
              </p>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Card;

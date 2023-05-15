import { useState } from "react";
import { Quotes } from "../../Models/interfaces/quotes";
import quoteSymbol from "../../assets/quoteSymbol.png";
import chossenStar from "../../assets/chossenStar.svg";
import normalStar from "../../assets/normalStar.svg";

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
            <section className="flex items-center justify-between text-red-500">
              <img src={quoteSymbol} alt="quoteSymbol" className="w-10" />
              <img
                src={`${fav ? chossenStar : normalStar}`}
                alt="Fav Icon"
                className="w-5 cursor-pointer"
                onClick={() => setFav(!fav)}
              />
              <p className="font-bold font-raleway capitalize italic">
                {item.author}
              </p>
            </section>
            <section className="flex justify-center  text-DGreen">
              <p className="font-semibold font-raleway text-xl text-center">
                {`“ ${item.content} ”`}
              </p>
            </section>
            <section className="flex justify-between items-center mt-3 text-white">
              <div className="bg-DGreen px-3 py-px rounded text-center">
                <p>Added Date</p>
                <p>{item.dateAdded}</p>
              </div>
              <div className="bg-DGreen px-3 py-px rounded text-center">
                <p>Modified Date</p>
                <p>{item.dateModified}</p>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Card;

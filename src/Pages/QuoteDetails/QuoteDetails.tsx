import { Link } from "react-router-dom";
import { QouteState } from "../../Slices/Quotes";
import { useAppSelector } from "../../Store/hooks";

const QuoteDetails = () => {
  const { Quote } = useAppSelector(QouteState);

  console.log(Quote);
  return (
    <>
      <h1 className="font-bold text-red-500 text-center text-2xl font-pacifico underline uppercase mt-10">
        -- Quotes Details Page --
      </h1>

      <Link to="/" className="flex justify-end mt-10">
        <button className=" mt-2 px-14 py-2 bg-DGreen font-bold font-raleway text-white rounded-xl border-2 hover:bg-white hover:text-DGreen hover:border-DGreen">
          Back
        </button>
      </Link>
      <section className=" py-10 px-5 rounded-3xl">
        {/* Content Section */}
        <section className="flex flex-col justify-center items-center mb-20">
          <span className="mt-5 font-extrabold text-2xl font-merriweather text-white text-center rounded-bl-3xl rounded-tr-3xl bg-DGreen px-10 py-5 border-b-4 border-b-red-500">
            {Quote?.content}
          </span>
        </section>
        {/* Tags Section */}
        <section className="flex md:flex-row flex-col  mb-5 gap-5">
          <p className="font-bold font-raleway text-xl text-gray-600">
            Quotes Tage :-{" "}
          </p>
          <div className="md:flex grid grid-cols-2 text-center gap-2 items-center">
            {Quote?.tags.map((quote, idx) => {
              return (
                <p
                  className="bg-red-500 px-3 py-1 text-white rounded-xl"
                  key={idx}
                >
                  {quote}
                </p>
              );
            })}
          </div>
        </section>
        {/* Author Name */}
        <section className="flex md:flex-row flex-col gap-5 mb-5  mt-5">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Author Name :-{" "}
          </span>

          <span className="text-DGreen font-semibold text-2xl font-raleway ">
            {Quote?.author}
          </span>
        </section>
        {/* Date Added */}
        <section className="flex md:flex-row flex-col gap-5 mb-5 ">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Date Added :-{" "}
          </span>
          <span className="text-DGreen font-semibold text-2xl font-pacifico ">
            {Quote?.dateAdded}
          </span>
        </section>
        {/* Date Modified  */}
        <section className="flex md:flex-row flex-col gap-5  mb-5 ">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Date Modified :-{" "}
          </span>
          <span className="text-DGreen font-semibold text-2xl font-pacifico ">
            {Quote?.dateModified}
          </span>
        </section>
      </section>
    </>
  );
};

export default QuoteDetails;

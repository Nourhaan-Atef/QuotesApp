import { Link } from "react-router-dom";
import { AuthorState } from "../../Slices/Authors";
import { useAppSelector } from "../../Store/hooks";
import Card from "../../Components/Card/QuoteCard";

const AuthorDetails = () => {
  const { Author } = useAppSelector(AuthorState);
  return (
    <div>
      <h1 className="font-bold text-red-500 text-center text-2xl font-pacifico underline uppercase mt-10">
        -- Author Details Page --
      </h1>
      <Link to="/authors" className="flex justify-end">
        <button className=" mt-2 px-14 py-2 bg-DGreen font-bold font-raleway text-white rounded-xl border-2 hover:bg-white hover:text-DGreen hover:border-DGreen">
          Back
        </button>
      </Link>
      <section className=" py-10 px-5 rounded-3xl">
        {/* Author Name */}
        <section className="flex gap-5 mb-5 items-center mt-5">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Author Name :-{" "}
          </span>

          <span className="text-DGreen font-semibold text-2xl font-raleway ">
            {Author?.name}
          </span>
        </section>
        {/* Author Description */}
        <section className="flex gap-5 mb-5 items-center mt-5">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Author Description :-{" "}
          </span>

          <span className="text-DGreen font-semibold text-2xl font-raleway ">
            {Author?.description}
          </span>
        </section>
        {/* Content Section */}
        <section className="flex flex-col justify-center items-center mb-10">
          <span className="mt-5 font-semibold text-xl font-merriweather text-white text-center rounded-bl-3xl rounded-tr-3xl bg-gray-600 px-10 py-5 border-b-4 border-b-red-500">
            {Author?.bio}
          </span>
        </section>
        <section className="flex gap-5 mb-5">
          <p className="font-bold font-raleway text-xl text-gray-600">
            Author on Wikipedia : -
          </p>
          <a
            href={`${Author?.link}`}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-600 font-semibold text-2xl font-raleway underline"
          >
            {Author?.link}
          </a>
        </section>
        {/* Date Added */}
        <section className="flex gap-5 mb-5 items-center">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Date Added :-{" "}
          </span>
          <span className="text-DGreen font-semibold text-2xl font-pacifico ">
            {Author?.dateAdded}
          </span>
        </section>
        {/* Date Modified  */}
        <section className="flex gap-5  mb-5 items-center">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Date Modified :-{" "}
          </span>
          <span className="text-DGreen font-semibold text-2xl font-pacifico ">
            {Author?.dateModified}
          </span>
        </section>
        <section className="flex flex-col gap-5 mb-5 justify-center items-center mt-5">
          <span className="font-bold font-raleway text-xl text-gray-600">
            Author Quotes
          </span>

          {Author?.quoteCount === 0 ? (
            <div className="font-bold font-raleway text-xl text-red-600">
              This Author Don't Have Any Quotes Else
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              <Card QuotesList={Author?.quotes} />
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default AuthorDetails;

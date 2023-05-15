import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchAllAuthors } from "../../Middlewares/FetchAllAuthors/FetchAllAuthors";
import { AuthorState } from "../../Slices/Authors";
import AuthorCard from "../../Components/Card/AuthorCard";
import { Authors } from "../../Models/interfaces/authors";

const AuthorsPage = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const { AuthorsList, loading } = useAppSelector(AuthorState);
  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, [dispatch]);
  if (loading) {
    return <div>Loading......</div>;
  }
  const search = (AuthorsList: Authors[]) => {
    return AuthorsList.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(query) ||
        item.slug.toLocaleLowerCase().includes(query)
    );
  };
  return (
    <div>
      <h1 className="font-bold text-red-500 text-center text-2xl font-pacifico underline uppercase mt-10">
        -- Authors Page--
      </h1>
      <div className="mt-10">
        <input
          type="search"
          placeholder="Search about author........."
          className="outline-none border-2 border-red-500 rounded-3xl px-5 md:py-3 py-2 md:w-96  w-full"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <AuthorCard AuthorsList={search(AuthorsList)} />
      </div>
    </div>
  );
};

export default AuthorsPage;

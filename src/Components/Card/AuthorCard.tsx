import { useNavigate } from "react-router-dom";
import { Authors } from "../../Models/interfaces/authors";
import penSymbol from "../../assets/pen.svg";
import { useAppDispatch } from "../../Store/hooks";
import { getCertainAuthor } from "../../Middlewares/GetCertainAuthor/GetCertainAuthor";

interface Props {
  AuthorsList: Authors[];
}
const AuthorCard: React.FC<Props> = ({ AuthorsList }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      {AuthorsList.map((item) => {
        return (
          <div
            className="px-3 py-2 rounded-ss-3xl rounded-ee-3xl mt-10 border-2 border-DGreen flex flex-col justify-between"
            key={item._id}
          >
            <section className="flex items-center justify-between text-red-500">
              <img
                src={penSymbol}
                alt="quoteSymbol"
                className="w-5 cursor-pointer"
              />

              <p
                className="font-bold font-raleway capitalize italic underline cursor-pointer"
                onClick={() => {
                  dispatch(getCertainAuthor({ id: item._id })).then((res) => {
                    if (res.meta.requestStatus === "fulfilled") {
                      navigate(`/author/${item._id}/details`);
                      console.log(item._id);
                    }
                  });
                }}
              >
                {item.name}
              </p>
            </section>
            <section className="flex justify-center  text-DGreen">
              <p className="font-semibold font-raleway text-xl text-center py-5">
                {item.description}
              </p>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default AuthorCard;

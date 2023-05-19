import Loading from "../../assets/loading.gif";
const LoaderHandling = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={Loading} alt="Loading" className="w-52" />
      {/* <div className="font-merriweather font-extrabold text-2xl">LOADING .......</div> */}
    </div>
  );
};

export default LoaderHandling;

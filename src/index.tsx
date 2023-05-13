import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./Styles/index.css";
import { router } from "./Routes";
import { Provider } from "react-redux";
import store from "./Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Dashboard from "./components/Dashboard";

const store = configureStore();

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
);

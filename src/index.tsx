import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement: any = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

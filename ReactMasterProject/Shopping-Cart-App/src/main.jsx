import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import ThemeProvider from "./context/ThemeProvider";

import App from "./App";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <BrowserRouter>

      <ThemeProvider>

        <Provider store={store}>

          <App />

        </Provider>

      </ThemeProvider>

    </BrowserRouter>

  </StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TransactionsProvider } from "./contexts/transactionsContext";
import App from "./App";
import { GlobalStyle } from "./style/global";
import { TypographyStyle } from "./style/typography";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <BrowserRouter>
        <GlobalStyle />
        <TypographyStyle />
        <App />
        <ToastContainer autoClose={1200} />
      </BrowserRouter>
    </TransactionsProvider>
  </React.StrictMode>
);

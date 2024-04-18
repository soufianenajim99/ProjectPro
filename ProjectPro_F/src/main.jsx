import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  ContextProviderg,
  useStateContext,
} from "./contexts/contextproviderg.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ContextProviderg>
        <RouterProvider router={router} />
      </ContextProviderg>
    </NextUIProvider>
  </React.StrictMode>
);

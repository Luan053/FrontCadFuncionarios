import "./globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { SignIn } from "./pages/signin";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>
);

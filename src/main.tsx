import "./globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { SignIn } from "./pages/signin";
import { Home } from "./pages/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Error404 } from "./pages/error404";
import { RequireAuth } from "./components/pagesComponents/RequireAuth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import { BrowserRouter } from "react-router-dom";

import "./style";
import { Routes } from "./Routes";

export const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

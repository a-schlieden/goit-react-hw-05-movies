import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/home/Home";
import Movies from "pages/movies/Movies";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

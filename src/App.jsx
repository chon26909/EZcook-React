import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import RenderPage from "./pages/RenderPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const DetailPage = React.lazy(() => import('./pages/DetailPage'))
const SearchPage = React.lazy(() => import('./pages/SearchPage'))

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<RenderPage />} >
        <Routes>
          <Route path="/" >
            <Route index element={<HomePage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;

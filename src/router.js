import React from 'react';
// 1. router.js는 App.js에서 다른 페이지로 이동하는 각 통로의 역할을 한다.
import {createBrowserRouter} from "react-router-dom";
import Movies from "./pages/Movies";
import News from "./pages/News";
import MoviesDetail from "./pages/MoviesDetail";


// 2. createBroeserRouter 상수로 지정
const Router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path : "/news",
        element : <News />
    },
    {
        path : "/movies/:moviesid",
        element : <MoviesDetail />
    }

])

export default Router;
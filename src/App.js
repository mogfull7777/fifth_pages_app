import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";

const App = () => {
    return (
        // npm install react-router-dom을 설치 루 RouterProvider 만들기
        <RouterProvider router={router} />
    );
};

export default App;
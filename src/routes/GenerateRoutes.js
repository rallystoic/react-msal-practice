import React  from "react";
import { useRoutes,Route } from "react-router-dom";
import About from "pages/About/About";
import Home from "pages/Home/Home";


    const list = [{
        path : "home",
        element : <Home />
    },
        {
        path : "about",
        element : <About />
        }
    ];
    export const listItems = list.map((x) => <Route path={x.path} element={x.element} />);
    export const Display = () => {
        console.log("trigger Display");
        return "screen";
    };


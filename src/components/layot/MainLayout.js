import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";
import RightBar from "./RightBar";

const MainLayout = () => {
    return (
        <div className="app">
            <Header/>
            <div className="flex container">
                <LeftBar/>
                <Outlet/>
                <RightBar/>
            </div>
        </div>
    )
}

export default MainLayout;
import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";
import RightBar from "./RightBar";

const MainLayout = () => {
    return (
        <div className="app">
            <Header/>
            <div className="flex pr-[32px] pl-[32px]">
                <LeftBar/>
                <Outlet/>
                <RightBar/>
            </div>
        </div>
    )
}

export default MainLayout;
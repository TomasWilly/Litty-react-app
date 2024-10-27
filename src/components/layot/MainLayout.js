import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";
import RightBar from "./RightBar";

const MainLayout = () => {
    return (
        <div className="app">
            <Header/>
            <div className="flex lg:grid flex-col xl:flex-row xl:flex lg:grid-cols-2 gap-4 pr-[32px] pl-[32px]">
                <LeftBar/>
                <Outlet/>
                <RightBar/>
            </div>
        </div>
    )
}

export default MainLayout;
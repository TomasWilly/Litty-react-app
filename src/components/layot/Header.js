import React from "react";

const Header = () => {
    return (
        <div className="header flex items-center justify-center">
            <div className="flex justify-between w-full lg:w-2/4">
                <div className="logo flex items-center relative">
                    <img src="assets/images/logo.png" alt="" />
                    <input className="hidden md:block" type="text" placeholder="Search" />
                    <i className="fa fa-search custom absolute hidden md:block"/>
                </div>
                <div className="topbar items-center hidden sm:flex">
                    <img className=" mr-[10px] md:mr-[20px]" src="assets/images/postadd.png" alt="" />
                    <img className=" mr-[10px] md:mr-[20px]" src="assets/images/explore.png" alt="" />
                    <i className="fa fa-envelope custom mr-[10px] md:mr-[20px]"></i>
                    <i className="fa fa-plus-square custom mr-[10px] md:mr-[20px]"></i>
                    <i className="fa fa-home custom mr-[10px] md:mr-[20px]"></i>
                    <img className=" mr-[10px] md:mr-[20px]" src="assets/images/Ellipse.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;
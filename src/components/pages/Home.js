import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import classnames from "classnames";

const Home = () => {
    const [menuclass, setMenuclass] = useState(true);

    const clickMenubutton = () => {
        setMenuclass(!menuclass);
    }

    return (
        <div className="grow order-first col-span-3 xl:order-none xl:col-auto relative">
            <div className=" relative">                
                <img className="w-[14%] ml-[6%] top-[80%] md:block hidden absolute" src="assets/images/Ellipse00.png" alt="" />
                <img className="w-[100%]" src="assets/images/Frame8.png" alt="" />
            </div>
            <div className="flex flex-col md:flex-row ml-[0px] md:ml-[22%] items-center justify-between mt-[16px]">
                <div className="grid grid-cols-1 place-items-center md:place-items-start mb-[5px]">
                    <div className="flex items-center">
                        <span className="mr-[20px] font-bold text-[24px] text-white">Span World</span>
                        <img className="w-[32px] h-[32px]" src="assets/images/cil_cog.png" alt="" />
                    </div>
                    <h3 className="font-bold text-[18px] text-fontcolor">@Span World</h3>
                </div>                
                <div className="flex">
                    <button className="h-[27px] w-[101px] bg-fontcolor text-[12px] font-black rounded-[8px]">MESSAGE</button>
                    <button className="h-[27px] w-[101px] bg-fontcolor text-[12px] font-black rounded-[8px] ml-[20px]">FOLLOW</button>
                </div>
                <img className="w-[21px] hidden md:block h-[3.5px] mr-[10px]" src="assets/images/Vector.png" alt="" />
            </div>
            <div className="md:ml-[22%] md-[0] mt-[16px] align-center">
                <h3 className="font-normal uppercase leading-[28.48px] text-white text-[18px]">Creating a new MMORPG which features fast paced action combat
                And a world that evolves around the player base<span className="text-fontcolor"> #Spawn</span></h3>
                <h3 className="font-normal uppercase leading-[38.48px] text-fontcolor text-[18px]">spawn.world</h3>
            </div>
            <div className="hidden 2xl:grid grid-cols-4 gap-0 place-items-center place-content-evenly auto-rows-max mt-[20px]">
                <h3 className="font-bold uppercase leading-[38.48px] text-white text-[21px]">60 posts</h3>
                <h3 className="font-bold uppercase leading-[38.48px] text-white text-[21px]">5 products</h3>
                <h3 className="font-bold uppercase leading-[38.48px] text-white text-[21px]">12.2k followers</h3>
                <div className="flex items-center justify-center">
                    <img className="w-[32px] h-[32px] mr-[16px]" src="assets/images/logo.png" alt="" />
                    <h3 className="font-bold uppercase leading-[38.48px] text-fontcolor text-[21px]">74.3k</h3>
                </div>
            </div>           
            <button className="block sm:hidden" onClick={clickMenubutton}>
                <div className="w-[25px] h-[3px] bg-fontcolor mt-[4px] mb-[4px] "></div>
                <div className="w-[25px] h-[3px] bg-fontcolor mt-[4px] mb-[4px] "></div>
                <div className="w-[25px] h-[3px] bg-fontcolor mt-[4px] mb-[4px] "></div>
            </button>
            <div className={classnames("sm:flex sm:flex-row flex-col absolute bg-gray sm:bg-dark sm:relative items-center justify-evenly border-b-[1px] border-fontcolor sm:pt-[30px]",{'hidden':menuclass})}>
                <button className="uppercase w-[100%] text-fontcolor font-bold text-[14px] md:text-[18px] pt-[5px] pb-[5px] 2xl:pr-[30px] 2xl:pl-[30px] hover:bg-gray-dark sm:border-b-[4px] sm:border-fontcolor">posts</button>
                <button className="uppercase w-[100%] text-fontcolor font-bold text-[14px] md:text-[18px] pt-[5px] pb-[5px] 2xl:pr-[30px] 2xl:pl-[30px] hover:bg-gray-dark">shop</button>
                <button className="uppercase w-[100%] text-fontcolor font-bold text-[14px] md:text-[18px] pt-[5px] pb-[5px] 2xl:pr-[30px] 2xl:pl-[30px] hover:bg-gray-dark">subscribe</button>
                <button className="uppercase w-[100%] text-fontcolor font-bold text-[14px] md:text-[18px] pt-[5px] pb-[5px] 2xl:pr-[30px] 2xl:pl-[30px] hover:bg-gray-dark"> collaborate</button>
            </div> 

            <Outlet />
        </div>
    )
}

export default Home;
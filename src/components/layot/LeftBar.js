import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";

const personDatas = [
    {
        name:"@JOHN.DOE",
        value:77.8,
        key1:1,
        key2:1,
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@SPAWN.WORLD",
        value:77.8,
        key1:1,
        key2:0,
        url:"assets/images/Ellipse4.png"
    },
    {
        name:"@JOHN.DOE",
        value:77.8,
        key1:1,
        key2:1,
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@JOHN.DOE",
        value:77.8,
        key1:1,
        key2:1,
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@JOHN.DOE",
        value:77.8,
        key1:1,
        key2:1,
        url:"assets/images/Ellipse3.png"
    }
]

const trendsDatas = [
    {
        button:'GAMING',
        value1:123,
        value2:121.1,
        url1:'assets/images/Ellipse3.png',
        url2:'assets/images/Ellipse3.png',
        url3:'assets/images/Ellipse3.png'
    },
    {
        button:'GAMING',
        value1:123,
        value2:121.1,
        url1:'assets/images/Ellipse3.png',
        url2:'assets/images/Ellipse3.png',
        url3:'assets/images/Ellipse3.png'
    },
    {
        button:'GAMING',
        value1:123,
        value2:121.1,
        url1:'assets/images/Ellipse3.png',
        url2:'assets/images/Ellipse3.png',
        url3:'assets/images/Ellipse3.png'
    },
    {
        button:'GAMING',
        value1:123,
        value2:121.1,
        url1:'assets/images/Ellipse3.png',
        url2:'assets/images/Ellipse3.png',
        url3:'assets/images/Ellipse3.png'
    },
    {
        button:'GAMING',
        value1:123,
        value2:121.1,
        url1:'assets/images/Ellipse3.png',
        url2:'assets/images/Ellipse3.png',
        url3:'assets/images/Ellipse3.png'
    }
]

const LeftBar = () => {
    return (
        <div className="leftbar flex-none w-full lg:w-1/4">
            <div className="mb-[22px]">
                <div className="flex items-center">
                    <img src="assets/images/logo.png" alt="" />
                    <h2 className="text-fontcolor font-bold">WHO'S LITTY</h2>
                </div>
                {personDatas.map((item, index) => {
                    return (
                        <div key={index} className=" text-fontcolor">
                            <Content1 data={item} />
                        </div>                        
                    )
                })}
            </div>
            <div>
                <div className="place-items-center">
                    <h3 className="text-white font-medium text-[24px]">TRENDS</h3>
                </div>
                {trendsDatas.map((item, index) => {
                    return (
                        <div key={index} className=" text-fontcolor">
                            <Content2 data={item} />
                        </div>                        
                    )
                })}
            </div>
        </div>
    )
}

export default LeftBar;
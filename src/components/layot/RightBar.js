import React from "react";
import Content3 from "./Content3";
import Content4 from "./Content4";

const personDatas = [
    {
        name:"@JOHN.DOE",
        value:77.8,
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@SPAWN.WORLD",
        value:77.8,
        button: [
            'GAMING','TECH','MUSIC'
        ],
        url:"assets/images/Ellipse4.png"
    },
    {
        name:"@JOHN.DOE",
        value:77.8,
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@JOHN.DOE",
        value:77.8,
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@JOHN.DOE",
        value:77.8,
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    }
]

const trendsDatas = [
    {
        url:"assets/images/Frame48.png",
        title:"NIKE PENTHOUSE PARTY",
        area:[
            'MANCHESTER','UNITED KINGDOM'
        ],
        kind:'GAIN',
        value:50,
        button:'LAUNCH'
    },
    {
        url:"assets/images/Frame49.png",
        title:"TWITCH VR PARTY",
        area:[
            'VIRTUAL'
        ],
        kind:'REQUIRED',
        value:5,
        button:'GIVEAWAY'
    },
    {
        url:"assets/images/Frame50.png",
        title:"RSVP MANSION PARTY",
        area:[
            'MANCHESTER','UNITED KINGDOM'
        ],
        kind:'COST',
        value:100,
        button:''
    }
]

const RightBar = () => {
    return (
        <div className="rightbar flex-none w-full xl:w-1/4">
            <div className="mb-[22px]">
                <div className="place-items-center">
                    <h3 className="text-white font-bold text-[24px]">MATCH</h3>
                </div>
                <div>
                    {personDatas.map((item, index) => {
                        return (
                            <div key={index} className=" text-fontcolor">
                                <Content3 data={item} />
                            </div>                        
                        )
                    })}
                </div>
            </div>
            <div className="inline">
                <div className="place-items-center">
                    <h3 className="text-white font-bold text-[24px]">ENENTS</h3>
                </div>
                {trendsDatas.map((item, index) => {
                    return (
                        <div key={index} className={item.button!==''?"item4 text-fontcolor":"item4 bg-bgyellow text-fontcolor"}>
                            <Content4 data={item} />
                        </div>                        
                    )
                })}
            </div>
        </div>
    )
}

export default RightBar;
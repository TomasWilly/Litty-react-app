import React from "react";
import MatchComponent from "./MatchComponent";
import EventsComponent from "./EventsComponent";

const personDatas = [
    {
        name:"@JOHN.DOE",
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@SPAWN.WORLD",
        button: [
            'GAMING','TECH','MUSIC'
        ],
        url:"assets/images/Ellipse4.png"
    },
    {
        name:"@JOHN.DOE",
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@JOHN.DOE",
        button: [
            'GAMING','TECH'
        ],
        url:"assets/images/Ellipse3.png"
    },
    {
        name:"@JOHN.DOE",
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
    const showPersonData = personDatas.map((item, index) =>
        <div key={`litty-${index}`} className=" text-fontcolor">
            <MatchComponent {...item} />
        </div>
    );

    const showTrendsDatas = trendsDatas.map((item, index) => 
        <div key={`trend-${index}`} className={item.button!==''?"events text-fontcolor":"item4 bg-bgyellow text-fontcolor"}>
            <EventsComponent {...item} />
        </div>                        
    );

    return (
        <div className="rightbar flex-none w-full xl:w-1/4">
            <div className="mb-[22px]">
                <div className="place-items-center">
                    <h3 className="text-white font-bold text-[24px]">MATCH</h3>
                </div>
                <div>
                    {showPersonData}
                </div>
            </div>
            <div className="inline">
                <div className="place-items-center">
                    <h3 className="text-white font-bold text-[24px]">ENENTS</h3>
                </div>
                {showTrendsDatas}
            </div>
        </div>
    )
}

export default RightBar;
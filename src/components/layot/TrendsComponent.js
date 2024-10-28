import React from 'react'

const TrendsComponent = ({button,value1,value2,url1,url2,url3}) => {
  return (
    <div className='trends ml-[15px] item1 flex justify-between items-center'>
        <button className='font-normal text-[12px] place-self-center'>{button}</button>
        <div className="place-items-center">
          <h3 className="font-normal text-[12px] text-white">POSTS</h3>
          <h3 className="font-normal text-[12px] text-white">{value1}K</h3>
        </div>
        <div className="flex items-center">
          <img src={url1} alt="" />
          <img src={url2} alt="" />
          <img src={url3} alt="" />
        </div>
        <div className="flex items-center">
          <h4 className='flex-none text-[18px] font-normal'>{value2}K</h4>
          <img className='flex-none w-[18.24px] h-[16px] ml-[12px]' src="assets/images/logo.png" alt="" />
        </div>
    </div>
  )
}

export default TrendsComponent
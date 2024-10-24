import React from 'react'

const Content2 = (props) => {
  return (
    <div className='ml-[15px] item1 flex justify-between items-center'>
        <button className='font-normal text-[12px] place-self-center'>{props.data.button}</button>
        <div className="place-items-center">
          <h3 className="font-normal text-[12px] text-white">POSTS</h3>
          <h3 className="font-normal text-[12px] text-white">{props.data.value1}K</h3>
        </div>
        <div className="flex items-center">
          <img src={props.data.url1} alt="" />
          <img src={props.data.url2} alt="" />
          <img src={props.data.url3} alt="" />
        </div>
        <div className="flex items-center">
          <h4 className='flex-none text-[18px] font-normal'>{props.data.value2}K</h4>
          <img className='flex-none w-[18.24px] h-[16px] ml-[12px]' src="assets/images/logo.png" alt="" />
        </div>
    </div>
  )
}

export default Content2
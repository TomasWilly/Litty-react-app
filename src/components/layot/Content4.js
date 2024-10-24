import React from 'react'

const Content4 = (props) => {
  return (
    <div className='flex'>
        <img className='grow-0 mr-[16px] w-[129px] h-[76px]' src={props.data.url} alt="" />
        <div className='grid grid-cols-1 place-items-start place-content-between grow'>
          <div className="flex w-[100%] items-start justify-between">
            <h3 className='font-normal text-fontcolor text-[14px]'>{props.data.title}</h3>
            {props.data.button !== ''?<button className='font-normal flex items-center text-[14px]'>{props.data.button}</button>:<></>}
          </div>
          <h3 className='font-normal text-white text-[14px]'>{props.data.area}</h3>
          <div className="grid place-items-start grid-cols-2 w-[100%]">
            <h3 className='font-normal text-white text-[14px]'>{props.data.kind}</h3>
            {props.data.button !== ''?
              <div className="flex items-center">
                <img className='flex-none w-[18.24px] h-[16px] mr-[12px]' src="assets/images/logo.png" alt="" />
                <h3 className='font-normal w-[50%] text-white text-[14px]'>{props.data.value}k</h3>
              </div>:<h3 className='font-normal text-white text-[14px]'>£{props.data.value}</h3>}
          </div>
        </div>
    </div>
  )
}

export default Content4
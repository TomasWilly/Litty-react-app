import React from 'react'

const Content4 = (props) => {
  return (
    <div className='flex flex-col sm:flex-row items-center'>
        <img className='grow-0 mr-[16px] w-[129px] h-[76px] mb-[10px]' src={props.data.url} alt="" />
        <div className='grid grid-cols-1 place-items-center sm:place-items-start place-content-between grow w-[100%]'>
          <div className="flex flex-col sm:flex-row-reverse sm:flex w-[100%] items-center justify-between">
            <div>
            {props.data.button !== ''?<button className='font-normal mb-[5px] flex items-center text-[14px]'>{props.data.button}</button>:<></>}
            </div>
            <h3 className='font-normal text-fontcolor text-[14px]'>{props.data.title}</h3>
          </div>
          <h3 className='font-normal text-white text-[14px]'>{props.data.area}</h3>
          <div className="grid place-items-center sm:place-items-start place-content-between grid-cols-2 w-[100%]">
            <h3 className='font-normal text-white text-[14px]'>{props.data.kind}</h3>
            {props.data.button !== ''?
              <div className="flex items-center">
                <img className='flex-none w-[18.24px] h-[16px] mr-[12px]' src="assets/images/logo.png" alt="" />
                <h3 className='font-normal text-white text-[14px]'>{props.data.value}k</h3>
              </div>:<h3 className='font-normal text-white text-[14px]'>£{props.data.value}</h3>}
          </div>
        </div>
    </div>
  )
}

export default Content4
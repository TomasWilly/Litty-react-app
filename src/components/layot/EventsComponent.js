import React from 'react'

const EventsComponent = ({title, value, area, url, kind,button}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center'>
        <img className='grow-0 mr-[16px] w-[129px] h-[76px] mb-[10px]' src={url} alt="" />
        <div className='grid grid-cols-1 place-items-center sm:place-items-start place-content-between grow w-[100%]'>
          <div className="flex flex-col sm:flex-row-reverse sm:flex w-[100%] items-center justify-between">
            <div>
            {button !== ''?<button className='font-normal mb-[5px] flex items-center text-[14px]'>{button}</button>:<></>}
            </div>
            <h3 className='font-normal text-fontcolor text-[14px]'>{title}</h3>
          </div>
          <h3 className='font-normal text-white text-[14px]'>{area}</h3>
          <div className="grid place-items-center sm:place-items-start place-content-between grid-cols-2 w-[100%]">
            <h3 className='font-normal text-white text-[14px]'>{kind}</h3>
            {button !== ''?
              <div className="flex items-center">
                <img className='flex-none w-[18.24px] h-[16px] mr-[12px]' src="assets/images/logo.png" alt="" />
                <h3 className='font-normal text-white text-[14px]'>{value}k</h3>
              </div>:<h3 className='font-normal text-white text-[14px]'>£{value}</h3>}
          </div>
        </div>
    </div>
  )
}

export default EventsComponent
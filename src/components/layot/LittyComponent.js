import React from 'react'

const LittyComponent = ({name,value,key1,key2,url}) => {
  return (
    <div className='litty flex items-center'>
        <img className='flex-none ml-[15px] mr-[25px] w-[36px] h-[36px]' src={url} alt="" />
        <div className='place-items-start grow'>
            <h3 className='font-normal text-[14px]'>{name}</h3>
            {key1?<button className='font-normal text-[12px] place-self-center'>GAMING</button>:<></>}
            {key2?<button className='font-normal text-[12px]'>TECH</button>:<></>}
        </div>        
        <h4 className='flex-none text-[18px] font-normal'>{value}K</h4>
        <img className='flex-none w-[18.24px] h-[16px] mr-[15px] ml-[12px]' src="assets/images/logo.png" alt="" />
    </div>
  )
}

export default LittyComponent
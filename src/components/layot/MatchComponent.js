import React from 'react'

const MatchComponent = ({url,name,value,button}) => {
  return (
    <div className='match flex items-center'>
        <img className='flex-none ml-[5px] sm:ml-[15] mr-[10px] sm:mr-[25px] w-[36px] h-[36px]' src={url} alt="" />
        <div className='place-items-start grow'>
            <h3 className='font-normal text-[14px]'>{name}</h3>
            {button.map((item,index) => {
                return (
                    <button key={index} className='font-normal text-[12px]'>{item}</button>
                )
            })}
        </div>
        <button>            
            <img className='flex-none w-[56px] h-[36px]' src="assets/images/Frame34.png" alt="" />
        </button>
        <button className=' ml-[12px]'>
            <img className='flex-none w-[56px] h-[36px]' src="assets/images/Frame33.png" alt="" />
        </button>
    </div>
  )
}

export default MatchComponent
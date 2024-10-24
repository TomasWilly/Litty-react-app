import React from 'react'

const Content3 = (props) => {
  return (
    <div className='item3 flex items-center'>
        <img className='flex-none ml-[25px] mr-[25px] w-[36px] h-[36px]' src={props.data.url} alt="" />
        <div className='place-items-start grow'>
            <h3 className='font-normal text-[14px]'>{props.data.name}</h3>
            {props.data.button.map((item,index) => {
                return (
                    <button key={index} className='font-normal text-[12px] place-self-center'>{item}</button>
                )
            })}
        </div>
        <button>            
            <img className='flex-none w-[56px] h-[36px] ml-[12px]' src="assets/images/Frame34.png" alt="" />
        </button>
        <button>
            <img className='flex-none w-[56px] h-[36px] ml-[12px]' src="assets/images/Frame33.png" alt="" />
        </button>
    </div>
  )
}

export default Content3
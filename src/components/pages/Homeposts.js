import React from 'react'

const data1 = [
    {
        title:'gameplay',
        url:'assets/images/Ellipse12.png'
    },
    {
        title:'promo',
        url:'assets/images/Ellipse12.png'
    },
    {
        title:'characthers',
        url:'assets/images/Ellipse12.png'
    },
    {
        title:'environments',
        url:'assets/images/Ellipse12.png'
    },
    {
        title:'concepts',
        url:'assets/images/Ellipse12.png'
    }
];

const data2 = [
    {url:'assets/images/Frame73.png'},
    {url:'assets/images/Frame74.png'},
    {url:'assets/images/Frame75.png'}
]

const Homeposts = () => {
  return (
    <div className='mb-[20px]'>
        <div className="pr-[10px] md:grid flex items-center grid-flow-col overflow-auto h-[120px] content-center bg-gray2 border-[1px] border-fontcolor mt-[10px] mb-[10px]">
            {
                data1.map((item, index) => {
                    return (
                        <div key={index} className='place-items-center ml-[10px]'>
                            <img src={item.url} alt="" />
                            <h3 className='hidden md:block uppercase text-[11px] font-normal text-fontcolor mt-[10px]'>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
        <div className="grid grid-cols-3 gap-4">
            {
                data2.map((item, index) => {
                    return (
                        <img key={index} src={item.url} alt="" />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Homeposts
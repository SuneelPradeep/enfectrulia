import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='my-8 mx-4 w-full h-full bg-white flex flex-col  gap-2 items-center justify-center'>
        <h1 className='text-4xl font-bold text-gray-800 my-4'> See how Trulia can help</h1>
        <div className='flex flex-col lg:flex-row gap-4 justify-between items-center '>
            <div className='flex flex-col w-72 items-center justify-center gap-4'>
               
                <Image width={100} height={80} alt='rent' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx83iPOR8D343-AZXlB7inbsMHf0txNoIRGg&s"} /> <p className="text-2xl font-semibold text-gray-800">Rent a home </p>
             <p className='text-center text-gray-500'>with 35+ filters and customers keywords search ,Trulia can help you easily find a home or apartment for rent that you will see find rent</p>
              <div className="bg-teal-700 hover:bg-white border hover:border-teal-700 hover:text-teal-600 text-white text-semibold py-3 px-4  rounded-lg"> Find a rental</div>
            </div>
            
            
            <div className='flex flex-col w-64 items-center justify-center gap-4'>
               
               <Image width={100} height={80} alt='rent'src={"data:image/png;base64,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"}  />
                <p className="text-2xl font-semibold text-gray-800">Buy a home </p>
            <p className='text-center text-gray-500'>with 35+ filters and customers keywords search ,Trulia can help you easily find a home or apartment for rent that you will see find rent</p>
            <div className="bg-teal-700 hover:bg-white border hover:border-teal-700 hover:text-teal-600 text-white text-semibold py-3 px-4  rounded-lg"> Find a home </div>
           
           </div>
           <div className='flex flex-col w-72 items-center justify-center gap-4'>
               
               <Image width={100} height={80} alt='rent' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0xSg7O12-toyEyDwmVBI1u1rHggD15G0qg&s"} />
                <p className="text-2xl font-semibold text-gray-800">See neighborhoods </p>
            <p className='text-center text-gray-500'>with 35+ filters and customers keywords search ,Trulia can help you easily find a home or apartment for rent that you will see find rent</p>
            <div className="bg-teal-700 hover:bg-white border hover:border-teal-700 hover:text-teal-600 text-white text-semibold py-3 px-4  rounded-lg"> Learn more</div>
           
           </div>
        </div>
    </div>
  )
}

export default About
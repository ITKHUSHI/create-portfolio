import React from 'react'
import { education } from '@/data/education.data'
function EducationSection() {
  return (
	<>
	 <div className=" absolute w-full h-auto top-32 p-4 ">

	 <div className="flex flex-col justify-center items-center mb-11 ">
  
		   <h2 className="font-bold text-2xl p-2 md:text-4xl bg-gradient-to-r from-blue-500">Education</h2>
	 </div>
	
   <div className=' grid m-2 sm:m-16 lg:m-24 gap-10'>
   {
        education.map((data , index)=>(
			<div key={index} className=" p-4 md:p-8 justify-start items-center  shadow-lg shadow-black bg-gradient-to-r from-black" >
            <div className=' justify-center items-start p-2'>
                <h2 className='p-2 font-bold text-xl'>{data.name}</h2>
                <p className='p-2 mb-4' >{data.date}</p>
                 <p className='font-italic text-xl text-gray-400' >CGPA/GRADE : {data.cgpa}</p>
            </div>
			</div>
        ))
    }
   </div>

</div>

	
	</>
  )
}

export default EducationSection
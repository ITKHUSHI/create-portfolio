import React from 'react'
import { LampDemo } from "@/components/lamp.component";
import { experience } from '@/data/experience.data'

function Experience() {
  return (
	<>
	<LampDemo/>
	
	<div className='absolute top-32 w-full h-auto left-10 '>
	
		<div className='justify-center flex items-center mb-8 '><h2 className='font-bold text-2xl p-3 mb-3 bg-gradient-to-l from-blue-900 '>Work Experience</h2></div>
		<div className=' max-w-[90%] h-auto p-2 justify-center items-center '>
			
			{
				
             experience.map((data , index)=>(
				
				<div key={index} className='h-auto p-4 m-6  shadow-md shadow-gray-500 text-gray-200 bg-gradient-to-r from-black '>
				<h2 className='font-semibold text-lg '>{data.name}</h2>
				<h1 className='font-semibold text-lg'>{data.designation}</h1>
				<h3 className="text-lg">{data.projectName}</h3>
				<p className='text-left text-wrap '>{data.description}</p>
				<p><strong>year of experience :{data.yearOfEperience} </strong></p>
				<p><strong>duration :{data.date}</strong></p>
            </div> 
			 ))
			}

		</div>
	</div>
	
	</>
  )
}

export default Experience
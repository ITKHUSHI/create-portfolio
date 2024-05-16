import React from "react";
import Link from 'next/link'
import { publication } from '@/data/publication.data'


const PublicationSection: React.FC = () => {
	
	return (
		<>
	    <div className="absolute w-full h-full top-32 p-4 ">
	<div className="flex justify-center items-center mb-11 ">
		<h2 className="font-bold text-2xl p-2 bg-gradient-to-r from-blue-700">Publication</h2>
	</div>
	
   <div className=' flex flex-col justify-center items-center gap-3 p-4 m-4  '>
   {
        publication.map((data , index)=>(
			<div key={index} className="p-4 md:p-8 justify-center items-center bg-gradient-to-r from-black flex border border-x-white ">
            <div className='justify-center items-start p-2'>
                <h2 className='p-2 font-bold text-xl'>{data.title}</h2>
                <p className='p-2 mb-4' >{data.description}</p>
                <Link href={data.link} className='p-2 bg-blue-600 rounded-sm mt-3'>Learn more</Link>
            </div>
			</div>
        ))
    }
   </div>

</div>

		
		
        </>
   )
}
export default PublicationSection
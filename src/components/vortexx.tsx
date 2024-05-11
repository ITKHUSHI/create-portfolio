import React, { useState } from 'react';
import sendInfo from '@/lib/api';
import { Vortex } from "./ui/vortex";
const initValues={name:"", email:"",message:""};
const initState={values: initValues};


export function VortexDemo() {
	
const [formData, setFormData] = useState(initValues);
const { name }=formData;

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
	...prevState,
	[name]: value
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission, e.g., send data to backend
  console.log(formData);
  // Reset form fields
  setFormData((prev)=>({
	...prev,
  }));
  try {
	await sendInfo(formData)

   } catch (error) {
	setFormData((prev)=>({
	  ...prev,
	  
	}))
	console.log("data not fecthed", error);
	
  }
  

};
  return (
    <div className="w-full  mx-auto rounded-md  h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className='w-full h-[700px]  flex text-white justify-center items-center '>
   
   <div className='sm:w-96 md:w-[40%]' >
	 <div className='flex justify-center items-center'><h2 className='font-bold text-2xl p-2 mb-5' >Contact Me</h2></div>
	 <form onSubmit={handleSubmit} className="space-y-4">
	   <div>
		 <label htmlFor="name" className="block mb-1">Name</label>
		 <input
		   type="text"
		   id="name"
		   name="name"
		   value={formData.name}
		   onChange={handleChange}
		   className="w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500 px-4 py-2 text-black"
		   required
		 />
	   </div>
	   {/* <div>
		 <label htmlFor="contact" className="block mb-1">contact</label>
		 <input
		   id="contact"
		   name="contact"
		   value={formData.contact}
		   onChange={handleChange}
		   className="w-full  border-gray-300 rounded-md focus:outline-none focus:border-blue-500 px-4 py-2 text-black"
		   required
		 />
	   </div> */}
	   <div>
		 <label htmlFor="email" className="block mb-1">Email</label>
		 <input
		   type="email"
		   id="email"
		   name="email"
		   value={formData.email}
		   onChange={handleChange}
		   className="w-full text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500 px-4 py-2"
		   required
		 />
	   </div>
	   <div>
		 <label htmlFor="message" className="block mb-1">Message</label>
		 <textarea
		   id="message"
		   name="message"
		   value={formData.message}
		   onChange={handleChange}
		   className="w-full text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500 px-4 py-2 h-32 resize-none"
		   required
		 />
	   </div>
	   <div>
		 <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
	   </div>
	 </form>
   </div>
   
   </div>
      </Vortex>
    </div>
  );
}

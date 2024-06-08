import { toast } from "react-toastify";

// import handler from "@/pages/api/contact";
interface DataProps {
	name: string;
	email: string;
	message: string;
  }
  
const sendInfo = async (data:DataProps) => {
	try {
	  const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT !, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),

	  });
  
	  const body = await res.json();
  
	  if (res.ok) {
		toast.success(`Mail send Sussessfully 🚀`);
	  }
  
	  if (res.status === 400) {
		console.log(`${body.message} 😢`);
		toast.error(`${body.message} 😢`);

	  }
	} catch (error) {
	  console.log('Something went wrong: ', error);
	  toast.error( "somthing went wrong");
	}
	
  };
  export default sendInfo
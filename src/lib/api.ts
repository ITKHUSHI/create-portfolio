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
		alert(`Mail send Sussessfully 🚀`);
	  }
  
	  if (res.status === 400) {
		alert(`${body.message} 😢`);
	  }
	} catch (err) {
	  console.log('Something went wrong: ', err);
	}
	
  };
  export default sendInfo
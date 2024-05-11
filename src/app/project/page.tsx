'use client'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { projects } from '@/data/project.data';

 function CardHoverEffectDemo() {
  return (
    <>
<div className="absolute w-full h-full top-32 p-4 ">
	<div className="flex justify-center items-center mb-11 ">
		<h2 className="font-bold text-2xl p-2">Projects</h2>
	</div>
  </div>
      <HoverEffect items={projects} />
      </>   
  );
}
export default CardHoverEffectDemo
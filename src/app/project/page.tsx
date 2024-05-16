'use client'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { projects } from '@/data/project.data';

 function CardHoverEffectDemo() {
  return (
    <>

      <HoverEffect items={projects} />
      </>   
  );
}
export default CardHoverEffectDemo
import React from 'react';
import SkillBar from '@/components/skill';
import { skills } from '@/data/skills.data';
// import { GoogleGeminiEffectDemo } from '@/components/googleGeminiEffect';




const SkillsSection: React.FC = () => {
	
	return (
		<>
	
		<div className='w-full h-full absolute  top-36 flex justify-center items-center'>
    <div className='w-full p-2 flex flex-col'>
    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center p-2 ">SKILLS</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-5 p-2'>
      {skills.map((skill, index) => (
        <div key={index} className='w-full pb-9 '>
          <SkillBar skill={skill.title} proficiency={skill.proficiency} />
        </div>
      ))}
    </div>
  
</div>


</div>
 
{/* <GoogleGeminiEffectDemo>
</GoogleGeminiEffectDemo>
 */}

  




    


	  </>
	);
  };
  
  export default SkillsSection;
  

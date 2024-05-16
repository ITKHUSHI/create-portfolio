import React from 'react';


interface SkillBarProps {
  skill: string;
  proficiency: number; // proficiency value between 0 and 100
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, proficiency }) => {
  

  return (
    <>
    
<div className='container   '>
  <div className='card shadow-lg shadow-slate-800 bg-gradient-to-r from-slate-950'>
    <div className='percent' 
     style={{ strokeDashoffset: `calc(440 - (440 * ${proficiency} / 100))`}}>
      <div className='dot' 
      style={{transform:`rotate(calc(3.6deg*${proficiency}))`}} 
      ></div>
      <svg>
       <circle cx="70" cy="70" r="70"></circle>
       <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className='num absolute  top-16 bottom-16 left-11 justify-center items-center flex flex-col' >
        <span className='flex justify-center items-center'><h2 className='font-bold text-xl' >{proficiency}%</h2></span>
        <p>{skill}</p>
         </div>
    </div>
  </div>
  </div> 



  </>
  
  );
};

export default SkillBar;

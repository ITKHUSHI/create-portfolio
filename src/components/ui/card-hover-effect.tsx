import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
  
    title: string;
    description: string;
    link: string;
    image:string;

  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <> 
               

    <div
    
      className={cn(
		
        " mt-32  p-3 grid grid-cols-1  md:grid-cols-2   py-10",
        className
      )}
    >

      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
             
            <CardTitle>{item.title}</CardTitle>
            
            <Image 
            width='100'
            height='100'
            src={item.image} alt="image not found"
            className="w-full h-64 object-cover"  />
            <CardDescription>{item.description}</CardDescription>
            <Link href={item.link} target="_blank"
            className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700"
            > Project Link</Link>
            
          </Card>
        </Link>
      ))}
    </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
    <div
      className={cn(
        "rounded-2xl h-full top-5 w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
     
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
    </>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-xl", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm  mb-4",
        className
      )}
    >
      {children}
    </p>
   
   
  );
};

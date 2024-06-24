import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function ServiceContent({btnTitle}) {
  return (
    <div className='w-full h-14 flex items-center'>
       <Link to="./Recipe" className="text-xs w-max h-max p-2 px-5 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 tracking-wide">{btnTitle}</Link>
    </div>
  )
}

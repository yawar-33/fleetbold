'use client';

import { useState } from 'react';
import { Play, OctagonX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Marquee from "react-fast-marquee";

export default function ComingSoon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bottom-0 left-0 w-full'>
      <div className='absolute bottom-2 right-2 z-50'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setIsOpen(!isOpen)}
          style={{ zIndex: 10000 }}
          className='shadow-md'
        >
          {isOpen ? <OctagonX size={24} /> : <Play size={24} />}
        </Button>
      </div>

      <div
        className={`border-t shadow-md transition-all duration-300 ${
          isOpen ? 'h-15 opacity-100 text-foreground bg-background' : 'h-0 overflow-hidden opacity-100'
        }`}
      >
        <div className='flex justify-around py-3'>
          
        </div>
      </div>
    </div>
  );
}
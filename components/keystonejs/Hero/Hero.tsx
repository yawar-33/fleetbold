import React from 'react'
import styles from './Hero.module.css'
 
import Image from 'next/image'

type HeroProps = {
  imageSrc: string
  caption:
    | {
        discriminant: false
      }
    | {
        discriminant: true
        value: React.ReactNode
      }
}

export function Hero ({ imageSrc, caption }: HeroProps) {
  return (
    <div style={{ width:'100%', borderRadius:10 }}>
        <Image
    src={imageSrc}
    // srcSet={imageSrc}
    alt=""
  />
       
      
    </div>
   
  )
}

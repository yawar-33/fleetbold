import React from 'react'
import styles from './KeystoneImage.module.css'
import { AWS_S3_BLOG } from '@/app/(others)/config'
import { getImage } from '@/queries/graphql/GetImage'

type CarouselProps = {
  items: {
    title: string
    imageSrc: string
  }[]
}

export async function KeystoneImage ({ ...props }: any) {

  const id = props?.imageRel?.id;

  const image = await getImage(id)

  if (!image){
    return null
  }

  return (
    <div className='KeystoneImage'>
    <div className={`${styles.carousel} KeystoneImageChild`}>
             {/* {JSON.stringify(image)} */}
          <div  className={styles.carouselItem}>
              <img role="presentation" src={image?.image?.url} className={styles.carouselImage} />  
            {/* <h1 className={styles.title}>{item?.title}</h1> */}
          </div>
   
    </div>
    </div>
  )
}
// width: auto;
//     height: auto;
//     max-width: 100%;
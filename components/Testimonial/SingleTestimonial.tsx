import { Testimonial } from "@/types/testimonial";
 
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {

  const { name, designation, image, content } = review;
  console.log(review)
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      {/* <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
           
          </h3>
          <p>{designation}</p>
        </div>
      {review?.image &&  <Avatar sx={{width:60, height:60}} src={image?.src}></Avatar>} 
 
      </div>

      <Typography level="body-md" sx={{color:'#9ca3af'}} fontStyle={'italic'}>"{content}"</Typography> */}
    </div>
  );
};

export default SingleTestimonial;

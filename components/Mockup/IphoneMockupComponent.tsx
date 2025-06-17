import { Iphone15Pro } from "../ui/iphone-mockup";

 
 
export function IphoneMockupComponent({src}:any) {
   return (
      <div className="relative">
         <Iphone15Pro
            // height={150}
            className="size-full"
            src={src? src :"https://via.placeholder.com/430x880"}
         />
      </div>
   )
}
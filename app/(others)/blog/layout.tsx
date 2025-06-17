import FooterLayout from "@/components/Footer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/system";

export default function BlogLayout ({children}:any){

    return (
      <>
       <NextUIProvider>
       <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-0 sm:px-8 md:px-20 ">
       <main className="container flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
       {/* <Header />   */}
      {/* <Lines /> */}
      {children}
        <div className="pl-5 pr-5 w-full">
        <FooterLayout /> 
        </div>
       
        </main> 
        </div>
 
        </NextUIProvider>
         </>
    )
  }
  
import EarlyForm from "@/components/EalyAccess/early-form";

// function Home() {
//     return (
//         <section className="bg-white dark:bg-gray-900">
//           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//             <div className="mx-auto max-w-screen-md sm:text-center">
//               <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
//                 Sign up for our newsletter
//               </h2>
//               <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
//                 Stay up to date with the roadmap progress, announcements, and
//                 exclusive discounts. Feel free to sign up with your details.
//               </p>
//               <EarlyForm />
//             </div>
//           </div>
//         </section>
//       );
// }

function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Early Access
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Sign up now for early access to our cutting-edge realtime fleet management app. Be the first to streamline your operations, monitor your vehicles in real time, and receive exclusive updates.
          </p>
          <EarlyForm />
        </div>
      </div>
    </section>
  );
}

export default Home;
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import { getBlogsData } from "@/queries/graphql/GetBlogsData"; // Adjust the import path as needed
import SectionHeader from "@/components/Common/SectionHeader";
import { SuscribeNewslaterForm } from "@/components/Blog/suscribe-newslatter-form";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "FleetBold Blog: Real-Time Fleet Insights & Strategies",
  description:
    "Explore actionable insights and expert strategies in fleet management. From real-time tracking and maintenance alerts to remote connectivity and driver behavior analysis, our blog keeps you informed on the latest trends to optimize your rental fleet.",
  // other metadata
};

async function BlogPage() {
  redirect("https://blog.fleetbold.com/");
  
  const { posts, error } = await getBlogsData();

  if (error) return <p>Error: {error?.message}</p>;

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Insights`,
              description: `Stay up-to-date with the latest trends, expert insights, and cutting-edge strategies in the car rental industry, fleet management, and fleet ownership. Learn how to optimize your operations, enhance efficiency, and drive business growth with our specialized articles.`,
            }}
          />
        </div>
        <SuscribeNewslaterForm />
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.map((post: any, key: any) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
        <SuscribeNewslaterForm />
      </section>
      
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
}

export default BlogPage;

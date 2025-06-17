import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import { getPublicPosts } from "@/queries/graphql/GetPublicPosts";
import { getBlogsData } from "@/queries/graphql/GetBlogsData";
 
import { BUSINESS_NAME_DOMAIN, DOMAIN } from "@/app/(others)/config";
import Link from "next/link";


const Blog = async () => {


  const { posts } = await getPublicPosts();

  
  // if (errors) return <p>Error: {errors.message}</p>;
  //  return <p>Error: {JSON.stringify(posts)}</p>;

  return (
    <section className="py-10 lg:py-10 xl:py-10">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Discover practical tips, advanced strategies, and the latest trends in lead generation, marketing, and automation for real estate agents. Optimize your campaigns and maximize your results with our specialized articles.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {posts?.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
        </div>
       
      </div>
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0 flex justify-center items-center">
     
      <Link 
                   
                    href={`${DOMAIN+'/blog/'}`} 
                    aria-label="get started button"
                     
                    
      
                   >Visit Our Blog</Link>
       
      </div>
     
    </section>
  );
};

export default Blog;

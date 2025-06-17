import { fetchGraphQL, gql } from "@/app/graphql";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { GetStaticPathsResult, GetStaticPropsContext, Metadata, ResolvingMetadata } from "next";
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import Image from "next/image";
import moment from "moment";
import { concatenateParagraphs } from "@/helper/keystonejs";
import { CustomRenderer } from "@/components/keystonejs/CustomRenderer/CustomRenderer";
import BlogLayout from "./layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
import { DOMAIN } from "@/app/(others)/config";
import PodcastPlayer from "@/components/AudioPlayer/PodcastPlayer";

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
    const {props : {post}} = await getPostData(params?.blogId);
     console.log(JSON.stringify(post));
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    //post?.banner?.url
    return {
      title: post?.seoTitle? post?.seoTitle : post?.title,
      description: post?.seoDescription? concatenateParagraphs(post?.seoDescription, 250)+'...'  : concatenateParagraphs(post?.content, 250)+'...' ,
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
    openGraph: {
      images: {
        // url: post?.banner?.url? post?.banner?.url : `${DOMAIN}/images/logo/logo.png`
        url: `${DOMAIN}/images/logo/logo.png`
      }
    }
    }
  }

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
};

type DocumentProp = DocumentRendererProps['document'];

type Post = {
  id: string;
  title: string;
  slug: string;
  publishDate: string | null;
  author: {
    name: string;
  } | null;
  content: {
    document: DocumentProp;
  };
};

const SingleBlogPageId = async ({ params }: { params: any }) => {
    const { props: { post } } = await getPostData(params?.blogId);
    if (!post) {
        return <div>Post not found</div>;
    }
    return (
        <>
            <section className="pb-20 pt-5 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-25 blog_section">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 blog_content">
                    <div className="flex justify-center flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                        <div className="lg:w-2/3">
                            <div className="animate_top rounded-md lg:border lg:border-stroke bg-white p-5 lg:shadow-solid-13 lg:dark:border-strokedark lg:dark:bg-blacksection md:p-10">
                                <div className="mb-10 w-full overflow-hidden">
                                    {post?.banner?.url && (
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src={post?.banner?.url}
                                                alt="Post Banner"
                                                style={{ objectFit: 'cover', backgroundColor: '#d9ceff' }}
                                                fill
                                                className="rounded-md object-cover object-center"
                                            />
                                        </div>
                                    )}
                                </div>
                                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                                    {post?.title}
                                </h2>
                                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                                    <li>
                                        <span className="text-black dark:text-white">Author: </span>{" "}
                                        {post?.author ? post.author.name : 'Admin'}
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Published On: {moment(post?.publishDate).format('LL')}</span>{" "}
                                    </li>
                                </ul>
                                {post?.podcastAudio && (
                                    <div className="w-full">
                                        <PodcastPlayer title="Podcast Audio" audioFile={post?.podcastAudio?.url} autoPlay={true} />
                                    </div>
                                )}
                                <div className="blog-details mt-2">
                                    <CustomRenderer document={post.content.document} />
                                </div>
                                <SharePost />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const getPostData = async (slug: any) => {
    try {
        const data = await fetchGraphQL(
            gql`
                query post($slug: String!) {
                    post(where: { slug: $slug }) {
                        id
                        title
                        slug
                        publishDate
                        seoTitle
                        seoDescription
                        author {
                            name
                        }
                        banner {
                            id
                            filesize
                            width
                            height
                            extension
                            url
                        }
                        content {
                            document
                        }
                    }
                }
            `,
            { slug }
        );
        const post = data?.post;
        if (!post) {
            throw new Error("Post not found");
        }
        return { props: { post } };
    } catch (e) {
        return { props: { post: undefined, error: { name: (e as Error).name, message: (e as Error).message } } };
    }
};

export default SingleBlogPageId;

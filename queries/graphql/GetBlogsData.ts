import { fetchGraphQL, gql } from "@/app/graphql";

export const getBlogsData = async () => {
  try {
    const data = await fetchGraphQL(
      gql`
query {
  posts(where: { publicPost: { equals: true } }) {
    id
    title
    slug
    brief
    banner {
      url
    }
    content {
      document
    }
    publishDate
    author {
      name
    }
  }
}

      `
    );

    const posts = data?.posts;

    if (!posts) {
      throw new Error("No posts found");
    }

    // Filter posts that have title, slug, image, and content
    const filteredPosts = posts.filter(
      (post) =>
        post.title &&
        post.slug &&
        post.banner?.url &&
        post.content?.document?.length
    );

    return { posts: filteredPosts };
  } catch (e) {
    return {
      posts: [],
      error: { name: (e as Error).name, message: (e as Error).message },
    };
  }
};
// import { fetchGraphQL, gql } from "@/app/graphql"; // Ajusta la ruta de importación según tu configuración

// export const getPublicPosts = async () => {
//   const query = gql`
//     query {
//       posts(where: { publicPost: { equals: true } }, orderBy: { publishDate: desc }, take: 6) {
//         id
//         title
//         slug
//         brief
//         banner {
//           url
//         }
//         content {
//           document
//         }
//         publishDate
//         author {
//           name
//         }
//       }
//     }
//   `;

// //   const variables = {
// //     take: limit, // El valor de `take` proviene del parámetro `limit`
// //   };

//   const { data, errors } = await fetchGraphQL(query);
  
// //   if (errors) {
// //     // return  { posts: [], errors:errors };
// //     console.error("GraphQL errors:", errors);
// //     throw new Error("Failed to fetch public posts");
// //   }
//   let posts = data?.posts;
 
//   return  { posts: posts };
// };

import { fetchGraphQL, gql } from "@/app/graphql";

export const getPublicPosts = async () => {
  try {
    const data = await fetchGraphQL(
      gql`
query {
  posts(where: { publicPost: { equals: true } }, orderBy: { publishDate: desc }, take: 6) {
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
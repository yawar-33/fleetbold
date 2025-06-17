// import { fetchGraphQL, gql } from "@/app/graphql";


// export const getImage = async (id:any) => {
//   try {
//     if (!id) {
//       throw new Error("Image ID is required");
//     }

//     const GET_IMAGE = gql`
//       query GetImage($id: ID!) {
//         image(where: { id: $id }) {
//           id
//           name
//           type
//           filename
//           image {
//             url
//             filesize
//             width
//             height
//             extension
//           }
//         }
//       }
//     `;

//     const { data, errors } = await fetchGraphQL(GET_IMAGE, { id });

//     if (errors) {
//       console.error("GraphQL errors:", errors);
//       throw new Error("Failed to fetch image");
//     }

//     const image = data?.image;

//     if (!image) {
//       throw new Error("No image found");
//     }

//     return { image };
//   } catch (e) {
//     console.error("Error fetching image:", e);
//     return {
//       error: { name: (e as Error).name, message: (e as Error).message },
//     };
//   }
// };
// // 



export const getImage = async (id:any) => {
    const endpoint = process.env.KEYSTONE_API || 'http://localhost:3002/api/graphql'
    if (!id) {
      throw new Error("Image ID is required");
    }
  
 
  
    const query = `
      query GetImage($id: ID!) {
        image(where: { id: $id }) {
          id
          name
          type
          filename
          image {
            url
            filesize
            width
            height
            extension
          }
        }
      }
    `;
  
    const variables = { id };
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-apollo-operation-name': 'GetImageQuery', // Optional but recommended
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        const { data, errors } = result;
        if (errors) {
          console.error("GraphQL errors:", errors);
          throw new Error("Failed to fetch image");
        }
  
        return data.image;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (e:any) {
      console.error("Error fetching image:", e);
      return {
        error: { name: e.name, message: e.message },
      };
    }
  };
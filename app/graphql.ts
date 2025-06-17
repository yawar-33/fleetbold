const API_URI = process.env.KEYSTONE_API || 'http://localhost:3002/api/graphql'

export const gql = ([content]: TemplateStringsArray) => content

export async function fetchGraphQL (query: string, variables?: Record<string, any>) {
  return await fetch(API_URI, {
    cache: 'no-store',
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(x => x.json())
    .then(({ data, errors }) => {
      if (errors) {
        throw new Error(
          `GraphQL errors occurred:\n${errors.map((x: any) => x.message).join('\n')}`
        )
      }
      return data
    })
}

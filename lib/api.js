const LANDING_PAGE_FIELDS = `
mainTitle
subtitle
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractLandingPageEntries(fetchResponse) {
  return fetchResponse?.data?.landingPageCollection?.items;
}

export async function getLandingPage(preview) {
  const entries = await fetchGraphQL(
    `query {
        landingPageCollection(limit: 1, preview: ${
          preview ? "true" : "false"
        }) {
          items {
            ${LANDING_PAGE_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractLandingPageEntries(entries);
}

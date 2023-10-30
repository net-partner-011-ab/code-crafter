const LANDING_PAGE_FIELDS = `
heroLogo {
  title
  url
  width
  height
}
mainTitle
subtitle
techLogosCollection(limit: 10) {
  items {
    title
    width
    height
    url
  }
}
cardsListCollection(limit: 10) {
  __typename
  items {
    image {
      url
      title
      height
      width
    }
    title
    subtitle
    description
  }
}
contentBlockTitle
contentBlockSubtitle
contentBlockText {
  json
}
carouselTitle
carouselSubtitle
carouselImagesCollection(limit: 10){
  __typename
  items {
    url
    title
    height
    width
  }
}
`;

const SUBPAGE_FIELDS = `
title
subtitle
cardsListCollection {
  __typename
  items {
    image {
      url
      title
      height
      width
    }
    title
    subtitle
    description
  }
}
contentBlockTitle
contentBlockSubtitle
contentBlockText {
  json
}
carouselTitle
carouselSubtitle
carouselImagesCollection(limit: 10){
  __typename
  items {
    url
    title
    height
    width
  }
}
textTitle
textParagraph
iconsListCollection(limit: 5){
  items {
    link
    text
    image {
      title
      url
      width
      height
    }
  }
}
`;

const CONTACT_PAGE_FIELDS = `
title
subtitle
iconsListCollection {
  items {
    link
    text
    image {
      title
      url
      width
      height
    }
  }
}
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

function extractSubpageEntries(fetchResponse) {
  return fetchResponse?.data?.subpageCollection?.items;
}

function extractContactPageEntries(fetchResponse) {
  return fetchResponse?.data?.contactPageCollection?.items;
}

export async function getLandingPage(preview) {
  const entries = await fetchGraphQL(
    `query {
        landingPageCollection(limit: 50, preview: ${
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

export async function getSubpage(preview) {
  const entries = await fetchGraphQL(
    `query {
      subpageCollection(limit: 20, preview: ${
          preview ? "true" : "false"
        }) {
          items {
            ${SUBPAGE_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractSubpageEntries(entries);
}

export async function getContactPage(preview) {
  const entries = await fetchGraphQL(
    `query {
      contactPageCollection(limit: 50, preview: ${
          preview ? "true" : "false"
        }) {
          items {
            ${CONTACT_PAGE_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractContactPageEntries(entries);
}

# CodeCrafter 
Starter Kit :: Next.js and Bulma with connection to Contentful CMS and AWS SES contact form

Demo link: https://net-partner-011-ab.github.io/code-crafter/

#### CodeCrafter performance

<img src="https://raw.githubusercontent.com/net-partner-011-ab/code-crafter/main/assets/img/screenshot-Code-Crafter.png" width="400">

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Contentful](https://www.contentful.com/) as the data source.

#### Starter kit contains 3 routes:
##### index.js - Landing page
##### components.js - Page with all created components
##### contact.js - Contact page containing a form

## Instructions

Requirements:

+ [Node.js](https://nodejs.org/en)

Clone a project repository to your local computer and go to project folder

```bash
  git clone https://github.com/net-partner-011-ab/code-crafter.git your-project-name

  cd your-project-name
```

### Setup

#### 1. To connect Contentful CMS and AWS SES with the application (Required step)

Copy `.env.local.example` in the project root to `.env.local` and edit your preferences.

Example:  

```dotenv

CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
CONTENTFUL_MANAGEMENT_TOKEN=...

NEXT_PUBLIC_SITE_URL=...

NEXT_PUBLIC_AWS_ACCESS_KEY_ID=...
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=...
NEXT_PUBLIC_AWS_REGION=...
NEXT_PUBLIC_EMAIL=...

```
#### 2. Local build
```shell
npm run build
```

#### 3. Start local server
```shell
npm run dev
```

#### 4. Open page in local browser
```shell
http://localhost:3000
``` 

## Documentation

[Next.js](https://nextjs.org/docs)

[Bulma CSS](https://bulma.io/documentation/)

[Contentful CMS](https://www.contentful.com/developers/docs/)

[AWS SES](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_ses_code_examples.html)


## Usage/Examples

In the documentation related to Contentful, you can find all the necessary information about creating accounts, creating keys and content models with fields.

Below are examples of how they can be connected to the application. In the code itself you can find all the examples shown.

### Contentful

It is optionally, but If you want to import our Contentful space through Contentful CLI, follow the next steps:

#### 1. Locally installed `contentful-cli`

Using Homebrew:
```shell
brew install contentful-cli
```

Using npm:
```shell
npm install -g contentful-cli
```

Using yarn:
```shell
yarn global add contentful-cli
```

#### 2. Authenticated with `contentful-cli`
```shell
contentful login --management-token <management-token>
```

#### 3. Connect to your Contentful space
```shell
contentful space use 
```
Then choose your space.

#### 4. Importing content

Run following command:
```shell
contentful space import --content-file lib/config.json
```

After that, our content and content models will be imported to yours. You can find all the mentioned steps on the following link.

[Importing and exporting content with the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)


A query is written in lib/api.js along with a functions that connects the Contact page to the Contentful content model.

```javascript
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

function extractContactPageEntries(fetchResponse) {
  return fetchResponse?.data?.contactPageCollection?.items;
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
```

Then the function is imported on the Contact page and the data is accessed using the getStaticProps asynchronous function. An example is below.

```javascript
import { getContactPage } from "../lib/api";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export default function Contact({ preview, allData }) {
  const contactPage = allData[0];

  return (
    <>
      <Hero title={contactPage.title} subtitle={contactPage.subtitle} />
      <ContactForm items={contactPage.iconsListCollection.items} />
    </>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const allData = (await getContactPage(preview)) ?? [];
  return {
    props: { preview, allData },
  };
};

```

### AWS SES

In order for the form to be connected, valid credentials must be entered in the .env.local file from the beginning, and the functionality is divided into two files.

#### 1. awsConfig.js file

```javascript
import AWS from 'aws-sdk';
// Add credentials to .env
AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export { ses };
```

#### 2. config/contact.js file

```javascript
import { ses } from '../awsConfig';

export default async function sendEmail(req, res) {
    const { firstName, lastName, email, message } = req;

    const params = {
        Destination: {
            ToAddresses: [process.env.NEXT_PUBLIC_EMAIL],
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}` },
            },
            Subject: { Data: 'New Contact Form Submission' },
        },
        Source: process.env.NEXT_PUBLIC_EMAIL,
    };

    try {
        await ses.sendEmail(params).promise();
    } catch (error) {
        console.error('Error sending email:', error);
    }
} 
```

#### 3. components/ContactForm.js file
Import sendEmail and create handleSubmit function.

In the ContactForm component, you can see how the handleSubmit function was performed.

## Good to know 

Global components such as Navbar and Footer have been inserted into the layout.js component and are visible on every new page we create.

### Additional packages that we use

[react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)

[next-sitemap](https://www.npmjs.com/package/next-sitemap#getting-started)

[@contentful/rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer)

[@contentful/rich-text-types](https://www.npmjs.com/package/@contentful/rich-text-react-renderer)






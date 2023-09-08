import AWS from 'aws-sdk';
// Add credentials to .env
AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01'});

export { ses };
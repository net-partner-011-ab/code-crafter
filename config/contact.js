import { ses } from "../awsConfig";

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
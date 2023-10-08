import { ses } from "../awsConfig";

export default async function sendEmail(req, res) {
    const { firstName, lastName, email, message } = req;

    const params = {
        Destination: {
            ToAddresses: ['slobodan.bajic@np011.se'],
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}` },
            },
            Subject: { Data: 'New Contact Form Submission' },
        },
        Source: 'slobodan.bajic@np011.se',
    };

    try {
        await ses.sendEmail(params).promise();
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
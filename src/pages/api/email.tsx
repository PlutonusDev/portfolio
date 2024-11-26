import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from "@react-email/components";

import EmailMessage from "@lib/emails/message";
import EmailReply from "@lib/emails/reply";

const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({ message: "Only POST requests allowed" }),
            { status: 405 },
        );
    }

    const { email, name, message, token } = await req.body;

    if (!token) {
        return res.status(405).json({ message: "Recaptcha token missing" })
    }

    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
        );

        if (!response.data.success) return res.status(405).json({ message: "Verification failed" });
    } catch (error) {
        return res.status(500).json({ message: "Internal error" })
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const emailHtml = await render(<EmailMessage name={name} email={email} message={message} />);
    const emailReplyHtml = await render(<EmailReply name={name} email={email} message={message} />);

    const mailOptions1: Mail.Options = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.GMAIL_EMAIL,
        subject: `Message from ${name} (${email})`,
        html: emailHtml
    };

    const mailOptions2: Mail.Options = {
        from: process.env.GMAIL_EMAIL,
        to: email,
        subject: `Thank you for contacting me!`,
        html: emailReplyHtml
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions1, function (err) {
                if (err) {
                    reject(err.message);
                }
            });
            transport.sendMail(mailOptions2);
            resolve("Done deal!");
        });

    try {
        await sendMailPromise();
        return res.json({ message: 'Sent successfully! Thank you.' });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}
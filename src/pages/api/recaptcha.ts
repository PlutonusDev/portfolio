import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({ message: "Only POST requests allowed" }),
            { status: 405 },
        );
    }

    const data = await req.body;
    const { token } = data;
    const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

    if (!token) {
        return res.status(405).json({ message: "Token missing" })
    }

    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
        );

        if (response.data.success) {
            return res.status(200).json({ message: "OK" })
        } else {
            return res.status(405).json({ message: "Verification failed" })
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal error" })
    }
}
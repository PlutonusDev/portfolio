import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "@lib/email";
import ReCAPTCHA from "react-google-recaptcha";

export type FormData = {
    name: string;
    email: string;
    message: string;
}

export default () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        send(data);
    }

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);

    async function handleCaptchaSubmission(token: string | null) {
        try {
            if (token) {
                await fetch("/api/recaptcha", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                setIsVerified(true);
            }
        } catch (e) {
            setIsVerified(false);
        }
    }

    const handleChange = (token: string | null) => {
        handleCaptchaSubmission(token);
    };

    function handleExpired() {
        setIsVerified(false);
    }

    return (
        <div id="contact" className="relative z-40">
            <div className="container max-w-7xl mx-auto py-24">
                <h1 className="text-5xl font-semibold">Let's <span className="text-blue-500">Connect</span></h1>

                <ReCAPTCHA
                    sitekey={"6Ld6jfMfAAAAAOUKA4jYgZwW1uPRnyXCxZZPXlwQ"}
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                />
                <button
                    className="border-solid border-1 border-gray-300 rounded-md p-2 bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!isVerified}
                ></button>
            </div>
        </div>
    )
}
import {
    Html, Head,
    Preview, Body,
    Container, Section,
    Row, Text, Hr
} from "@react-email/components";

const locales = {
    en: {
        "email.preview": "I've received your message!",
        "email.greeting": "Hi,",
        "email.intro": "Thank you for your message. I've received it and I will respond as soon as possible.",
        "email.message": "Your message",
        "email.signoff": "Best regards",
        "email.disclaimer": "This email was sent automatically. Replies to this email will be seen. :)"
    },
    fr: {
        "email.preview": "J’ai reçu votre message!",
        "email.greeting": "Salut",
        "email.intro": "Merci de votre message. Je l’ai reçu et je vous répondrai dès que possible.",
        "email.message": "Votre message",
        "email.signoff": "Cordialement",
        "email.disclaimer": "Ce courriel a été envoyé automatiquement. Les réponses à ce courriel seront affichées. :)"
    }
}

export default ({ name, email, locale, message }) => {
    if(!locales[locale]) locale = "en";
    const messages = locales[locale];

    return (
        <Html>
            <Head />
            <Preview>{messages["email.preview"]}</Preview>

            <Body style={mainStyle}>
                <Container style={containerStyle}>
                    <Section>
                        <Row>
                            <Text style={headingStyle}>{messages["email.greeting"]} {name}!</Text>
                            <Text style={paragraphStyle}>{messages["email.intro"]}</Text>
                            <Text style={messageStyle}>{messages["email.message"]}:<br /><br />"{message}"</Text>
                            <Text style={paragraphStyle}>{messages["email.signoff"]},<br />Joshua H</Text>
                            <Hr style={hrStyle} />
                            <Text style={footerStyle}>https://plutonus.dev/<br/>{messages["email.disclaimer"]}</Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

const mainStyle = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const containerStyle = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
};

const headingStyle = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
};

const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
};

const messageStyle = {
    ...paragraphStyle,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
};

const hrStyle = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footerStyle = {
    color: "#8898aa",
    fontSize: "12px",
};
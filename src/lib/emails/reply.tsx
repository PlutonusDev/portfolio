import {
    Html, Head,
    Preview, Body,
    Container, Section,
    Row, Text, Hr
} from "@react-email/components";

export default ({ name, email, message }) => {
    return (
        <Html>
            <Head />
            <Preview>I've received your message!</Preview>

            <Body style={mainStyle}>
                <Container style={containerStyle}>
                    <Section>
                        <Row>
                            <Text style={headingStyle}>Hi, {name}!</Text>
                            <Text style={paragraphStyle}>Thank you for your message. I've received it and I will respond as soon as possible.</Text>
                            <Text style={messageStyle}>Your message:<br /><br />"{message}"</Text>
                            <Text style={paragraphStyle}>Best regards,<br />Joshua Hughes</Text>
                            <Hr style={hrStyle} />
                            <Text style={footerStyle}>https://plutonus.dev/<br/>This email was sent automatically. Replies to this email will be seen. :)</Text>
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
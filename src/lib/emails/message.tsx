import {
    Html, Head,
    Preview, Body,
    Container, Section,
    Row, Text
} from "@react-email/components";

export default ({ name, email, message }) => {
    return (
        <Html>
            <Head />
            <Preview>{name} has left you a message!</Preview>

            <Body style={mainStyle}>
                <Container style={containerStyle}>
                    <Section>
                        <Row>
                            <Text style={headingStyle}>{name} sent you a message:</Text>
                            <Text style={messageStyle}>"{message}"</Text>
                            <text>Reply to: {email}</text>
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

const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
};

const messageStyle = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
};
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";
import "./style.css";

export const PrivacyPolicy = () => {
    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Privacy Policy</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                <h1>Privacy Policy</h1>

                <br />
                <br />

                <strong>Last updated on Oct 9th 2024</strong>

                <br />
                <br />

                <p>
                    At Web Flare Designs, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, interact with our services, or engage with us for web development services. Please read this policy carefully to understand our practices regarding your personal data and how we treat it.
                </p>

                <br />

                <h3>Information we collect</h3>

                <p>
                    We collect several types of information, including but not limited to:

                    <strong>Personal Information</strong>

                    <ol>
                        <li>
                            Name
                        </li>

                        <li>
                            Email
                        </li>
                    </ol>

                    <strong>Non-Personal Information</strong>

                    <ol>
                        <li>
                            Browser type
                        </li>

                        <li>
                            IP address
                        </li>

                        <li>
                            Pages visited on our site
                        </li>

                        <li>
                            Device information
                        </li>

                        <li>
                            Cookies and similar tracking technologies
                        </li>
                    </ol>
                </p>

                <h3>How We Use Your Information</h3>

                <p>
                    We may use the information we collect for various purposes, including:

                    <ol>
                        <li>
                            To provide web development services
                        </li>

                        <li>
                            To process payments and manage your account
                        </li>

                        <li>
                            To improve and personalize our website and services
                        </li>

                        <li>
                            To communicate with you, respond to inquiries, and provide customer support
                        </li>

                        <li>
                            To send you updates, newsletters, and marketing communications (if opted-in)
                        </li>

                        <li>
                            To analyze how our website and services are being used
                        </li>
                    </ol>
                </p>

                <h3>Sharing Your Information</h3>

                <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your data under the following circumstances:

                    <ol>
                        <li>
                            With service providers (such as hosting services, payment processors, etc.) that assist us in operating our business
                        </li>

                        <li>
                            If required by law, regulation, or legal process (e.g., court orders, subpoenas)
                        </li>

                        <li>
                            In connection with a business transfer, such as a merger, acquisition, or asset sale
                        </li>
                    </ol>
                </p>

                <h3>Cookies and Tracking Technologies</h3>

                <p>
                    We use cookies and similar tracking technologies to improve your experience on our website. Cookies help us analyze usage patterns, remember preferences, and provide personalized content.

                    <br />

                    You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website.
                </p>

                <h3>Data Security</h3>

                <p>
                    We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the internet is 100% secure.
                </p>

                <h3>Your Rights</h3>

                <p>
                    Depending on your location, you may have the following rights regarding your personal data:

                    <ol>
                        <li>
                            Access: You can request a copy of the personal data we hold about you.
                        </li>

                        <li>
                            Rectification: You have the right to correct inaccurate or incomplete data.
                        </li>

                        <li>
                            Deletion: You can request that we delete your personal information, subject to legal obligations.
                        </li>

                        <li>
                            Restriction: You can request that we restrict processing of your personal information.
                        </li>

                        <li>
                            Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format.
                        </li>

                        <li>
                            Objection: You may object to the processing of your personal data for direct marketing purposes.
                        </li>
                    </ol>
                </p>

                <h3>Changes to This Privacy Policy</h3>

                <p>
                    We may update this Privacy Policy from time to time. When we make changes, we will revise the effective date at the top of this policy. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                </p>

                <br />
                <br />
            </Container>
        </HelmetProvider>
    );
};
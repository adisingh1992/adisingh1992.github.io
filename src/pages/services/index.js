import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Services = () => {
    const gotoPayment = () => {
        const newWindow = window.open('https://razorpay.me/@webflaredesigns', '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Services</title>
                    <meta name="description" content={meta.description} />
                </Helmet>


                <h1>Services</h1>

                <br />

                <Row>
                    <Col lg="8">
                        <p>
                            At <strong>Web Flare Designs</strong>, we create dynamic, scalable, and high-performing websites that help businesses thrive in the digital age. Whether you're a startup looking to establish an online presence or an established business aiming to elevate your current website, our full-stack development team is here to turn your vision into reality.
                        </p>

                        <br />

                        <h3>Our Services</h3>

                        <br />

                        <ol>
                            <li className="main-li">
                                <h4>Custom Web Development</h4>

                                <p>
                                    We specialize in building bespoke websites that are tailored to meet your unique business needs. From sleek corporate websites to complex eCommerce platforms, our team leverages the latest technologies to deliver fast, secure, and scalable websites.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>Full-stack development (React, Angular, Node.js, and more)</li>

                                    <li>Custom CMS solutions</li>

                                    <li>Integration with third-party tools and APIs</li>

                                    <li>Secure, scalable web applications</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>Responsive Web Design</h4>

                                <p>
                                    Your website needs to look great on any device. Our design team creates responsive, user-friendly websites that deliver exceptional experiences across all screen sizes. We focus on intuitive design and seamless navigation to ensure that your visitors stay engaged.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>UI/UX design tailored to your brand</li>

                                    <li>Mobile-first design principles</li>

                                    <li>Fast-loading, optimized images and code</li>

                                    <li>Cross-browser compatibility</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>eCommerce Solutions</h4>

                                <p>
                                    Looking to sell online? We design and build custom eCommerce websites that help your business grow. From Shopify to WooCommerce and Magento, we offer solutions that are secure, easy to manage, and optimized for conversions.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>Custom shopping carts and payment gateway integration</li>

                                    <li>Product catalog management</li>

                                    <li>Secure, encrypted transactions</li>

                                    <li>Ongoing support and maintenance</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>Mobile App Development</h4>

                                <p>
                                    Reach your customers wherever they are with custom mobile apps. We develop mobile applications that run smoothly on both Android and iOS platforms, using either native or cross-platform technologies.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>Native app development for iOS and Android</li>

                                    <li>Cross-platform development using React Native or Flutter</li>

                                    <li>App store submission and support</li>

                                    <li>Integration with web platforms and third-party APIs</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>API Development and Integration</h4>

                                <p>
                                    Unlock new capabilities by integrating powerful third-party services into your web or mobile applications. From payment gateways to CRM systems, we handle complex API integrations and custom API development to streamline your processes.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>Third-party API integration (e.g., payment, social media, analytics)</li>

                                    <li>Custom API development to connect your systems</li>

                                    <li>Secure, scalable APIs built for high traffic</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>Website Maintenance and Support</h4>

                                <p>
                                    Your website is a crucial part of your business, and it needs to run smoothly at all times. At Web Flare Designs, we offer comprehensive maintenance and support plans to keep your website secure, fast, and up-to-date.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>Regular software updates and patches</li>

                                    <li>Security monitoring and optimization</li>

                                    <li>Performance enhancements</li>

                                    <li>Technical support and troubleshooting</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>Cloud Hosting & DevOps</h4>

                                <p>
                                    Take your website to the cloud with our hosting and DevOps services. We ensure your web applications are deployed securely and run on reliable, scalable cloud infrastructure.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>Cloud hosting on AWS, Google Cloud, and Azure</li>

                                    <li>Scalable server architecture</li>

                                    <li>Continuous integration and deployment (CI/CD)</li>

                                    <li>Backup and disaster recovery solutions</li>
                                </ul>
                            </li>

                            <li className="main-li">
                                <h4>SEO & Digital Marketing</h4>

                                <p>
                                    What's a great website without visibility? Our SEO and digital marketing services ensure that your website ranks high in search engine results and reaches your target audience. From on-page SEO to content strategy, we help you grow your online presence.
                                </p>

                                <strong>What we offer:</strong>

                                <ul>
                                    <li>On-page SEO optimization</li>

                                    <li>Content marketing strategy</li>

                                    <li>Pay-per-click (PPC) and social media advertising</li>

                                    <li>Analytics and performance tracking</li>
                                </ul>
                            </li>
                        </ol>

                        <h3>Why Choose Web Flare Designs?</h3>

                        <p>
                            At Web Flare Designs, we don't just build websites—we craft digital experiences that reflect your brand and drive results. With a deep understanding of the latest web technologies and a commitment to customer satisfaction, we ensure that every project is a success.
                        </p>

                        <ul>
                            <li>
                                <strong>Expert Team:</strong> Our developers and designers are highly skilled in the latest frameworks and tools.
                            </li>

                            <li>
                                <strong>Customized Solutions:</strong> We tailor every project to meet the specific goals and needs of our clients.
                            </li>

                            <li>
                                <strong>Long-Term Support:</strong> We offer ongoing maintenance and support to ensure your website continues to perform at its best.
                            </li>
                        </ul>

                        <br />

                        <h3>Our Technology Stack</h3>

                        <ul>
                            <li>
                                <strong>Front-end:</strong> Angular, React, HTML5, CSS3, JavaScript, TypeScript
                            </li>

                            <li>
                                <strong>Back-end:</strong> Node.js, Express, MongoDB, MySQL, PHP
                            </li>

                            <li>
                                <strong>CMS:</strong> WordPress, Drupal, Shopify, Magento
                            </li>

                            <li>
                                <strong>Cloud:</strong> AWS, Google Cloud, Azure
                            </li>
                        </ul>
                    </Col>

                    <Col lg="1"></Col>

                    <Col lg="3">
                        <div className="payment-card">
                            <strong>Schedule a consultation call:</strong>

                            <hr />

                            <p>Pay a mere <strong>₹2100</strong> and turn your idea into a product!</p>

                            <button className="btn pay-btn" onClick={() => gotoPayment()}>
                                Pay now
                            </button>
                        </div>
                    </Col>
                </Row>

                <br />
                <br />
            </Container>
        </HelmetProvider>
    );
};
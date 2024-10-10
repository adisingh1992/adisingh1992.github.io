import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";
import "./style.css";

export const CancellationAndRefund = () => {
    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Cancellation and Refund</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                <h1>Cancellation and Refund</h1>

                <br />
                <br />

                <strong>Last updated on Oct 9th 2024</strong>

                <br />
                <br />

                <strong>ADITYA PRATAP SINGH believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</strong>

                <br />

                <ul>
                    <li>
                        Cancellations will be considered only if the request is made within same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                    </li>

                    <li>
                        ADITYA PRATAP SINGH does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                    </li>

                    <li>
                        In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products.
                    </li>

                    <li>
                        In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                    </li>

                    <li>
                        In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                    </li>

                    <li>
                        In case of any Refunds approved by the ADITYA PRATAP SINGH, it'll take 1-2 days for the refund to be processed to the end customer.
                    </li>
                </ul>

                <br />
                <br />
            </Container>
        </HelmetProvider>
    );
};
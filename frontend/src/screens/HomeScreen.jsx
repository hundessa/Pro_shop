import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    const [showLoader, setShowLoader] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setShowLoader(true);
        } else {
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (showLoader) {
        return <Loader duration={1000} />;
    }

    if (error) {
        return <Message variant='danger'>{error?.data?.message || error.error}</Message>;
    }

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;

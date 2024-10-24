import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import ProductCard from '../ui/ProductCard';
import axiosInstance from '../../services/axiosInstance';

export default function ProductsPage({ user }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formElement = e.target;
      const formData = new FormData(formElement);
      const response = await axiosInstance.post('/products', formData);
      if (response.status === 201) {
        setProducts((prev) => [response.data, ...prev]);
        formElement.reset();
      }
    } catch (error) {
      console.log(error);
      alert(`Что-то пошло не так: ${error?.response?.data?.text}`);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      if (response.status === 204)
        setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
      alert(`Что-то пошло не так: ${error?.response?.data?.text}`);
    }
  };

  return (
    <Container className="py-5">
      {user && (
        <Form onSubmit={handleSubmitForm}>
          <Button variant="primary" type="submit" className="mt-3">
            Добавить товар
          </Button>
        </Form>
      )}

      <Row className="mt-4">
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              user={user}
              product={product}
              onDelete={() => handleDeletePost(product.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

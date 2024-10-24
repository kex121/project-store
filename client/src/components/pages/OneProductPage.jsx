import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Image, Alert } from 'react-bootstrap';
import axiosInstance from '../../services/axiosInstance';
import './OneProductPage.css'; // Импортируем файл стилей

export default function OneProductPage({ user }) {
  const { productId } = useParams();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axiosInstance.get(`/products/${productId}`).then((response) => {
      setPost(response.data);
    });
  }, [productId]);

  const editProduct = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const response = await axiosInstance.patch(`/product/${productId}`, Object.fromEntries(formData));
      setPost(response.data);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
      alert(`Ошибка при редактировании товара: ${error?.response?.data?.text}`);
    }
  };

  if (!post) return <Alert variant="info">Загрузка...</Alert>;

  return (
    <div className="full-screen-bg">
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Row className="w-100">
          <Col md={6} className="d-flex flex-column justify-content-center text-black">
            {isEditing ? (
              <Form onSubmit={editProduct}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Название</Form.Label>
                  <Form.Control type="text" name="name" defaultValue={post?.name} />
                </Form.Group>
                <Form.Group controlId="formdescription" className="mb-3">
                  <Form.Label>Описание</Form.Label>
                  <Form.Control as="textarea" name="description" defaultValue={post?.description} />
                </Form.Group>
                <Form.Group controlId="formprice" className="mb-3">
                  <Form.Label>Цена</Form.Label>
                  <Form.Control type="text" name="price" defaultValue={post?.price} />
                </Form.Group>
                <Form.Group controlId="formcategoryId" className="mb-3">
                  <Form.Label>Категория</Form.Label>
                  <Form.Control type="text" name="categoryId" defaultValue={post?.categoryId} />
                </Form.Group>
                <Form.Group controlId="formstock" className="mb-3">
                  <Form.Label>Наличие на складе</Form.Label>
                  <Form.Control type="text" name="stock" defaultValue={post?.stock} />
                </Form.Group>
                <Button variant="primary" type="submit" className="me-2">
                  Сохранить
                </Button>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Отменить
                </Button>
              </Form>
            ) : (
              <div>
                <h1 className="display-4" style={{ textShadow: 'none' }}> {post?.name}</h1>
                <p className="lead" style={{ textShadow: 'none' }}>{post?.description}</p>
              </div>
            )}
          </Col>
          <Col md={6} className="text-center">
            <Card className="text-center bg-transparent border-0">
              <div className="text-center mb-3">
                <Image src={post.imgURL} alt="Фото товара" fluid style={{ maxHeight: '300px', objectFit: 'contain' }} />
              </div>
              <Card.Body>
                <Card.Text className="text-black" style={{ textShadow: 'none' }}>Цена: {post?.price} руб.</Card.Text>
                <Card.Text className="text-black" style={{ textShadow: 'none' }}>Категория: {post?.categoryId}</Card.Text>
                <Card.Text className="text-black" style={{ textShadow: 'none' }}>Наличие на складе: {post?.stock} шт.</Card.Text>
                <Button variant="warning" onClick={() => setIsEditing(true)}>
                  Редактировать
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

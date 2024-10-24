import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Image, Alert } from 'react-bootstrap';
import axiosInstance from '../../services/axiosInstance';

export default function OneMessagePage({ user }) {
  const { productId } = useParams();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axiosInstance.get(`/products/${productId}`).then((response) => {
      setPost(response.data);
    });
  }, [productId]);

  // const editImage = async (e) => {
  //   try {
  //     if (e.target.files.length === 0) return;
  //     const formData = new FormData();
  //     formData.append('img', e.target.files[0]);
  //     const response = await axiosInstance.patch(`/messages/${messageId}/image`, formData);
  //     setPost(response.data);
  //   } catch (error) {
  //     console.log(error);
  //     alert(`Ошибка при загрузке изображения: ${error?.response?.data?.text}`);
  //   }
  // };

  const editMessage = async (e) => {
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
    <Container className="py-5">
      <Row>
        <Col md={6}>
          {isEditing ? (
            <Form onSubmit={editMessage}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" name="name" defaultValue={post?.name} />
              </Form.Group>
              <Form.Group controlId="formdescription" className="mb-3">
                <Form.Label>Текст</Form.Label>
                <Form.Control as="textarea" name="description" defaultValue={post?.description} />
              </Form.Group>
              <Form.Group controlId="formprice" className="mb-3">
                <Form.Label>Текст</Form.Label>
                <Form.Control as="textarea" name="price" defaultValue={post?.price} />
              </Form.Group>
              <Form.Group controlId="formcategoryId" className="mb-3">
                <Form.Label>Текст</Form.Label>
                <Form.Control as="textarea" name="categoryId" defaultValue={post?.categoryId} />
              </Form.Group>
              <Form.Group controlId="formstock" className="mb-3">
                <Form.Label>Текст</Form.Label>
                <Form.Control as="textarea" name="stock" defaultValue={post?.stock} />
              </Form.Group>
              <Button variant="primary" type="submit" className="me-2">
                Сохранить
              </Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)}>
                Отменить
              </Button>
            </Form>
          ) : (
            <Card className='text-center'>
              <Card.Body>
                <Card.Title>{post?.name}</Card.Title>
                <br />
          <div className="text-center mb-3">
            <Image src={post.imgURL} alt={'Фото товара'} fluid style={{ maxWidth: '150px', minHeight: '150px' }} />
          </div>
        <br />
                <Card.Text>Описание: {post?.description}</Card.Text>
                <Card.Text>Цена: {post?.price} руб.</Card.Text>
                <Card.Text>Категория: {post?.categoryId}</Card.Text>
                <Card.Text>Наличие на складе: {post?.stock} шт.</Card.Text>
                
                  <Button variant="warning" onClick={() => setIsEditing(true)}>
                    Редактировать
                  </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

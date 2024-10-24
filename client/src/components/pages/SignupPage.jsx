import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './SignupPage.css';

export default function SignupPage({ signupHandler }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

//  const signupHandler = (e, formData) => {
//     e.preventDefault();
//     console.log(formData);
//   };

  return (
    <>
    <Container className="mt-5 bg-light">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center mb-4">Регистрация</h1>
          <Form onSubmit={signupHandler}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Введите ваш email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formName">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Введите имя пользователя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Введите пароль"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Подтверждение пароля</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                isInvalid={
                  formData.password !== formData.confirmPassword &&
                  formData.confirmPassword.length > 0
                }
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Пароли не совпадают
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Button type="submit" variant="success" size="lg" className="w-100">
              Зарегистрироваться
            </Button>
          </Form>
          <br />
        </Col>
      </Row>
    </Container>
    </>
  );
}

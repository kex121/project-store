import { useState } from 'react';
import { Container, Form, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

export default function LoginPage({ loginHandler, setFormData, formData, handleChange }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Вход</h1>
          <Form onSubmit={(e) => loginHandler(e, formData)}>
            <Form.Group className="mb-3" controlId="formEmail">
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

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <InputGroup>
                <FormControl
                  type={showPass ? 'text' : 'password'}
                  name="pass"
                  placeholder="Введите ваш пароль"
                  value={formData.pass}
                  onChange={handleChange}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  {showPass ? 'Скрыть' : 'Показать'}
                </Button>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" size="lg" className="w-100">
              Войти
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

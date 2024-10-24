import { Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onDelete, user }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        
        <Card.Title className='text-center'>{product.name}</Card.Title>
        <br />
        {product.imgURL && ( // Проверяем наличие ссылки на изображение
          <div className="text-center mb-3">
            <Image src={product.imgURL} alt={'Фото товара'} fluid style={{ maxWidth: '150px', minHeight: '150px' }} />
          </div>
        )}
        <br />
        <Card.Text >Описание: {product.description}</Card.Text>
        <Card.Text>Цена: {product.price} руб.</Card.Text>
        <Card.Text>Категория: {product.Category.name}</Card.Text>
        <Card.Text>На складе: {product.stock} шт.</Card.Text>

        

        <div className="d-flex justify-content-between">
          <Button
            variant="danger"
            onClick={onDelete}
            // disabled={user?.id !== product.userId}
          >
            &#x2716; Удалить
          </Button>
          <Button as={Link} to={`/products/${product.id}`} variant="outline-primary">
            Подробнее
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

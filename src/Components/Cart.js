import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cartProducts = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeProduct = (productId) => {
    dispatch(remove(productId));
  }

  const cards = cartProducts.map(product => (
    <div className='col-md-2' style={{ marginBottom: '1rem' }}>
      <Card key={product.id} className='h-100'>
        <div className='center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="danger" onClick={() => removeProduct(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <div className='row'>{cards}</div>
  )
}

export default Cart
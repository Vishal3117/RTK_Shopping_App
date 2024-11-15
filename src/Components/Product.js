import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';


const Product = () => {
    const dispatch = useDispatch();
    const { data: products, loading, error } = useSelector(state => state.products)


    useEffect(() => {
        // Dispatch an action for fetch products
        dispatch(fetchProducts());
    }, [])

    //dispatch an add action from here
    const addToCart = (product) => {
        dispatch(add(product));
    }

    const cards = products.map(product => (
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
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <h1>Product</h1>
            <div className='row'>{cards}</div>
        </>

    )
}

export default Product
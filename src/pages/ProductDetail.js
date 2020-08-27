import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import { Row, Col, ButtonGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/actions';
import CartSvg from '../assets/icons/cart.svg';

function ProductDetail(props) {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const isInCart = (item, cartItems)=>{
    console.log(cartItems, item)
    return !!cartItems.find((a)=>a.slug===item.slug);
  }

  useEffect(()=>{
    setLoading(true);
    Axios.get(process.env.REACT_APP_API_URL + "/api/products/" + params.slug)
      .then(({data})=>{
        setData(data);
      })
      .finally(()=>{
        setLoading(false);
      })
  },[params.slug])

  if(loading)return (<h1>Loading...</h1>)

  return (
    <div>
      ProductDetail of {params.slug}
      { data ? (
        <Row>
          <Col md={6}>
            <img className="w-100" alt={data.title} src={data.image}/>
          </Col>
          <Col md={6}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <ButtonGroup>
              <Button color="primary">{data.price} $</Button>
              {isInCart(data, props.cartItems) ? (
                <Button 
                  color="warning"
                  onClick={()=>props.removeItemFromCart(data.slug)}
                >
                  Remove from cart
                </Button>
              ) : (
                <Button 
                  className="d-flex align-items-center" 
                  onClick={()=>props.addItemToCart(data)} 
                  color="success"
                >
                  Add To Cart
                  <img 
                    className="ml-1" 
                    width="20" 
                    height="20" 
                    alt="cart" 
                    src={CartSvg}
                  />
                </Button>
              )}
            </ButtonGroup>
          </Col>
        </Row>
      ) : (
        <h4 className="text-danger">Error 404: Product {params.slug} is not defined</h4>
      )}
    </div>
  )
}

const mapStateToProps = state => state.CartReducer;

export default connect(
  mapStateToProps, 
  { 
    addItemToCart,
    removeItemFromCart,
  }
)(ProductDetail)

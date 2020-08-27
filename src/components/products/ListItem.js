import React from 'react';
import { Card, CardBody, ButtonGroup, Button } from 'reactstrap';
import styles from './Products.module.css';
import { useHistory } from 'react-router-dom';
import CartSvg from '../../assets/icons/cart.svg';

function ListItem({item}) {
  const history = useHistory()
  const handleClick = ()=>history.replace("/products/"+item.slug);
  const handleCartClick = (e)=>{
    e.stopPropagation();
  }
  return (
    <Card onClick={handleClick}>
      <CardBody>
        <div className={styles.imageContainer}>
          <img className={styles.image} alt={item.title} src={item.image}/>
        </div>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <ButtonGroup className="w-100">
          <Button color="primary">{item.price}$</Button>
          <Button onClick={handleCartClick} color="success">
            <img 
              className="ml-1" 
              width="20" 
              height="20" 
              alt="cart" 
              src={CartSvg}
            />
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  )
}

export default ListItem

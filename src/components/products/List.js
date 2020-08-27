import React from 'react'
import { Row, Col } from 'reactstrap'
import ListItem from './ListItem'

function List(props) {
  return (
    <Row>
      {props.data.map((item)=>(
        <Col md={3} key={item._id}>
          <ListItem item={item}/>
        </Col>
      ))}
    </Row>
  )
}

export default List

import React, { useEffect } from 'react'
import List from '../components/products/List'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchData } from '../redux/actions'

function Home(props) {
  const {fetchData} = props;
  useEffect(()=>{
    fetchData();
  },[fetchData]);

  if(props.err){
    return (
      <h4 className="text-danger">
        {props.err.message}
      </h4>
    )
  }

  return (
    <Container>
      Home
      <List data={props.data}/>
    </Container>
  )
}

const mapStateToProps = (state)=>{
  const { data, loading, err } = state.ProductReducer;
  return {data, loading, err};
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchData: ()=>dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import { Component } from "react"

import styled from "styled-components"
import Button from './styled/Button'

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition:0.3s;
  box-shadow: 0px 0px 8px 1px rgba(13, 12, 12, 0.75);
  :hover {
    box-shadow: 0px 0px 20px 1px rgba(13, 12, 12, 0.75);
  }
`

export default class ProductClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemOnCart: 0
    }

  }

  componentDidMount(){// gets triggered when the component is rendered
    //fetching data from api, listening to websocket apis, adding event listeners

  }

  componentDidUpdate() {// gets triggered when the states/props changes
    //fetching data from api using states/props value

  }

  componentWillUnmount() {//gets triggered when the component is unmounted
    //to clear everything - stop listening to websocket apis, removing event listeners

  }

  handleAddToCart = () => {
    this.setState((prevState) => {
      return {
        itemOnCart: prevState.itemOnCart +1
      }
    })
  }

  render() {
    const item = this.props.productInfo
    return (
      <Wrapper onClick={() => {
        this.props.setItem(item)
      }}>
        <img style={{
          height: 200
        }} src={item.image} alt="Bag"></img>

        <div style={{
          fontSize: 25,
          fontWeight: 700,
          marginBottom: 10
        }}>{item.title}</div>

        <div>{item.description}</div>
        <div style={{
          color: 'red',
          marginTop: 10,
          marginBottom: 10,
        }}>${item.price}</div>
        <div>Stock: {item.stock}</div>
        <div>Stock left: {item.stock - this.state.itemOnCart}</div>
        <Button 
            greaterThanFive={this.state.itemOnCart > 5}
            disabled={item.stock === this.state.itemOnCart} 
            onClick={this.handleAddToCart}>
              {item.stock === this.state.itemOnCart ? "No stock left" : "Add to cart"}
          </Button>
      </Wrapper>
    )

  }  
}

// export default ProductClass
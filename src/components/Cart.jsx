import Title from './styled/Title'
import Gridbox from './styled/Gridbox'
import CartItem from './CartItem'

function Cart() {
  const items = [
    {
      id: 1,
      title: "Bag",
      price: 50,
      description: "Bags for every occasion",
      category: "Men's clothing",
      image: "https://robohash.org/bag",
      rating:{
        rate: 4,
        count: 100
      },
    },
    {
      id: 2,
      title: "Phone",
      price: 500,
      description: "Phones for every occasion",
      category: "Electronics",
      image: "https://robohash.org/phone",
      rating:{
        rate: 4,
        count: 100
      },
    },
  ]
  return (
    <div id="cart">
      <Title>Cart</Title>
      <Gridbox>
        {
          items.map((item) => {
            return(
              <CartItem key= {item.id} item={item} />
            )
          })}
        </Gridbox>
    </div>
  )
}

export default Cart
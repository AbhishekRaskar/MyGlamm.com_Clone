import { Box, Heading, SimpleGrid, Image, Text, Button, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Cart = () => {
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  const [qty, setQty] = useState(1);
  const [data, setData] = useState(cartProducts);
  // console.log(data[0].price)
  // console.log(data.length)

  function handleQty(id, value) {
    // console.log('up');
    let newData = data.map((e) => e.id === id ? setQty(qty + value) : e);

    setData(newData);
  };
  console.log(qty);


  let total = 0;
  for (let i = 0; i < data.length; i++) {
    // console.log(data[0].price)
    total = total + Number(data[i].price * qty)
  }

  return (
    <Box margin={'auto'} width='90%'>
      <Box>
        <Heading>Your Cart Total is : {total}</Heading>
      </Box>
      <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={5}>
        {
          cartProducts?.map((e) => {
            return (
              <Box
                key={e.id}
                p={6}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
              >
                <Image
                  rounded={'md'}
                  height={300}
                  width={300}
                  src={e.image}
                />
                <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                  {e.name}
                </Heading> <Text color={'gray.700'} fontSize={'sm'} textTransform={'uppercase'}>
                  {e.category}
                </Text>
                <Text fontWeight={600} fontSize={'xl'}>
                  ₹.{e.price}
                </Text>
                <Button colorScheme='pink' onClick={(id) => { handleQty(id, Number(1)) }}>+</Button>
                <Button>{qty}</Button>
                <Button colorScheme='pink' onClick={(id) => { handleQty(id, Number(-1)) }}>-</Button>
              </Box>

            )
          })
        }
      </SimpleGrid>
      <br />
      <Button colorScheme='pink'
        onClick={() => {
          // console.log('hiiiii');
          <Navigate to='/payment' />
        }}>
        Place Order
      </Button>
      <br />
    </Box>

  )
}

export default Cart



/*
// import module.css here;
const Product = ({name,price,quantity,id,handleQty}) => {
  return (
    <>
      <div data-testid="product-container" key={id}>
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={() => {handleQty(id,1)}}>+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement" disabled={quantity < 1} onClick={() => {handleQty(id,-1)}}>-</button>
      </div>
    </>
  );
};
export default Product;


*/
// ==================================================================
/*import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
function App() {
  const [item, setItem] = useState(data);

  function handleQty(id, valu) {
    // console.log(up);
    let newData = item.map((e) => e.id === id ? { ...e, quantity: e.quantity + valu } : e);

    setItem(newData);
  };

  let total = 0;
  for (let i = 0; i < item.length; i++) {
    total = total + (item[i].price * item[i].quantity)
  }


  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        //  map through the  data and pass props to the Product component 
        {
          item?.map((e) => {
            return <Product
              id={e.id}
              name={e.name}
              price={e.price}
              quantity={e.quantity}
              handleQty={handleQty} />
          })
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        // Show the total of the Cart(a actual Price of a Product = price * quantity) 
        {total}
      </h1>
    </div>
  );
}

export default App;
*/
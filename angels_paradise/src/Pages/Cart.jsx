import { Box, Heading, SimpleGrid, Image, Text, Button, } from '@chakra-ui/react'
import React, { useState } from 'react'

const Cart = () => {
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  // const [qty, setQty] = useState(1);

  return (
    <Box margin={'auto'} width='90%'>
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
                {/* <Button onClick={() => setQty(qty + 1)}>+</Button>
                <Button>{qty}</Button>
                <Button onClick={() => setQty(qty - 1)}>-</Button> */}
              </Box>
            )
          })
        }
      </SimpleGrid>
      <br />
    </Box>

  )
}

export default Cart

import React from 'react'
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  Container,useToast
} from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const SingleProduct = () => {
  const toast = useToast();
  const value = useParams();
  console.log(value);
  // destructured here
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async (id) => {
    let res = await axios.get(`https://anxious-garters-tuna.cyclic.app/products/${id}`);
    console.log(res.data);
    setData(res.data)
  }


  useEffect(() => {
    getData(id)
  }, [id])

  const handleAdd = () => {
    let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    cartProducts.push(data);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    toast({
      title: 'Added.',
      description: "Product Added to the Cart Successfully.",
      status: 'success',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box width={'80%'} margin='auto'>
      <SimpleGrid columns={{ lg: 2, md: 1, sm: 1 }}>

        <Box>
          <Image
            rounded={'md'}
            height={500}
            width={400}
            src={data?.image}
          />
        </Box>
        <Box
          key={data?.id}
          p={6}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
        >

          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            <Text as='b'>NAME : </Text> {data?.name}
          </Heading>
          <br />
          <Text color={'gray.900'} fontSize={'sm'} textTransform={'uppercase'}>
            <Text as='b'>Category : </Text>  {data?.category}
          </Text>
          <br />
          <Text fontWeight={600} fontSize={'xl'}>
            <Text as='b'>RATINGS : </Text> {data?.rating}
          </Text>
          <br />
          <Text fontWeight={600} fontSize={'xl'}>
            <Text as='b'>PRICE : </Text>  ₹. {data?.price}
          </Text>
          <br />
          <Container fontWeight={400} fontSize={'lg'}>
            <Text as='b'>WHAT IS IT : </Text>{data?.description}
          </Container>
          <br />
          <Button colorScheme='pink' onClick={handleAdd}>Add To Cart</Button>
        </Box>

      </SimpleGrid>
    </Box>
  )
}

export default SingleProduct



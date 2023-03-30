import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  Checkbox,
  Select
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from '@chakra-ui/react'




const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = (page) => {
    axios.get(`https://anxious-garters-tuna.cyclic.app/products?_page=${page}&_limit=20`)
      .then((res) => {
        return setData(res.data);
      })
  }
  useEffect(() => {
    getData(page)
  }, [page])

  const handlePage = (val) => {
    setPage(page + val)
  }
  let lastPage = Math.ceil(100 / 20);
  // console.log(lastPage);
  // console.log(data);
  return (
    <Box>
      <Heading>OUR PRODUCTS</Heading>
      <Box width={'60%'} border='1px solid blue' margin={'auto'}>
        <SimpleGrid columns={{lg:4}}>
        <Checkbox>ABHI</Checkbox>
        <Select placeholder='Select option'>
          <option>Makeup</option>
          <option>Haircare</option>
          <option>Bath</option>
          <option>Skincare4</option>
          <option>Sanitizingcare</option>
        </Select>
        </SimpleGrid>
      </Box>
      <Box margin={'auto'} width='90%'>
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={5}>
          {data.length === 0 ? <Spinner
            thickness='4px'
            speed='5s'
            color='red.500'
            size='xl'
            marginLeft='590px'
            marginTop='10px'
          /> : data?.map((e) => {
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
                <Link color={"tomato"} href={`/singleproduct/${e.id}`} fontSize={'lg'}>
                  More
                </Link>
              </Box>
            )
          })
          }
        </SimpleGrid>
        <br />
        <Box>
          <Button isDisabled={page === 1} colorScheme={'pink'} onClick={() => handlePage(-1)}>PREV</Button>
          <Button>{page}</Button>
          <Button isDisabled={page === lastPage} colorScheme={'pink'} onClick={() => handlePage(1)}>NEXT</Button>
        </Box>
      </Box>
    </Box >
  )
}

export default Products

import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  Select,
  Input,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from '@chakra-ui/react'




const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("");
  const [filterby, setFilterby] = useState("")
  const [search, setSearch] = useState("")

  /* 
   axios.get(`https://anxious-garters-tuna.cyclic.app/products?_page=${page}&_limit=20`)
        .then((res) => {
          return setData(res.data);
        })
  */


  const getData = (order, page, filterby, search) => {
    let obj = {};
    if (order) {
      obj._sort = "price"
      obj._order = order
    }
    if (filterby) {
      obj.category = filterby
    }
    if (search) {
      obj.q = search
    }

    axios.get(`https://anxious-garters-tuna.cyclic.app/products?_page=${page}&_limit=20`, {
      params: obj
    }).then((res) => setData(res.data))

  }
  useEffect(() => {
    getData(order, page, filterby, search)
  }, [order, page, filterby, search])

  const handlePage = (val) => {
    setPage(page + val)
  }
  let lastPage = Math.ceil(100 / 20);
  // console.log(lastPage);
  // console.log(data);
  return (
    <Box>
      <Heading>OUR PRODUCTS</Heading>
      <br />
      <Box width={'60%'} rounded={'2xl'} boxShadow={'2px 2px 2px 2px #FED7E2'} margin={'auto'}>
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }}>
          <Box margin={'10px'}>
            <Button isDisabled={order === 'asc'} colorScheme='pink' onClick={() => setOrder('asc')}>LOW TO HIGH</Button>
          </Box>
          <Box margin={'10px'}>
            <Button isDisabled={order === 'desc'} colorScheme='pink' onClick={() => setOrder('desc')}>HIGH TO LOW </Button>
          </Box>
          <Box margin={'10px'}>
            <Input placeholder='Search here' onChange={(e) => setSearch(e.target.value)} />
          </Box>
          <Box margin={'10px'}>
            <Select placeholder='Select option' onChange={(e) => setFilterby(e.target.value)}>
              <option value='Makeup'>Makeup</option>
              <option value='Haircare'>Haircare</option>
              <option value='Bath'>Bath</option>
              <option value='Skincare'>Skincare</option>
              <option value='Sanitizingcare'>Sanitizingcare</option>
            </Select>
          </Box>
        </SimpleGrid>
      </Box>
      <br />
      <Box margin={'auto'} width='90%'>
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={5}>
          {data.length === 0 ? <Spinner
            thickness='4px'
            speed='3s'
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

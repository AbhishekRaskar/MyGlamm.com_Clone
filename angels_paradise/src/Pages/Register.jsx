// import { Heading } from '@chakra-ui/react'
// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       <Heading>This is Register Page</Heading>
//     </div>
//   )
// }

// export default Register


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text, useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContextProvider';
// import { useContext } from 'react';
import { Navigate } from "react-router-dom";



export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nav, setNav] = useState(false)
  const toast = useToast();

  const handleSignUp = () => {
    const userDetails = {
      email,
      password
    };
    //  we do here for authentication
    fetch('https://reqres.in/api/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          title: 'Account Created.',
          description: "Your Account Created Successfully.",
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
        setNav(true);
      })
  }
  if (nav) {
    return <Navigate to="/login" />
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create a Account
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>

                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'pink.500',
                }}
                onClick={handleSignUp}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to='/login' style={{
                  textDecoration: "underline",
                  textDecorationColor: "blue",
                  color: "blue"
                }}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
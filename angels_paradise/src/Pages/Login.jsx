import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading, useToast
} from '@chakra-ui/react';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuth } = useContext(AuthContext);
  const toast = useToast()

  const handleLogin = () => {
    const userDetails = {
      email,
      password
    };
    //  we do here for authentication
    fetch('https://reqres.in/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          title: 'Login Successful.',
          description: "You are Logged In Successfully.",
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
        console.log(data);
        login(data.token);
      })
  }

  // for navigation
  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
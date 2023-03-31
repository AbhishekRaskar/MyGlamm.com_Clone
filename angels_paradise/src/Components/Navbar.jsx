import {
    Box,
    Flex,
    Image,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    Heading,Button,Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom'
import Logo from "../Logo/Angels_Paradise.png"

import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai"
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const links = [
    { to: "/", name: "HOME" },
    { to: "/products", name: "PRODUCTS" },
    { to: "/featured", name: "FEATURED" },
    { to: "/sale", name: "SALE" },
]




const active = { color: "tomato", textDecoration: "none" };
const deactive = { color: "black", textDecoration: "none" };

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { token, logout, isAuth } = useContext(AuthContext);

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={7} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Image src={Logo} alt="Logo" width={150} />
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={6}
                            display={{ base: 'none', lg: 'flex' }}>
                            {links.map((e) => (
                                <NavLink
                                    key={e.to}
                                    to={e.to}
                                    style={({ isActive }) => {
                                        return isActive ? active : deactive
                                    }}
                                >{e.name}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Input placeholder='Search here' width={400} />
                    <Box style={{
                        fontSize: "27px"
                    }}>
                        <Flex gap="30px">
                            <NavLink to="/cart"><AiOutlineShopping /></NavLink>
                            <NavLink to="/register"><AiOutlineUser /></NavLink>
                        </Flex>
                    </Box>
                    <Box>
                        {
                            isAuth ? (
                                <Box>
                                    <Heading size='sm'>Logged in :<Text as='samp' fontSize='xs'>{token}</Text></Heading>
                                    <Button style={{
                                        width:'auto',height:'25px'
                                    }} marginTop={'4px'} colorScheme='pink' variant='outline' onClick={logout}>LOGOUT</Button>
                                </Box>
                            ) : (
                                <Text as='samp' fontSize='md'>Please Login</Text>
                            )
                        }
                    </Box>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {links.map((e) => (
                                <NavLink key={e.to} to={e.to}>{e.name}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Navbar;
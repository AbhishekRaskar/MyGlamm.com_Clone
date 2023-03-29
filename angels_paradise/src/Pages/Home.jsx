import React from 'react'
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react"


// const Images = [
//   "https://files.myglamm.com/site-images/original/ult1920x527_1.jpg",
//   "https://files.myglamm.com/site-images/original/popxo1920x527-1_3.jpg",
//   "https://files.myglamm.com/site-images/original/eye1920x527.png"
// ]
const Home = () => {
  return (
    <Box>
      <Box>
        <Image src='https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279_1.gif' />
      </Box>
      <br />
      <br />
      <Box>
        <Image src='https://files.myglamm.com/site-images/original/ult1920x527_1.jpg'></Image>
        {/* <Image src='https://files.myglamm.com/site-images/original/popxo1920x527-1_3.jpg'></Image>
        <Image src='https://files.myglamm.com/site-images/original/eye1920x527.png'></Image> */}
      </Box>
      <br />
      <Box margin="auto" width={'80%'}>
        <Image src='https://files.myglamm.com/site-images/original/PD2240x614.gif'></Image>
      </Box>
      <br />
      <Box margin="auto" width={'80%'}>
        <Image src='https://files.myglamm.com/site-images/original/Lit2240x614-1.jpg'></Image>
      </Box>
      <br />


      <Text color='#546E7A' fontSize={'25px'} as='b' letterSpacing={'1px'}>IN THE SPOTLIGHT</Text>
      <br />
      <br />
      <Box margin="auto" width={'80%'}>
        <SimpleGrid columns={{ lg: 3, sm: 1, md: 1 }} gap={4}>
          <Box backgroundColor={'#C5E1A5'}>
            <Image src='https://files.myglamm.com/site-images/original/SF700x488.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>Superfoods Kajal</Text>
          </Box>
          <Box backgroundColor={'#B0BEC5'}>
            <Image src='https://files.myglamm.com/site-images/original/700x488_13.png' />
            <Text color='black' fontSize={'xl'} as='b'>Lip Makeup Range</Text>
          </Box>
          <Box backgroundColor={'#F8BBD0'}>
            <Image src='https://files.myglamm.com/site-images/original/popxo700x488_12.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>Vacay Mini Nail Kit</Text>
          </Box>
        </SimpleGrid >
      </Box>
      <br />
      <br />
      <Box margin="auto" width={'80%'}>
        <Image src='https://files.myglamm.com/site-images/original/GE2240x614.jpg'></Image>
      </Box>
      <br />


      <Text color='#546E7A' fontSize={'25px'} as='b' letterSpacing={'1px'}>LATEST GLAMM LAUNCHES</Text>
      <br />
      <br />
      <Box margin="auto" width={'80%'}>
        <SimpleGrid columns={{ lg: 4, sm: 1, md: 2 }} gap={6}>
          <Box backgroundColor={'#F8BBD0'}>
            <Image src='https://files.myglamm.com/site-images/original/xoxo700x488_1.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>XOXO Range</Text>
          </Box>
          <Box backgroundColor={'#F8BBD0'}>
            <Image src='https://files.myglamm.com/site-images/original/TI700x488.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>Treasure It Range</Text>
          </Box>
          <Box backgroundColor={'#F8BBD0'}>
            <Image src='https://files.myglamm.com/site-images/original/TR700x488.gif' />
            <Text color='black' fontSize={'xl'} as='b'>POPxo Range</Text>
          </Box>
          <Box backgroundColor={'#B0BEC5'}>
            <Image src='https://files.myglamm.com/site-images/original/Latest-Glamm-Launches-700x488.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>Eyebrow Definer</Text>
          </Box>
        </SimpleGrid >
      </Box>
      <br />


      <Text color='#546E7A' fontSize={'25px'} as='b' letterSpacing={'1px'}>ESSENTIAL BUDGET BUYS</Text>
      <br />
      <br />
      <Box margin="auto" width={'80%'}>
        <SimpleGrid columns={{ lg: 2, sm: 1, md: 2 }} gap={10}>
          <Box backgroundColor={'#F8BBD0'}>
            <Image src='https://files.myglamm.com/site-images/original/700x488-499-1.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>Under 499 Store</Text>
          </Box>
          <Box backgroundColor={'#F8BBD0'}>
            <Image src='https://files.myglamm.com/site-images/original/700x488-999.jpg' />
            <Text color='black' fontSize={'xl'} as='b'>Under 999 Store</Text>
          </Box>
        </SimpleGrid >
      </Box>
      <br />


      <Text color='#546E7A' fontSize={'25px'} as='b' letterSpacing={'1px'}>SHOP FROM CATEGORIES</Text>
      <br />
      <br />
      <Box margin="auto" width={'80%'}>
        <SimpleGrid columns={{ lg: 8, sm: 2, md: 4 }} gap={5}>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/SKin-1-2.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Skin</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/Lips-3.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Lips</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Hair</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/Eyes-4.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Eyes</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/Face-5.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Face</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/Nails-1.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Nails</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/App-PersonalCare_2.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Sanitizing Care</Text>
          </Box>
          <Box>
            <Image src='https://files.myglamm.com/site-images/original/Bath.png'  borderRadius='50%'/>
            <Text color='black' fontSize={'sm'} as='b'>Bath</Text>
          </Box>
        </SimpleGrid >
      </Box>
      <br />
      <br />
      <Box>
        <Image src='https://files.myglamm.com/site-images/original/simpl-3360x279_13.png' />
      </Box>
    </Box>
  )
}

export default Home

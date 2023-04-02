import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Form } from 'react-router-dom'

const Payment = () => {
    return (
        <Box>
            <Heading>ABHI</Heading>
            <Form action="otp.html">
                <Input type="number" placeholder="Card No." />
                <br />
                <br />
                <Input type="text" placeholder="Card Holder Name" />
                <br />
                <br />
                <Input type="number" placeholder="CVV" />
                <br />
                <br />
                <Input type="number" placeholder="Expiry Date" />
                <br />
                <br />
                <Input type="checkbox" id="chb" />
                {/* <p id="pc">I agree to the ShopKey's all terms of Service and Privacy Policy
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p> */}
                <br />
                <br />
                <Input type="submit" id="join" value="PAY" />
            </Form>
        </Box>
    )
}

export default Payment

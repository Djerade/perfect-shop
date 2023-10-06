import theme from '@/styles/theme';
import { Text, Box,Flex,  IconButton, HStack, Center, Button, ButtonGroup, Stack, Select } from '@chakra-ui/react'
import { link } from 'fs';
import React, {  useState } from 'react';

interface Props {
    children: React.ReactNode
}

const Links = [ 'Service','About us', 'blog']


const Navebar = () => {
   const [IsOpen, setIsOpen] = useState(false)
    return (
        <NavBarContenaire>
              <Text color={'gray.500'} fontWeight={'bold'}  fontSize={30} variant=''>
                    Besnik.
                </Text>
                <NaveMobile/>
                <HStack  alignItems={'center'} spacing={9}>
                 {
                    Links.map((link) => (
                        <NavLink key={link} >{link}</NavLink>
                    ))
                 }
                </HStack>
                <ContactAndLangue/>

        </NavBarContenaire>

    )
}

const NaveMobile = () => {
    return (
        <Box display={{ base:"block", md: "none"}}>
            C'est nava mobile
        </Box>
    )
}

const NavLink = (props: Props) => {
    const { children } = props
    return(
        <Box>
            <Text fontWeight={'bold'} fontSize={{ base: '1xl'}} variant=''>
            {children}
            </Text>
        </Box>
    )
}
const NavBarContenaire = (props: Props) => {
    const { children} = props
    return(
        <Flex
        as = "nav"
        width={"100%"}
        align={'center'}
        p={6}
        m={8}
        justify={'space-between'}
        >
            {children}
        </Flex>
    )
}

const Contact = () => {
    return(
        <Button color={'white'} bg='#4FC031' pr={8} pl={8} borderRadius={'3xl'} >Contact Us</Button>
    )
}
const Langue = () => {
    return(
        <Box  >
            <Select bg={'white'} >
                <option>En</option>
            </Select>
        </Box>
    )
}

const ContactAndLangue = () => {
    return(
        <Stack direction={'row'}>
            <Langue/> 
             <Contact/>
        </Stack>
    )
}
export default Navebar;
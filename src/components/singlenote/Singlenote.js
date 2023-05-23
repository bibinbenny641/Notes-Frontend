import React from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Button,
    IconButton,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';


function Singlenote({ i, index }) {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/post/${id}`)
    }
    return (
        <><center>

            <div style={{ padding: '3vh' }}>

                <Box 
                bgGradient='linear(to-r, green.400, cyan.200)'
                    maxW={'445px'}
                    w={'full'}
                    // bg={useColorModeValue('green.300', 'red.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>

                    <Stack>
                        <Text
                            color={'red.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Note {index + 1}
                        </Text>
                        <Heading
                            color={'whiteAlpha.900'}
                            fontSize={'4xl'}
                            fontFamily={'body'}>
                            {i.title}
                        </Heading>

                        {/* <Text color={'gray.500'}>
                            {i.body}
                        </Text> */}
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        
                        <Box
                            as='button'
                            onClick={() => { handleClick(i.id) }}
                            p={4}
                            color='white'
                            fontWeight='bold'
                            borderRadius='lg'
                            bgGradient='linear(to-r, cyan.200, green.400)'
                            _hover={{
                                bgGradient: 'linear(to-r, blue.100, yellow.400)',
                            }}
                        >
                            <ViewIcon />
                        </Box>

                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text color={'gray.900'}>
                                {(moment(i.time).fromNow())}
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </div>
        </center>


        </>

    )
}

export default Singlenote
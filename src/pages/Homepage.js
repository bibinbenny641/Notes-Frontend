import React from 'react'
import Topbar from '../components/navbar/Topbar'
import { Row, Col } from 'react-bootstrap'
import Allnotes from '../components/allnotes/Allnotes'
import { Box } from '@chakra-ui/react'

function Homepage() {
    return (
        <>

            <Row>
                <div style={{ position:'sticky' }}>

                <Topbar />
                </div>

            </Row>
            <Row>
            <Box w='100%' h='100%' bgGradient='linear(to-r, gray.300, blue.200)' >
                    
                <Allnotes />
               
               </Box>
            </Row>

        </>
    )
}

export default Homepage
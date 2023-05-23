import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import Singlenote from '../singlenote/Singlenote';
import Addnote from '../addnote/Addnote';
import axios from 'axios';


function Allnotes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/addnotes/', {

    }).then((response) => {
      setNotes(response.data)
    })
      .catch(error => {
        console.log(error)
      })

  }, [notes])
  return (
    <>
      {/* <Center py={6}> */}
      <div >

      
      <Center>
        <div style={{ padding: '3vh' }}>
          <Addnote />

        </div>

      </Center>
      <div className='container'style={{height:'80vh',overflowX:'scroll' }} >
        <div className='row'>

            {
              notes.map((i, index) => (
                <div className=' col-ld-3 col-md-4 col-sm-6' key={index}>
                  <Singlenote i={i} index={index} />
                </div>

              ))
            }
        </div>

      </div>
      </div>

      {/* </Center> */}
    </>
  )
}

export default Allnotes
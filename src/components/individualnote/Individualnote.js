import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Editnote from '../editnote/Editnote';
import { DeleteIcon } from '@chakra-ui/icons';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'

function Individualnote() {
    const [notes, setNotes] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate()


    let postid = useParams();
    console.log(postid, 'w77')
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/addnotes/${postid.userid}/`, {

        }).then((response) => {
            console.log(response.data, 'ss')
            setNotes(response.data)
            
        })
            .catch(error => {
                console.log(error)
            })

    }, [notes])

    const handleDelete = (id)=>{
        console.log(id,'delete')
        axios.delete(`http://127.0.0.1:8000/api/addnotes/${id}/`, {

        }).then((response) => {
            console.log(response.data, 'jjj')
            setNotes(response.data)
            navigate('/')
        })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>

            <Card align='center' size={'lg'} color={'whiteAlpha.900'} bg={'green.300'}>
                <CardHeader>
                    <Heading color={'whiteAlpha.900'} size='lg'> {notes.title}  <Editnote notes={notes}/></Heading>
                    
                </CardHeader>
                <CardBody>
                    <Text fontSize={22} color={'red.900'}>{notes.body}</Text>
                </CardBody>
                <CardFooter>
                <Button onClick={onOpen} style={{ margin: '5vh' }} colorScheme='red'><DeleteIcon/></Button>

                </CardFooter>

                  

            </Card>
            <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={()=> {handleDelete(notes.id) ;onClose()}} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

        </>
    )
}

export default Individualnote
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Input,
  FormControl,
  Textarea,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function Addnote() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const [values, setValues] = useState({
    title: "",
    note: '',

  })
  const handleChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault()
    addnote()
    console.log('bibin')
    setValues("");
  }
  const addnote = ()=>{
    axios.post('http://127.0.0.1:8000/api/addnotes/',{
      data:values
    })
    .then((response)=>{
    })
    .catch(error => {
      // An error occurred, handle the error
      console.error(error);
    })

  }

  


  return (

    <>

      <Button
        colorScheme='teal'
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Add Note
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Notes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type='text' name='title' value={values.title} onChange={handleChange} placeholder='Title' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Notes</FormLabel>
                <Textarea type='text' name='note' value={values.note} onChange={handleChange} placeholder='Here is a sample placeholder' />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button onClick={onClose} type='submit' colorScheme='teal' variant='outline'>
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Addnote
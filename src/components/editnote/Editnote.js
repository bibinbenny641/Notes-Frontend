import { Button, Editable, EditableInput, EditablePreview, EditableTextarea, FormControl, FormLabel, IconButton, Input, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import axios from 'axios'

function Editnote({ notes }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
    const handleSubmit = (id) => {
        editNote(id)
        setValues("");
        onClose()
    }

    const editNote = (id)=>{
        axios.put(`http://127.0.0.1:8000/api/addnotes/${id}/`,{
          data:values,
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        })
    
      }
    

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <>
            <IconButton
                onClick={onOpen}
                colorScheme='teal'
                aria-label='Call Segun'
                size='md'
                icon={<EditIcon />}
            />

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    {/* <form onSubmit={}> */}

                        <ModalHeader>Edit note</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Editable defaultValue={notes.title}>
                                <EditablePreview />
                                <EditableInput onChange={handleChange} name='title' placeholder={values.title} value={notes.title} />
                                </Editable>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Body</FormLabel>
                                {/* <EditableTextarea type='text' name='note' onChange={handleChange} value={notes.body} placeholder={notes.body} /> */}
                               
                                <Editable defaultValue={notes.body}>
                                    <EditablePreview />
                                    <EditableTextarea  type='text' name='note' onChange={handleChange} value={notes.body} />
                                </Editable>

                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button  onClick={()=>handleSubmit(notes.id)} colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    {/* </form> */}
                </ModalContent>
            </Modal>

        </>
    )
}

export default Editnote
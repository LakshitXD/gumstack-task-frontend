import { useState } from 'react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'

function AddPlace() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    let [city, setCity] = useState('')
    let [country, setCountry] = useState('')
    let [image, setImage] = useState('')

    async function addButton() {

        await fetch("https://gumstack-task-production.up.railway.app/api/v1/cities", {
            method: "POST",
            headers: {
                'Content-Type': 'application/vnd.api+json'
            },
            body: JSON.stringify({
                "data": {
                    "type": "cities",
                    "attributes": {
                        "city-name": city,
                        "country-name": country,
                        "image-url": image
                    }
                }
            })
        })
        onClose(false)
    }
    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
                <Button onClick={onOpen} size='lg'>Add Place</Button>
            </div>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add place 💀</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>City you visited</FormLabel>
                            <Input ref={initialRef} placeholder='City name' onChange={(e) => setCity(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Country its located in</FormLabel>
                            <Input placeholder='Country' onChange={(e) => setCountry(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Image URL</FormLabel>
                            <Input placeholder='URL' onChange={(e) => setImage(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={addButton}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPlace

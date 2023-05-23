import React from 'react'
import { Row } from 'react-bootstrap'
import Topbar from '../components/navbar/Topbar'
import Individualnote from '../components/individualnote/Individualnote'

function Postpage() {
    return (
        <>
            <Row>
                <div style={{ position: 'sticky' }}>

                    <Topbar />
                </div>

            </Row>
            <Row>
                <div style={{padding:'5vh'}}>

                <Individualnote/>
                </div>


            </Row>
        </>
    )
}

export default Postpage
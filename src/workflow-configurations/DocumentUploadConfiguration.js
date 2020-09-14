import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const DocumentUploadEditConfiguration = () => {

    const [singleSelections, setSingleSelections] = useState([])

    const options = [
        'F24H Wizard',
        'MadCap Flare POC'
    ]

    return (
            <>
                <Form.Group>
                    <Form.Label>Select document to review</Form.Label>
                    <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={options}
                    placeholder="Choose a document..."
                    selected={singleSelections}
                    />
                </Form.Group>
            </>

    )
}

export const DocumentUploadViewConfiguration = ({workflowId}) => {

    const [configuration, setConfiguration] = useState({})

    useEffect(() => {
        //get configuration using workflowId
        const configuration = {
            step: 1,
            document: 'F2H Wizard'
        }
        setConfiguration(configuration)
    }, [workflowId])

    return (
            <>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="12">
                    Document to review
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly value={configuration.document} />
                    </Col>
                </Form.Group>
            </>

    )
}
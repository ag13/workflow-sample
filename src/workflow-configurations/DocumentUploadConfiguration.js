import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useFormikContext } from 'formik'
import { useLocalStorage } from '../common';

export const DocumentUploadEditConfiguration = () => {

    const { values, setFieldValue } = useFormikContext()

    const options = [
        'React',
        'Java'
    ]

    const handleChange = (value) => {
        if(value){
            setFieldValue('selectedDocument', value)
        }
    }

    return (
            <>
                <Form.Group>
                    <Form.Label>Select deployment for approval</Form.Label>
                    <Typeahead
                    id="basic-typeahead-single"
                    name="selectedDocument"
                    labelKey="name"
                    onChange={handleChange}
                    options={options}
                    selected={values.selectedDocument}
                    />
                </Form.Group>
            </>

    )
}

export const DocumentUploadViewConfiguration = ({workflowId}) => {

    const [configuration, setConfiguration] = useState({})
    const [workflows] = useLocalStorage('ws:workflows', [])

    useEffect(() => {
        //get configuration using workflowId
        const result = workflows.filter(item => item.workflowId === workflowId)
        if(result){
            const workflow = result[0]
            const configuration = {
                document: workflow.stepConfiguration.selectedDocument[0]
            }
            setConfiguration(configuration)
        }
    }, [workflowId, workflows])

    return (
            <>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="12">
                    Deployment for approval
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly value={configuration.document} />
                    </Col>
                </Form.Group>
            </>

    )
}
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useFormikContext } from 'formik'
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { useLocalStorage } from '../common';

export const DocumentSingleReviewEditConfiguration = ({nodeType, stepNumber}) => {

    const { values, setFieldValue } = useFormikContext()
    const [options, setOptions] = useState([])

    useEffect(() => {
        // This is just hardcoding for the PoC
        if(nodeType === 'multiReview'){
            setOptions(
                [
                    'Pritam Sadhukhan',
                    'Ashish Pathak',
                    'Anupam Gore'
                ]
            )
        }else if(nodeType === 'singleReview'){
            if(stepNumber === 'one'){
                setOptions([
                    'John Doe',
                    'Jane Doe'
                ])
            } else if(stepNumber === 'two'){
                setOptions([
                    'Akhil Kanaskar',
                    'Divakar Jegathesaraja '
                ])
            } else if(stepNumber === 'three'){
                setOptions([
                    'Nitin Bajaj',
                    'Nitin Dalbhide'
                ])
            } else if(stepNumber === 'four'){
                setOptions([
                    'Biplab Roy',
                    'John Moore'
                ])
            }
        }
    }, [nodeType, stepNumber])


    const handleChange = (value) => {
        if(value){
            setFieldValue(`reviewers-${stepNumber}`, value)
        }
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Select reviewer to review</Form.Label>
                <Typeahead
                id="basic-typeahead-multiple"
                name={`reviewers-${stepNumber}`}
                labelKey="name"
                onChange={handleChange}
                options={options}
                placeholder="Choose reviewer..."
                selected={values[`reviewers-${stepNumber}`] || []}
                />
            </Form.Group>
        </>

    )
}

export const DocumentSingleReviewViewConfiguration = ({workflowId, stepNumber}) => {

    const [configuration, setConfiguration] = useState({})
    const [workflows] = useLocalStorage('ws:workflows', [])

    useEffect(() => {
        //get configuration using workflowId
        const result = workflows.filter(item => item.workflowId === workflowId)
        if(result){
            const workflow = result[0]
            const configuration = {
                reviewer: workflow.stepConfiguration[`reviewers-${stepNumber}`]
            }
            console.log(configuration, stepNumber)
            setConfiguration(configuration)
        }
    }, [workflowId, stepNumber, workflows])

    return (
        <>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="12">
                Reviewer
                </Form.Label>
                <Col sm="10">
                    {
                        configuration && configuration.reviewer &&
                        <ListGroup>
                            <ListGroup.Item>{configuration.reviewer[0]}</ListGroup.Item>
                        </ListGroup>
                    }
                </Col>
            </Form.Group>
        </>

    )
}
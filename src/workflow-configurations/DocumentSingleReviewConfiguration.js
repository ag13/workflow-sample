import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useFormikContext } from 'formik'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export const DocumentSingleReviewEditConfiguration = ({nodeType, stepNumber}) => {

    const { values, setFieldValue } = useFormikContext()
    const [options, setOptions] = useState([])

    useEffect(() => {
        // This is just hardcoding for the PoC
        if(nodeType === 'multiReview'){
            setOptions(
                [
                    'Pritam',
                    'Ashish',
                    'Anupam'
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
                    'Akhil',
                    'Ashwini'
                ])
            } else if(stepNumber === 'three'){
                setOptions([
                    'Auro',
                    'Chitra'
                ])
            } else if(stepNumber === 'four'){
                setOptions([
                    'Shubho',
                    'Biplap'
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

export const DocumentSingleReviewViewConfiguration = ({fetchedWorkflow}) => {

    const [configuration, setConfiguration] = useState({})

    useEffect(() => {
        //get configuration using workflowId
        const configuration = {
            step: 2,
            reviewers: [
                {
                    name: 'Apoorva',
                    status: 'Rejected'
                }
            ]
        }
        setConfiguration(configuration)
    }, [fetchedWorkflow])

    return (
        <>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="12">
                Reviewer
                </Form.Label>
                <Col sm="10">
                    {
                        configuration && configuration.reviewers &&
                        <ListGroup>
                            {
                                configuration.reviewers.map(reviewer => 
                                    <ListGroup.Item>{reviewer.name} - {reviewer.status} <FiberManualRecordIcon style={{color: 'red', marginLeft: '100px'}} /></ListGroup.Item>)
                            }
                        </ListGroup>
                    }
                </Col>
            </Form.Group>
        </>

    )
}
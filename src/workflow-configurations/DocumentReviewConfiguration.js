import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useFormikContext } from 'formik'

export const DocumentReviewEditConfiguration = () => {

    const { values, setFieldValue } = useFormikContext()

    const options = [
        'Pritam',
        'Ashish',
        'Anupam'
    ]

    const handleChange = (value) => {
        if(value){
            setFieldValue('reviewers', value)
        }
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Select reviewers to review</Form.Label>
                <Typeahead
                id="basic-typeahead-multiple"
                name="reviewers"
                labelKey="name"
                multiple
                onChange={handleChange}
                options={options}
                placeholder="Choose reviewers..."
                selected={values.reviewers}
                />
            </Form.Group>
        </>

    )
}

export const DocumentReviewViewConfiguration = ({fetchedWorkflow}) => {

    const [configuration, setConfiguration] = useState({})

    useEffect(() => {
        //get configuration using workflowId
        const configuration = {
            step: 2,
            reviewers: [
                {
                    name: 'Apoorva',
                    status: 'In Progress'
                },
                {
                    name: 'Aniva',
                    status: 'Not started'
                }
            ]
        }
        console.log(configuration)
        setConfiguration(configuration)
    }, [fetchedWorkflow])

    return (
        <>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="12">
                Reviewers
                </Form.Label>
                <Col sm="10">
                    {
                        configuration && configuration.reviewers &&
                        <ListGroup>
                            {
                                configuration.reviewers.map(reviewer => 
                                    <ListGroup.Item>{reviewer.name} - {reviewer.status}</ListGroup.Item>)
                            }
                        </ListGroup>
                    }
                </Col>
            </Form.Group>
        </>

    )
}
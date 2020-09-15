import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

export const DocumentReviewEditConfiguration = () => {

    const [multiSelections, setMultiSelections] = useState([])

    const options = [
        'Pritam',
        'Ashish',
        'Anupam'
    ]

    return (
        <>
            <Form.Group>
                <Form.Label>Select reviewers to review</Form.Label>
                <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections}
                options={options}
                placeholder="Choose reviewers..."
                selected={multiSelections}
                />
            </Form.Group>
        </>

    )
}

export const DocumentReviewViewConfiguration = ({workflowId}) => {

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
    }, [workflowId])

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
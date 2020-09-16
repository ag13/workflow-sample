import React, { useState, useCallback, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkflowDiagram } from './WorkflowDiagram'
import { Sheet } from '../common'
import { DocumentReviewViewConfiguration, DocumentUploadViewConfiguration, DocumentSingleReviewViewConfiguration } from '../workflow-configurations'
import { DialogActions, DialogContent } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { useParams } from 'react-router-dom'

export const ViewWorkflow = () => {

    let { workflowId, type } = useParams()

    const [fetchedWorkflow, setFetchedWorkflow] = useState({})
    const [nodeType, setNodeType] = useState('')
    const [stepNumber, setStepNumber] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)

    useEffect(() => {
        //get workflow information from workflowId
        const fetchWorkflow = async () => {
            const response = await fetch(`http://localhost:8888/workflow/history/${workflowId}`, {
                method: 'GET'
            })
            if(response.ok){
                // const workflow = response.json()
                const workflow = {
                    "workflowId": "7aa6682f-910e-49ac-8698-9eab44295b80",
                    "history": [
                        {
                            "eventId": "1",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "2",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "3",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "4",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "5",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "6",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "7",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "8",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "9",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "10",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "11",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "12",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "13",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "14",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "15",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "16",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "17",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "18",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "19",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "20",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "21",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "22",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "23",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "24",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "25",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "26",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "27",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "28",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "29",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "30",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "31",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "32",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "33",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "34",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "35",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "36",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "37",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "38",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "39",
                            "eventType": null,
                            "state": null
                        },
                        {
                            "eventId": "40",
                            "eventType": null,
                            "state": null
                        }
                    ]
                }

                setFetchedWorkflow(workflow)
            }else{
                console.error('Not able to get workflow details')
            }
        }

        fetchWorkflow()
    }, [workflowId])

    const handleNodeClick = (clickedNodeAnnotation) => {
        if(clickedNodeAnnotation){
            setNodeType(clickedNodeAnnotation.stepType)
            setStepNumber(clickedNodeAnnotation.stepNumber)
            setOpenConfigurationSheet(true)
        }
    }

    const handleSheetClose = () => {
        setOpenConfigurationSheet(false)
    }

    const getNodeConfiguration = useCallback(() => {
        if(nodeType){
            switch(nodeType){
                case 'documentUpload': 
                    return <DocumentUploadViewConfiguration workflow={fetchedWorkflow} />
                case 'multiReview':
                    return <DocumentReviewViewConfiguration workflow={fetchedWorkflow} />
                case 'singleReview':
                    return <DocumentSingleReviewViewConfiguration workflow={fetchedWorkflow} />
                default:
                    return null
                
            }
        }
    }, [nodeType, workflowId])

    return (
        <>
            <Container fluid>
                <Row style={{margin: '20px'}}>
                    <Col xs={6} style={{textAlign: 'left'}}><h4>View Workflow</h4></Col>
                    <Col xs={3}>
                        <span>Status: <FiberManualRecordIcon style={{color: 'grey'}} />Not Started</span>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        
                        <WorkflowDiagram type={type} onNodeClick={handleNodeClick} />
                        <Sheet isOpen={openConfigurationSheet} handleClose={handleSheetClose} title="Step Configuration">
                            <DialogContent>
                                {getNodeConfiguration()}
                            </DialogContent>
                            <DialogActions>
                                <Button variant="light" onClick={handleSheetClose}>Cancel</Button>
                            </DialogActions>
                        </Sheet>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
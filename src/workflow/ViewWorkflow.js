import React, { useState, useMemo } from 'react'
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

    const [nodeType, setNodeType] = useState('')
    const [stepNumber, setStepNumber] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)

    const handleNodeClick = (clickedNodeAnnotation) => {
        if(clickedNodeAnnotation){
            setNodeType(clickedNodeAnnotation.stepType)
            setStepNumber(clickedNodeAnnotation.stepNumber)
            console.log(clickedNodeAnnotation.stepNumber)
            setOpenConfigurationSheet(true)
        }
    }

    const handleSheetClose = () => {
        setOpenConfigurationSheet(false)
    }

    const getNodeConfiguration = useMemo(() => {
        console.log('stepnumber', stepNumber, workflowId)
        if(nodeType){
            switch(nodeType){
                case 'documentUpload': 
                    return <DocumentUploadViewConfiguration workflowId={workflowId} />
                case 'multiReview':
                    return <DocumentReviewViewConfiguration workflowId={workflowId} />
                case 'singleReview':
                    return <DocumentSingleReviewViewConfiguration workflowId={workflowId} stepNumber={stepNumber} />
                default:
                    return null
                
            }
        }
    }, [nodeType, workflowId, stepNumber])

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
                        
                        <WorkflowDiagram type={type} workflowId={workflowId} onNodeClick={handleNodeClick} />
                        <Sheet isOpen={openConfigurationSheet} handleClose={handleSheetClose} title="Step Configuration">
                            <DialogContent>
                                {getNodeConfiguration}
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
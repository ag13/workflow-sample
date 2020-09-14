import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkflowDiagram } from './WorkflowDiagram'
import { Sheet } from '../common'
import { DocumentReviewViewConfiguration, DocumentUploadViewConfiguration } from '../workflow-configurations'
import { DialogActions, DialogContent } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { useParams } from 'react-router-dom'

export const ViewWorkflow = () => {

    let { workflowId } = useParams()

    const [nodeId, setNodeId] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)

    const handleNodeClick = (clickedNodeId) => {
        if(clickedNodeId){
            setNodeId(clickedNodeId)
            setOpenConfigurationSheet(true)
        }
    }

    const handleSheetClose = () => {
        setOpenConfigurationSheet(false)
    }

    const getNodeConfiguration = useCallback(() => {
        if(nodeId){
            switch(nodeId){
                case 'node1': 
                    return <DocumentUploadViewConfiguration workflowId={workflowId} />
                case 'node2':
                    return <DocumentReviewViewConfiguration workflowId={workflowId} />
                default:
                    return null
                
            }
        }
    }, [nodeId, workflowId])

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
                        
                        <WorkflowDiagram onNodeClick={handleNodeClick} />
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
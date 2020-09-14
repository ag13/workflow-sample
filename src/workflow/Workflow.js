import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkflowDiagram } from './WorkflowDiagram'
import { Sheet, Toastr } from '../common'
import { DocumentReviewConfiguration, DocumentUploadConfiguration } from '../workflow-configurations'
import { DialogActions, DialogContent } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export const Workflow = () => {

    const [nodeId, setNodeId] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)
    const [showSuccessToast, setShowSuccessToast] = useState(false)
    const [showNewWorkflowModal, setShowNewWorkflowModal] = useState(false)
    const [showWorkflowStartToast, setShowWorkflowStartToast] = useState(false)

    const handleNodeClick = (clickedNodeId) => {
        if(clickedNodeId){
            setNodeId(clickedNodeId)
            console.log('node clicked')
            setOpenConfigurationSheet(true)
        }
    }

    const handleSheetClose = () => {
        setOpenConfigurationSheet(false)
    }
    
    const handleStepConfigurationSave = () => {
        setShowSuccessToast(true)
        setOpenConfigurationSheet(false)
    }

    const getNodeConfiguration = useCallback(() => {
        if(nodeId){
            switch(nodeId){
                case 'node1': 
                    return <DocumentUploadConfiguration />
                case 'node2':
                    return <DocumentReviewConfiguration />
                default:
                    return null
                
            }
        }
    }, [nodeId])

    const handleStartWorkflow = () => {
        console.log('handle start')
        setShowNewWorkflowModal(true)
    }

    const handleWorkflowSave = () => {
        //workflow save processing
        setShowNewWorkflowModal(false)

        setShowWorkflowStartToast(true)
    }

    return (
        <>
            <Container fluid>
            <Row style={{margin: '20px'}}>
                <Col xs={6} style={{textAlign: 'left'}}><h4>Create Workflow</h4></Col>
                <Col xs={3}>
                    <Button variant="primary" onClick={handleStartWorkflow}>Start Workflow</Button>
                </Col>
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
                            <Button variant="primary" onClick={handleStepConfigurationSave}>Save</Button>
                        </DialogActions>
                    </Sheet>
                </Col>
            </Row>

            <Toastr isOpen={showSuccessToast} header="Workflow Configuration" body="Saved step configuration" />
            <Toastr isOpen={showWorkflowStartToast} header="Workflow" body="New workflow started" />

            </Container>        

            
             <Modal show={showNewWorkflowModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>New workflow</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formWorkflowName">
                            <Form.Label>Workflow name</Form.Label>
                            <Form.Control type="text" />
                            <Form.Text className="text-muted">
                                Give your workflow a name. It helps in indentification
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowNewWorkflowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleWorkflowSave}>Save</Button>
                </Modal.Footer>
            </Modal>
            
            
        </>
    )
}
import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkflowDiagram } from './WorkflowDiagram'
import { Sheet } from '../common'
import { DocumentReviewConfiguration, DocumentUploadConfiguration } from '../workflow-configurations'
import { DialogActions, DialogContent } from '@material-ui/core'

export const Workflow = () => {

    const [nodeId, setNodeId] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)
    const [showSuccessToast, setShowSuccessToast] = useState(false)

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

    const handleToastClose = () => {
        setShowSuccessToast(false)
    }

    return (
        <>

            <Container>
            <Row>
                <Col xs={6}>Create Workflow</Col>
                <Col xs={6}><Button variant="primary">Start</Button>{' '}</Col>
            </Row>
            <Row>
                <Col>
                    
                    <WorkflowDiagram onNodeClick={handleNodeClick} />
                    <Sheet isOpen={openConfigurationSheet} handleClose={handleSheetClose}>
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

            <div
                style={{
                position: 'absolute',
                top: 0,
                right: 0,
                }}
            >
                <Toast show={showSuccessToast} onClose={handleToastClose}>
                    <Toast.Header>
                        <strong className="mr-auto">Workflow Configuration</strong>
                    </Toast.Header>
                    <Toast.Body>Saved step configuration</Toast.Body>
                </Toast>
            </div>
            </Container>        
        </>
    )
}
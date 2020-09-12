import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkflowDiagram } from './WorkflowDiagram'
import { Sheet } from '../common'
import { DocumentReviewConfiguration, DocumentUploadConfiguration } from '../workflow-configurations'

export const Workflow = () => {

    const [nodeId, setNodeId] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)

    const handleNodeClick = (clickedNodeId) => {
        if(clickedNodeId){
            setNodeId(clickedNodeId)
            setOpenConfigurationSheet(true)
        }
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
                    <Sheet open={openConfigurationSheet}>
                        {
                            getNodeConfiguration()
                        }
                    </Sheet>
                </Col>
            </Row>
            </Container>        
        </>
    )
}
import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkflowDiagram } from './WorkflowDiagram'
import { Sheet, Toastr } from '../common'
import { DocumentReviewEditConfiguration, DocumentUploadEditConfiguration, DocumentSingleReviewEditConfiguration } from '../workflow-configurations'
import { DialogActions, DialogContent } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { Formik } from 'formik'
import { useParams } from 'react-router-dom'

export const WorkflowCreation = () => {

    const [nodeType, setNodeType] = useState('')
    const [openConfigurationSheet, setOpenConfigurationSheet] = useState(false)
    const [showSuccessToast, setShowSuccessToast] = useState(false)
    const [showWorkflowStartToast, setShowWorkflowStartToast] = useState(false)
    const { type } = useParams()
    
    const handleNodeClick = (clickedNodeType) => {
        if(clickedNodeType){
            setNodeType(clickedNodeType)
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
                    return <DocumentUploadEditConfiguration />
                case 'multiReview':
                    return <DocumentReviewEditConfiguration />
                case 'singleReview':
                    return <DocumentSingleReviewEditConfiguration />
                default:
                    return null
                
            }
        }
    }, [nodeType])

    const handleWorkflowSave = async (values) => {
        console.log('values', values)

        //TODO - API call to initiate workflow
        // const response = await fetch('http://localhost:8888/workflow/initiate', {
        //     method: 'POST'
        // })

        // if(response.ok){
        //     setShowWorkflowStartToast(true)
        //     //redirect to workflow listing
        // }else{
        //     //show error toast
        // }
    }

    return (            
            <Formik initialValues={{selectedDocument: [], reviewers: [], workflowName: ''}} onSubmit={handleWorkflowSave}>
                        {({
                            handleSubmit,
                            handleChange
                        }) => (
                            <Form onSubmit={handleSubmit}>
                            <Container fluid>
                    <Row style={{margin: '20px'}}>
                        <Col xs={4} style={{textAlign: 'left'}}><h4>Create Workflow</h4></Col>
                        <Col xs={4}>
                            <Form.Group controlId="formWorkflowName">
                                <Form.Control type="text" name="workflowName" onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    Give your workflow a name
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Button variant="primary" type="submit">Start Workflow</Button>
                        </Col>
                        <Col xs={2}>
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
                                            <Button variant="light" onClick={handleSheetClose}>Close</Button>
                                        </DialogActions>
                                    </Sheet>
                                
                        </Col>
                    </Row>

                    <Toastr isOpen={showSuccessToast} header="Workflow Configuration" body="Saved step configuration" />
                    <Toastr isOpen={showWorkflowStartToast} header="Workflow" body="New workflow started" />
                    </Container>    
            
            </Form>
            )}
            </Formik>
    )
}
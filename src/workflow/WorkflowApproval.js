import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Snackbar from '@material-ui/core/Snackbar';
import { useParams } from 'react-router-dom'

export const WorkflowApproval = () => {
  const rowStyle =
  {
    display: 'flex',
    justifyContent: 'center'
  }

  const { id, stage } = useParams()
  const [snackbar, setSnackBar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleApproval = () => {
    setSnackBar(true);
    setSnackbarMessage('Workflow has been Approved')
    setWorkflowStatus('approve')
  }

  const handleRejection = () => {
    setSnackBar(true);
    setSnackbarMessage('Workflow has been Rejected')
    setWorkflowStatus('reject')
  }

  const setWorkflowStatus = (value) => {
    fetch("http://ec2-3-129-9-103.us-east-2.compute.amazonaws.com:8888/acknowledgement/", {

      method: "POST",
      body: JSON.stringify({
        workflowId: id,
        level: stage,
        value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        console.log('Response after Approval', response)
        // setSnackbarMessage(response)
      }) // response is already a JSON Object no need to convert
      .catch(error => console.error('Received Error while posting via acknowledge service: ', error))
  }
  const closeSnackbar = () => {
    setSnackBar(false);
  }

  return (
    <Container fluid>
      <Row style={{ margin: '20px', borderBottom: '1px solid black' }}>
        <h3> WorkFlow Approval Page</h3>
      </Row>

      <Row style={{ margin: '30px' }}>
        <Col xs={2} style={rowStyle}><h4>1</h4></Col>
        <Col xs={4} style={rowStyle}><h4>First Workflow</h4></Col>
        <Col xs={3} style={rowStyle}>
          <Button variant='success' onClick={handleApproval}> Approve </Button>
        </Col>
        <Col xs={3} style={rowStyle}>
          <Button variant='danger' onClick={handleRejection}> Reject </Button>
        </Col>
      </Row>
      {
        snackbar &&
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackbar}
          onClose={closeSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackbarMessage}</span>}
        />
      }
    </Container>
  )
}
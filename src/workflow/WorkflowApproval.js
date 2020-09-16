import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Snackbar from '@material-ui/core/Snackbar';

export const WorkflowApproval = () => {
  const rowStyle =
  {
    display: 'flex',
    justifyContent: 'center'
  }

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
    fetch("http://localhost:8888/acknowledgement/", {

      method: "POST",
      body: JSON.stringify({
        workflowId: "7aa6682f-910e-49ac-8698-9eab44295b80",
        level: "three",
        value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(response => console.log('Response after Approval', response))
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
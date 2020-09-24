import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Snackbar from '@material-ui/core/Snackbar';
// import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { useLocalStorage } from '../common'

export const WorkflowApproval = () => {
  const rowStyle =
  {
    display: 'flex',
    justifyContent: 'start'
  }

  // const { id, stage } = useParams()
  const [snackbar, setSnackBar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [workflows] = useLocalStorage('ws:workflows', [])
  const [showApprovalTab, setShowApprovalTab] = useState(false)
  const [workflowId, setWorkflowId] = useState('')

  const workflowLevels = ['one', 'two', 'three']

  const handleWorkflowItem = (id) => {
    setShowApprovalTab(true)
    setWorkflowId(id)
  }

  const handleApproval = (level) => {
    setSnackBar(true);
    setSnackbarMessage('Workflow has been Approved')
    setWorkflowStatus(level, 'approve')
  }

  const handleRejection = (level) => {
    setSnackBar(true);
    setSnackbarMessage('Workflow has been Rejected')
    setWorkflowStatus(level, 'reject')
  }

  const setWorkflowStatus = (level, value) => {
    // workflowId: id,
    // level: stage,
    fetch("http://ec2-18-224-200-243.us-east-2.compute.amazonaws.com:8888/acknowledgement/", {

      method: "POST",
      body: JSON.stringify({
        workflowId,
        level,
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Workflow ID</th>
              <th>Workflow Name</th>
              <th>Manage Workflows</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((item, index) => {
              return (
                <tr key={item.workflowId}>
                  <td>{index + 1}</td>
                  <td>{item.workflowId}</td>
                  <td>{item.name}</td>
                  <td><Button variant='success' onClick={() => handleWorkflowItem(item.workflowId)}> Manage </Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Row>
      {showApprovalTab && <Row xs={4} style={{ display: 'flex', justifyContent: 'center', margin: '30px', borderBottom: '1px solid grey', fontSize: '24px' }}>Below are different Approval Levels for Selected ID : {workflowId}</Row>}
      <Row style={{ margin: '30px' }}>

        {showApprovalTab && <ul style={{ width: '100%' }}>{workflowLevels.map((level, index) => {
          return (
            <li key={index} style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: '10px' }}>

              <Col xs={6} style={rowStyle}><h4>Level {level}</h4></Col>
              <Col xs={3} style={rowStyle}>
                <Button variant='success' onClick={() => handleApproval(level)}> Approve </Button>
              </Col>
              <Col xs={3} style={rowStyle}>
                <Button variant='danger' onClick={() => handleRejection(level)}> Reject </Button>
              </Col>
            </li>
          )
        })}</ul>

        }

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
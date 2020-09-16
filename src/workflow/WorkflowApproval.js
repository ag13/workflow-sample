import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const WorkflowApproval = () => {
  const rowStyle =
  {
    display: 'flex',
    justifyContent: 'center'
  }

  const handleApproval = () => {
    alert('Workflow has been Approved');
  }

  const handleRejection = () => {
    alert('Workflow has been Rejected');
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


    </Container>
  )
}
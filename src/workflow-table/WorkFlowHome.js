import React from 'react'
import { NavLink } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export const WorkFlowHome = () => {
  const userData = [
    {
      id: 1,
      name: 'First User',
      type: 'In Approval',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Second User',
      type: 'In Approval',
      status: 'In Progress'
    }
  ]

  return (
    <Container fluid>
      <Row style={{ margin: '20px' }}>
        <Col xs={6} style={{ textAlign: 'left' }}><h3>Your Workflows</h3></Col>
        <Col xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DropdownButton id="dropdown-item-button" title="Create Workflows">
            <Dropdown.Item as={NavLink} to="/workflows/create">Sequential Review</Dropdown.Item>
            <Dropdown.Item as="button">Parallel Review</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Row style={{ margin: '40px' }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.status}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}
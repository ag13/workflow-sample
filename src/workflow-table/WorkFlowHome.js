import React from 'react'
import { NavLink } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from '../common'

export const WorkFlowHome = () => {
  const history = useHistory()
  const [workflows] = useLocalStorage('ws:workflows', [])

  // const userData = [
  //   {
  //     id: 1,
  //     name: 'First User',
  //     type: 'sequential',
  //     status: 'In Progress'
  //   },
  //   {
  //     id: 2,
  //     name: 'Second User',
  //     type: 'parallel',
  //     status: 'In Progress'
  //   }
  // ]

  const handleRowClick = (item) => {
    if(item && item.workflowId){
      const workflowTypeLowerCase = item.workflowType.toLowerCase()
      history.push(`/workflows/view/${workflowTypeLowerCase}/${item.workflowId}`)
    }
  }

  return (
    <Container fluid>
      <Row style={{ margin: '20px' }}>
        <Col xs={6} style={{ textAlign: 'left' }}><h3>Your Workflows</h3></Col>
        <Col xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DropdownButton id="dropdown-item-button" title="Create Workflows">
            <Dropdown.Item as={NavLink} to="/workflows/create/sequential">Sequential Review</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/workflows/create/parallel">Parallel Review</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Row style={{ margin: '40px' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map(item => {
              return (
                <tr key={item.workflowId} onClick={() => handleRowClick(item)}>
                  <td>{item.workflowId}</td>
                  <td>{item.name}</td>
                  <td>{item.workflowType}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}
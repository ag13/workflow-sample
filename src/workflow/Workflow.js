import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export const Workflow = () => {

    let history = useHistory()

    const handleWorkflowClick = (workflowId) => {
        history.push(`/view/${workflowId}`)
    }

    const handleNewWorkflow = () => {
        history.push('/create')
    }

    return (
        <>
            <Button variant="primary" onClick={handleNewWorkflow}>Create New Workflow</Button>
            <div onClick={() => handleWorkflowClick('sample-id')}>Workflow 1</div>
        </>
    )
}
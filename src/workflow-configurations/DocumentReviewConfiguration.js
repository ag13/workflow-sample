import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'

export const DocumentReviewConfiguration = () => {

    const [multiSelections, setMultiSelections] = useState([])

    const options = [
        'Pritam',
        'Ashish',
        'Anupam'
    ]

    return (
        <>
            <div>Document Review</div>
            <Form.Group>
                <Form.Label>Select reviewers to review</Form.Label>
                <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections}
                options={options}
                placeholder="Choose reviewers..."
                selected={multiSelections}
                />
            </Form.Group>
        </>

    )
}
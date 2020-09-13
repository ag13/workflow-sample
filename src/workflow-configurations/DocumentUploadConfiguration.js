import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'

export const DocumentUploadConfiguration = () => {

    const [singleSelections, setSingleSelections] = useState([])

    const options = [
        'F24H Wizard',
        'MadCap Flare POC'
    ]

    return (
        <>
            <div>Document Selection</div>
            <Form.Group>
                <Form.Label>Select document to review</Form.Label>
                <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleSelections}
                options={options}
                placeholder="Choose a state..."
                selected={singleSelections}
                />
            </Form.Group>
        </>

    )
}
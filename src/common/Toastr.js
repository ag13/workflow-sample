import React from 'react'
import Toast from 'react-bootstrap/Toast'

export const Toastr = ({isOpen, header, body}) => {
    return (
        <div
            style={{
            position: 'absolute',
            top: 0,
            right: 0,
            }}
        >
            <Toast show={isOpen} delay={3000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">{header}</strong>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
            </Toast>
        </div>
    )
}
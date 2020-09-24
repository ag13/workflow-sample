import React from 'react'
import Image from 'react-bootstrap/Image'
import ServiceNowImage from '../assets/ServiceNow.logo.jpg'
export const ServiceNowEditConfiguration = () => {
    return (
        <div>This step will call the Service Now to create the request Id</div>
    )
}

export const ServiceNowViewConfiguration = () => {
    return (
        <>
            <Image src={ServiceNowImage} rounded style={{width: '100px'}}/>
            <div>Service Now Request Id - 783nsdfk234e09</div>
        </>
    )
}
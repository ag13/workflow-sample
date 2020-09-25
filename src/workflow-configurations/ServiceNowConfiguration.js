import React from 'react'
import Image from 'react-bootstrap/Image'
import ServiceNowImage from '../assets/ServiceNow.logo.jpg'
export const ServiceNowEditConfiguration = () => {
    return (
        <div>This step will call the Service Now API to create the ticket</div>
    )
}

export const ServiceNowViewConfiguration = () => {
    return (
        <>
            <Image src={ServiceNowImage} rounded style={{width: '100px'}}/>
            <div>Service Now Request Id - <a href='https://www.servicenow.com/' > 783nsdfk234e09</a></div>
        </>
    )
}
import React from 'react'
import Image from 'react-bootstrap/Image'
import ServiceNowImage from '../assets/ServiceNow.logo.jpg'
export const ServiceNowEditConfiguration = () => {
    return (
        <div>This step will call the Service Now API to create the ticket</div>
    )
}

export const ServiceNowViewConfiguration = ({serviceNowId}) => {
    console.log()
    return (
        <>
            <Image src={ServiceNowImage} rounded style={{width: '100px'}}/>
            {
                serviceNowId.length
                ? <div>Service Now Request Id - <a href='https://www.servicenow.com/' > {serviceNowId}</a></div> 
                :<div>No Service now ticket created as the workflow request has been rejected.</div>
            }
    
        </>
    )
}
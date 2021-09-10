import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceCard from './Components/Card'
import Service from "./style"
 
import {Images} from "~data"
export default function ServicesSection(){
return(
<Service>
  <Container>
    <Row>
      <Col xs="12" className="col-xl-5 col-lg-6 col-md-9 col-xs-10 order-2 order-lg-1">
          <Service.Subtitle fontColor="#fd346e" as="h4" mb="22px">Servicios</Service.Subtitle>
          <Service.Title as="h2"  mb="40px">Get better conversion with user-friendly and mobile optimized websites</Service.Title>
          <Service.Button pl="15px" pr="15px" sizeY="56px" sizeX="168px" className="btn" href="#">Learn More</Service.Button>
      </Col>
      <Col xs="12" className="col-xxl-6 offset-xxl-1 col-xl-7 col-lg-6 col-md-11 order-1 order-lg-2">
        <Service.Box mlXL="35px" mb="20px" mbLG="0px">
            <Service.Text mb="40px">If you don’t have a website or can’t be found on the first
            page of Google<br className="d-none d-md-block d-lg-none d-xl-block" /> then you are missing out on potential visitors and sales.
            </Service.Text>
            <ServiceCard image={Images.DigiTalagency.servicesIcon1} title="Website Design & Development" text="Refresh old out dated website or bring your business online with your first website." mb="25px"/>
            <ServiceCard image={Images.DigiTalagency.servicesIcon2} title="Search Engine Optimisation (SEO)" text="Start bringing new visitors to your website with an SEO campaign!" mb="25px"/>
            <ServiceCard image={Images.DigiTalagency.servicesIcon3} title="Google Ads Management (PPC)" text="Start bringing new visitors to your website with an SEO campaign!" mb="25px"/>
        </Service.Box>
      </Col>
    </Row>
  </Container>
</Service>

)
}
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesCard from './Components/Card'
import ServiceData from "~data/agency/Service"
import SectionTitle from './Components/SectionTitle'
import Service from './style'
export default function ServiceSection(){
return(
<Service backgroundColor="#f3f4f6">
  <Container>
    <Row className="row justify-content-center">
      <Col xs="12" className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10">
      <SectionTitle
        subTitle="Our Services" 
        title="Providing solutions of every kind"
        text="In a professional context it often happens that private or
        corporate clients order a publication to publish news"
        subTitleProps={{mb:"27px"}}
        titleProps={{mb:"10px",as:"h2"}}
        mb="20px" />
      </Col>
      {ServiceData.map(({ title, icon, text, id, iconColor }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10"
                  key={id}
                >
                <ServicesCard
                  title={title}
                  text={text}
                  icon={icon}
                  to="/marketing"
                  iconBackground={iconColor}
                />
              </Col>
              )
            })}
    </Row>
  </Container>
</Service>

)
}
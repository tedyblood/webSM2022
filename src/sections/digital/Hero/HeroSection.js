import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
import { Images } from '~data'
import Hero from './style'
 
export default function HeroSection(){
return(
<Hero style={{backgroundImage: `url(${Images.DigiTalagency.heroImg})`}}>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-9">
        <Hero.Content className="text-center">
          <Hero.Icon><i className="fa fa-bell" /></Hero.Icon>
          <Hero.Title as="h1" fontColor="#fff">Create your Digital Presence, Increase your business growth</Hero.Title>
          <Hero.Text fontColor="#fff">Get a website to be found on the first page of Google to avoid<br className="d-none d-xs-block" /> missing out on potential visitors
            and sales. </Hero.Text>
          <Hero.Button as={Link} to="/">Iniciar</Hero.Button>
        </Hero.Content>
      </Col>
    </Row>
  </Container>
</Hero>

)
}
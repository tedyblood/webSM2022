import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StaticImage as Img } from 'gatsby-plugin-image'
import { Link } from '~components'
import Hero from './style'
export default function HeroSection(){
return(
<Hero backgroundColor="rgba(21, 205, 168, 0.2)">
  <Container>
    <Row className="align-items-center justify-content-center">
      {/* Welcome content Area */}
      <Col className="col-xxl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
        <Hero.Content>
          <Hero.SubTitle fontColor="#ff7272"  as="h3">Get Started</Hero.SubTitle>
          <Hero.Title as="h1">Your fitness advisor <br className="d-none d-xs-block d-lg-none d-xl-block" />AIl in one place</Hero.Title>
          <Hero.Text fontColor="rgba(38, 39, 41, 0.7)">When, while lovely valley teems with vapour around
            meand <br className="d-none d-md-block" />
            meridian sun strikes the upper impenetroble.</Hero.Text>
          <Hero.ButtonGroup>
            <Hero.Button className="btn-red 🌱" as={Link} to="/">Watch Video</Hero.Button>
            <Hero.Button className="btn-green" as={Link} to="/">Get Started</Hero.Button>
          </Hero.ButtonGroup>
        </Hero.Content>
      </Col>
      {/*/ .Welcome Content Area */}
      {/*/ .Welcome img Area */}
      <Col xs="12" className="col-xxl-6 col-lg-5 col-md-8 col-xs-10 order-1 order-lg-2">
        <Hero.ImageGroup>
            <Hero.ImageOne>
              <Img className="w-100" src="../../../assets/image/home-app/hero-l8-1.png" alt="app" layout="fullWidth" placeholder="blurred"/>
            </Hero.ImageOne>
            <Hero.ImageTwo>
              <Img className="w-100" src="../../../assets/image/home-app/hero-l8-2.png" alt="app-img" layout="fullWidth" placeholder="blurred"/>
            </Hero.ImageTwo>
        </Hero.ImageGroup>
      </Col>
      {/*/ .Welcome img Area */}
    </Row>
  </Container>
</Hero>
)
}
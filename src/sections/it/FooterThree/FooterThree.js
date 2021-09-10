import { Link } from '~components'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Images } from '~data'
import Footer from "./style"
export default function FooterThree(){
return(
    <Footer>
    <Container>
        <Footer.Box pbXL="95px">
        <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
            <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                    <Link  to="#">
                        <img src={Images.FooterSix.LogoBlack} alt="logo" />
                    </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                We’re the digital agency to create<br className="d-none d-xl-block" /> your digital presence for better<br className="d-none d-xl-block" /> conversion and sales.</Footer.Text>

            </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-8">
            <Row>
            <Col xs="12" className="col-lg-4 col-xs-6">
                    <Footer.Widgets>
                        <Footer.Title>Contact Details</Footer.Title>
                        <Footer.Address className="widgets-address">
                            <Footer.AddressItem>
                                <span>Amsterdam <br className="d-block" />
                                Netherlands</span>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <a href="#">+31 62 19 22 705
                                <span className="d-block"> 7 Days - 8am - 10pm </span> </a>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <a href="mailto:info@medcartel.com">info@medcartel.com</a>
                            </Footer.AddressItem>
                        </Footer.Address>
                    </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-4 col-xs-6">
                <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                        <Footer.ListItems>
                            <a href="#">About
                            us</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Privacy
                            Policy</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Terms &amp;
                            Conditions</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Rider</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Contact</a>
                        </Footer.ListItems>
                    </Footer.List>
                </Footer.Widgets>
                </Col>

                <Col xs="12" className="col-lg-4 col-xs-7">
                <Footer.Widgets>
                    <Footer.Title>Instagram</Footer.Title>
                    <Footer.Gallery as={Row}>
                        <Col xs="4">
                            <img src={Images.footerThree.instaImg1} alt="insta-image" className="w-100" />
                        </Col>
                        <Col xs="4">
                            <img src={Images.footerThree.instaImg2} alt="insta-image" className="w-100" />
                        </Col>
                        <Col xs="4">
                            <img src={Images.footerThree.instaImg3} alt="insta-image" className="w-100" />
                        </Col>
                        <Col xs="4">
                            <img src={Images.footerThree.instaImg4} alt="insta-image" className="w-100" />
                        </Col>
                        <Col xs="4">
                            <img src={Images.footerThree.instaImg5} alt="insta-image" className="w-100" />
                        </Col>
                        <Col xs="4">
                            <img src={Images.footerThree.instaImg6} alt="insta-image" className="w-100" />
                        </Col>
                    </Footer.Gallery>
                </Footer.Widgets>
                </Col>
            </Row>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.CopyrightText>© 2021 Fastland By FinestDevs. All Rights Reserved</Footer.CopyrightText>
        <Footer.SocialShare>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-facebook-square" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-twitter" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-instagram" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-linkedin" />
                </a>
            </Footer.SocialShareItem>
        </Footer.SocialShare>
        </Footer.Copyright>
    </Container>
    </Footer>
)
}
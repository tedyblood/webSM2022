import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '~data'
import BlogRequlerData from '~data/BlogRequlerData'
import Sidebar from '~sections/Blog/Sidebar'
import BlogCard from './Comonent/Card'
import Blog from './style'
export default function BlogRegular(){
return(
<Blog backgroundColor="#f9fafc">
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-8 text-center">
        <Blog.Box mb="63px">
          <Blog.Subtitle as="h6" fontColor="#5034fc">Blog</Blog.Subtitle>
          <Blog.Title as="h2">Blog Right Sidebar</Blog.Title>
        </Blog.Box>
      </Col>
    </Row>
    <Row className="justify-content-center">
    <Col xs="12" className="col-xl-8 col-lg-7">
    <Row className="justify-content-center">
          <Col xs="12">
            <BlogCard
                image={Images.BlogsPage.BlogsImg1}
                badge="Gadgets"
                date="01 June, 2020"
                title="We can blend colors multiple ways, the most common"
                user="George Lee"
                Like="21K"
                commentCount="305"
                />
            </Col>
          {BlogRequlerData.map(({image, badge, Like, date, title, user, commentCount},index)=>{
            
            return(
                <Col xs="12" className="col-xl-6 col-lg-9 col-md-7 col-xs-10" key={"bsp" + index}>
                  <BlogCard
                    image={image}
                    badge={badge}
                    date={date}
                    title={title}
                    user={user}
                    Like={Like}
                    commentCount={commentCount}
                    />
                </Col>
              )
            })}
          </Row>
          <Blog.Box mtLG="50px" mt="30px">
          <Row className="justify-content-xl-center">
              <Col xs="12" className="col-xl-8">
                  <Blog.Paginations className="list-unstyled text-xl-center mx-auto">
                    <li>
                      <a href="#"><i className="fa fa-chevron-left" /></a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-chevron-right" /></a>
                    </li>
                  </Blog.Paginations>
              </Col>
            </Row>
          </Blog.Box>
      </Col>
      <Col xs="12" className="col-xl-4 col-lg-5 col-md-7 col-xs-10 mt-5 mt-lg-0">
        <Sidebar/>
      </Col>
    </Row>
  </Container>
</Blog>

)
}
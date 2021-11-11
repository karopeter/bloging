import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arenas from '../../../src/assets/img/logo.png';
import './grid.styles.scss';

function Grid() {
  return(
   <Container>
   <Row>
      <Col>Too any bag on my mind</Col>
      <Col>The return of captain jack</Col>
   </Row>
   <Row>
    <Col>
     <img src={arenas} alt="" className="image" />
    </Col>
    <Col>A Better Time</Col>
    <Col>Back In Office</Col>
   </Row>
   <Row>
      <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore, quis doloribus assumenda quibusdam atque sunt repellendus labore quo dolor at eligendi officia totam, id architecto. Quae molestias libero recusandae!</Col>
      <Col xs={6}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eveniet beatae quas repellendus omnis velit earum, eaque voluptatem, id esse nemo officia, cupiditate illum quo dolores. Dicta nihil ex magnam.</Col>
      <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias in eveniet dolore nulla quis voluptatibus quas incidunt, corporis neque id sit consectetur, officiis tenetur officia perferendis velit, distinctio dolorum?</Col>
   </Row>
   <Row>
      <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque amet dolorum autem, fugiat fuga, quia quidem ea minus repudiandae totam doloremque saepe dignissimos sunt vitae tenetur sequi excepturi commodi?</Col>
      <Col xs={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam dicta aliquid cupiditate architecto inventore accusantium ratione officia, porro repellendus deserunt laborum voluptas voluptatum veniam at quibusdam itaque labore laboriosam? (wider)</Col>
      <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A reiciendis cupiditate aliquam nemo odio. Et, incidunt! Ducimus adipisci ratione illum possimus debitis quia mollitia excepturi autem, unde, quos, dolor deleniti!r</Col>
   </Row>
   <Row className="justify-content-md-center">
     <Col xs lg="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium magni error ea ullam numquam cum explicabo? Commodi facilis architecto, laboriosam sed perspiciatis qui eaque, fugit deleniti, voluptate quasi dicta.</Col>
     <Col md="auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate nemo non a repellendus eos nostrum.</Col>
     <Col xs lg="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati qui perferendis dolorem illo sit excepturi, sed suscipit ducimus iste quas ea autem rem repellendus facere modi maxime. Necessitatibus, dolor.</Col>
   </Row>
   <Row>
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
   </Row>
   <Row>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
   </Row>
   <Row>
      <Col xs={12} md={8}>
        xs=12 md=8
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
   </Row>
   <Row>
      <Col md={4}>md=4</Col>
      <Col md={{ span: 4, offset: 4}}>{`md={{ span: 4, offset: 4}}`}</Col>
   </Row>
   <Row>
      <Col md={{ span: 3, offset: 3}}>{`md={{ span: 3, offset: 3 }}`}</Col>
      <Col md={{ span: 3, offset: 3}}>{`md={{ span: 3, offset: 3 }}`}</Col>
   </Row>
   <Row>
      <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3}}`}</Col>
   </Row>
  </Container>
  );
}

export default Grid;
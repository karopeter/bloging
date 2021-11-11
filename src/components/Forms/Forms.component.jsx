import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './forms.styles.scss';

function Forms() {
    return (
     <Form>
         <Form.Group className="mb-3 input-method" controlId="formBasicEmail">
           <Form.Label>Email Address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
               We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3 input-method" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Paswword" />
         </Form.Group>
         <Form.Group className="mb-3 input-method" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button className="btn-ghost" variant="primary" type="submit">
            Submit
         </Button>

      <Form.Select className="light-blind" aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Row className="g-2 input-method walkin">
        <Col md>
         <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
         </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
             <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
             </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
     </Form>
    );
}

export default Forms;

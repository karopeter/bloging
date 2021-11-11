import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Accordion';


function Prolong() {
   return (
     <Accordion defaultActiveKey="0">
       <Accordion.Item eventKey="0">
         <Accordion.Header>Accordion</Accordion.Header>
         <Accordion.Body>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
           commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
             est laborum.
          </Accordion.Body>
       </Accordion.Item>
     </Accordion>
   );
}

function CustomToggle({ children, eventKey}) {
    const decoratedOnClick = useAccordionButton(eventKey, () => 
    console.log('totally custom!'),
    );

    return (
     <button type="button" style={{ backgroundColor: 'pink'}} onClick={decoratedOnClick}>
        { children }
     </button>
    );
}

function Example() {
  return (
    <Accordion defaultActiveKey="0">
       <Card>
         <Card.Header>
           <CustomToggle eventKey="0">Click me!</CustomToggle>
         </Card.Header>
         <Accordion.Collapse>
            <Card.Body>Hello! I'm the body</Card.Body>
         </Accordion.Collapse>
       </Card>
       <Card>
         <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
         </Card.Header>
         <Accordion.Collapse eventKey="1">
           <Card.Body>Hello! I'm another body</Card.Body>
         </Accordion.Collapse>
       </Card>
    </Accordion>
  );
}


export default Prolong;
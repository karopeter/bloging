import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Stacked() {
    return (
    //   <Stack gap={3}>
    //      <div className="bg-light border">Internation Specification</div>
    //      <div className="bg-light border">Love at a first sight</div>
    //      <div className="bg-light border">Cherish the once you love now</div>
    //   </Stack>
    //   <Stack direction="horizontal" gap={3}>
    //      <div className="bg-light border">First Name</div>
    //      <div className="bg-light border">Second Name</div>
    //      <div className="bg-light border">Third Name</div>
    //   </Stack>
    // <Stack direction="horizontal" gap={3}>
    //   <div className="bg-light border">First Item</div>
    //   <div className="bg-light border ms-auto">Second Item</div>
    //   <div className="bg-light border">Third Item</div>
    // </Stack>
    // <Stack gap={2} className="col-md-5 mx-auto">
    //    <Button variant="secondary">Save changes</Button>
    //    <Button variant="outline-secondary">Cancel</Button>
    // </Stack>
    <Stack direction="horizontal" gap={3}>
       <Form.Control className="me-auto" placeholder="Add your item here..." />
       <Button variant="secondary">Submit</Button>
       <div className="vr" />
       <Button variant="outline-danger">Reset</Button>
    </Stack>
    );
}

export default Stacked;
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Menu() {
    const [show, setShow] = useState(true);
    
    return(
        <>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going</Alert.Heading>
          <p>
           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
           fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
             <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all
             </Button>
          </div>
        </Alert>
        {
         !show && <Button onClick={() => setShow(true)}>Show Alert</Button>
        }
        </>
    //   <div class="alert alert-danger alert-dismissible fade show" role="alert">
    //      <strong>Oh snap! You have a new menu</strong>
    //      <p>
    //        Change this and that and try again
    //      </p>
    //      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //        <span aria-hidden="true">&times;</span>
    //      </button>
    //   </div>
    )
}

export default Menu;
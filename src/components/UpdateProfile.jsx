import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Alert = (props) => {
  return (
    <Alert key="primary" variant="primary">
          This is a primary alert—check it out!
        </Alert>
  )
}

const UpdateProfile = () => {
  const registerAPI = "https://dummyjson.com/users";
  const navigate = useNavigate();
  const [user, setUser] = useState({})

  const submitRegisterForm = (event) => {
    event.preventDefault();
    const input = document.querySelector('#signupForm');
    const formElement = input;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);

    

    const btnPointer = document.querySelector("#register-btn");
    btnPointer.innerHTML = "Please wait..";
    btnPointer.setAttribute("disabled", true);
    axios
      .put(`${registerAPI}/${user.id}`, formDataJSON)
      .then((response) => {
        btnPointer.innerHTML = "Update profile...";
        btnPointer.removeAttribute("disabled");
        <Alert />
        

        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        btnPointer.innerHTML = "Updating";
        btnPointer.removeAttribute("disabled");
        alert("Oops! Some error occured.");
      });
  };

  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Container className="my-5">
            <h2 className="fw-normal mb-5 mx-15 text-center">
              Update Profile
            </h2>
            <Row className="justify-content-md-center">
              <Col md={{ span: 6 }}>
                <Form id="signupForm" onSubmit={submitRegisterForm} >
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor={"firstname"}>First name</FormLabel>
                    <input
                      type={"text"}
                      className="form-control"
                      id={"firstname"}
                      name="firstName"
                      value={user.firstName}
                      onChange={(e) => {setUser({firstName: e.target.value});}}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor={"lastname"}>Last name</FormLabel>
                    <input
                      type={"text"}
                      className="form-control"
                      id={"lastname"}
                      name="lastName"
                      value={user.lastName}
                      onChange={(e) => {setUser({lastName: e.target.value});}}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor={"email"}>E-mail</FormLabel>
                    <input
                      type={"email"}
                      className="form-control"
                      id={"email"}
                      name="email"
                      value={user.email}
                      onChange={(e) => {setUser({email: e.target.value});}}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor={"username"}>Username</FormLabel>
                    <input
                      type={"text"}
                      className="form-control"
                      id={"username"}
                      name="username"
                      value={user.username}
                      onChange={(e) => {setUser({username: e.target.value});}}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor={"password"}>Password</FormLabel>
                    <input
                      type={"password"}
                      className="form-control"
                      id={"password"}
                      name="password"
                      value={user.password}
                      onChange={(e) => {setUser({password: e.target.value});}}
                      required
                    />
                  </FormGroup>
                  
                  <Button
                    type="submit"
                    className="btn-primary mt-2"
                    id="register-btn"
                  >
                    Update Profile
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default UpdateProfile;

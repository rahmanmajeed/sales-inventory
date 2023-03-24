import axios from "axios";
import React from "react";
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

const Registration = () => {
  const registerAPI = "https://dummyjson.com/users/add";
  const navigate = useNavigate();

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
      .post(registerAPI, formDataJSON)
      .then((response) => {
        btnPointer.innerHTML = "Sign Up...";
        btnPointer.removeAttribute("disabled");
        const data = response.data;
        console.log(data)

        setTimeout(() => {
          navigate("/auth/login");
        }, 500);
      })
      .catch((error) => {
        btnPointer.innerHTML = "Login";
        btnPointer.removeAttribute("disabled");
        alert("Oops! Some error occured.");
      });
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Container className="my-5">
            <h2 className="fw-normal mb-5 mx-15 text-center">
              Sign up To Sales Inventory
            </h2>
            <Row className="justify-content-md-center">
              <Col md={{ span: 6 }}>
                <Form id="signupForm" onSubmit={submitRegisterForm}>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor={"firstname"}>First name</FormLabel>
                    <input
                      type={"text"}
                      className="form-control"
                      id={"firstname"}
                      name="firstName"
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
                      required
                    />
                  </FormGroup>
                  <Button
                    type="submit"
                    className="btn-primary mt-2"
                    id="register-btn"
                  >
                    Sign Up
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

export default Registration;

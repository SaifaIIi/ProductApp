import React from "react";
import { Form } from "react-bootstrap";

function SignUp(props) {
  const signUp = () => {
    props.history.push("/sign");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40rem",
          // backgroundColor: "blue",
        }}
      >
        <div
          style={{
            width: "30rem",
            // backgroundColor: "lightblue",
            border: "1px solid lightblue",
            padding: "3rem",
            borderRadius: "0.5rem",
          }}
        >
          <h3>New Account</h3>
          <Form className="container">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>

          {/* <label>UserName or Password:</label>
      <input type="text" />
      <br />
      <br />
      <label>Password:</label>
      <input type="text" />
      <br />
      <br /> */}
          <div className="logInsignupButton">
            <button className="btnn" onClick={signUp} variant="primary">
              Sign up
            </button>
            <button className="btnn" onClick={signUp} variant="primary">
              have an account ? click here
            </button>
          </div>
          <br />
        </div>
      </div>
{/* 
      <label>Name:</label>
      <input type="text" />
      <br />
      <label>email:</label>
      <input type="email" />
      <br />

      <label>password:</label>
      <input type="text" />
      <br />
      <label>confirm password:</label>
      <input type="text" />

      <button onClick={signUp}>Sign up</button>
      <br />
      <button onClick={signUp}>if already have an account</button> */}
    </div>
  );
}

export default SignUp;

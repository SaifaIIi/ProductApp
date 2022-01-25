import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

function Sign(props) {
  useEffect(() => {
    if (localStorage.getItem("tokan")) {
      props.history.push("/");
    } else {
      props.history.push("/sign");
    }
  }, []);
  const signIn = () => {
    localStorage.setItem("tokan", "imTokan");
    props.history.push("/home");
  };
  const signUp = () => {
    props.history.push("/signUp");
  };
  return (
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
        <h3>Login here</h3>

        <Form className="container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
          <button className="btnn" onClick={signIn} variant="primary">
            Login
          </button>
          <button className="btnn" onClick={signUp} variant="primary">
            Create new account
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Sign;

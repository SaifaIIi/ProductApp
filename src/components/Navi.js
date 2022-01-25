import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

function Navi(props) {
  // useEffect(() => {
  //   props.history.push("/home");
  // }, ["d"]);
  const logout = () => {
    localStorage.clear();
    // setTimeout(() => {
    props.history.push("/sign");
    // }, 1000);
  };
  return (
    <div
      className="navi"
      style={{ position: "fixed", top: 0, width: "90vw", zIndex: "5" }}
    >
      <>
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand className="brand">
                <Link
                  to="/home"
                  style={{
                    margin: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    className="logo"
                    src="https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/54776/preview_54776.jpg"
                    height="70rem"
                    width="140rem"
                  />
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link
                  to="/home"
                  style={{
                    margin: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/a"
                  style={{
                    margin: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Add Item
                </Link>
                <Link
                  to="/l"
                  style={{
                    margin: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  List
                </Link>
                <Link
                  to="/v"
                  style={{
                    margin: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Cart
                </Link>
                <button
                  className="btn"
                  onClick={logout}
                  variant="outline-dark"
                  style={{
                    color: "red",
                    position: "fixed",
                    right: "10rem",
                    height: "3.4rem",
                  }}
                >
                  <b>Logout</b>
                </button>
              </Nav>
            </Container>
          </Navbar>
        </>
      </>
    </div>
    // <div>
    //   <Navbar bg="light" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home">Food Task</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link>
    //             <Link to="/a">Add Item</Link>
    //           </Nav.Link>
    //           <Nav.Link>
    //             <Link to="/l">List</Link>
    //           </Nav.Link>
    //           <Nav.Link>
    //             <Link to="/v">View Cart</Link>
    //           </Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>

    //   <Route exact path="/a" component={AddItem} />
    //   <Route exact path="/v" component={ViewItem} />
    //   <Route exact path="/l" component={List} />
    // </div>
  );
}

export default withRouter(Navi);

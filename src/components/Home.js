import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navi from "./Navi";

function Home(props) {
  // settion storage example
  // const se = () => {
  //   sessionStorage.setItem("se", "oiukysn");
  //   const se = sessionStorage.getItem("se");
  //   console.log(se);

  // };
  // const log = () => {
  //   const se = sessionStorage.getItem("se");
  //   console.log(se);
  // };
  const list = useSelector((state) => state.addItem);
  // list.map((ele) => {
  //   console.log("home", ele);
  //   return null;
  // });

  return (
    <div>
      {localStorage.getItem("tokan") ? (
        <>
          <Navi />

          <div
            className="corosulsMain"
            style={{
              display: "flex",
              marginTop: "8rem",
              justifyContent: "center",
            }}
          >
            {list.length ? (
              <div style={{ width: "40rem", height: "28rem" }}>
                <Carousel>
                  {list.map((ele) => {
                    return (
                      <Carousel.Item>
                        <img
                          style={{ width: "40rem", height: "28rem" }}
                          // width="10rem"
                          // height="50rem"
                          className="d-block w-100"
                          src={`${ele.linkImage}`}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          {/* <h3>First slide label</h3> */}
                          <p style={{ backgroundColor: "gray" }}>
                            {ele.foodName}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            ) : (
              <button
                className="btns"
                onClick={() => {
                  props.history.push("/a");
                }}
              >
                click here to Add item
              </button>
            )}
          </div>

          <p>
            <b>Food Item</b>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            voluptates nesciunt earum, voluptatum fugiat veritatis similique
            libero sapiente modi nobis esse saepe, dignissimos ipsum, maiores
            natus voluptas impedit dolore nulla accusamus. Necessitatibus
            praesentium excepturi, quibusdam assumenda mollitia nulla. Esse ea
          </p>

          <div>
            <div
              style={{
                display: "flex",

                flexWrap: "wrap",
              }}
            >
              {list.map((ele) => {
                return (
                  <div style={{ margin: "0.5rem" }}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={ele.linkImage} />
                      <Card.Body>
                        <Card.Title>{ele.foodName}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>{props.history.push("/sign")}</>
      )}
      {/* <button onClick={se}>session</button>
      <button onClick={log}>log</button> */}
    </div>
  );
}

export default Home;

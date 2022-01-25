import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import Navi from "./Navi";

import { add } from "../reduxData/actions/index";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AddItem(props) {
  const [setisSame, setsetisSame] = useState();
  const myItem = useSelector((state) => {
    return state.addItem;
  });

  const dispatch = useDispatch();
  const [foodData, setfoodData] = useState({
    foodName: "",
    place: "",
    number: "",
    email: "",
    price: "",
    id: Math.random() * Math.random(),
    count: 1,
    linkImage:
      "https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg.webp",
  });

  const onchangeFoodName = (e) => {
    let flag = true;
    const copyFoodData = { ...foodData };
    copyFoodData.foodName = e.target.value;
    for (const iterator of myItem) {
      if (iterator.foodName === e.target.value) {
        console.log("same");
        flag = false;
        break;
      } else {
        // flag = true;
        flag = true;

        console.log("not same");
      }
    }

    if (flag) {
      setfoodData(copyFoodData);
      setsetisSame();
    } else {
      setsetisSame("Already exist");
      copyFoodData.foodName = "";
      setfoodData(copyFoodData);
    }
  };
  // const see = () => {
  //   console.log(foodData);
  // };
  const onchangePlace = (e) => {
    const copyFoodData = { ...foodData };
    copyFoodData.place = e.target.value;
    setfoodData(copyFoodData);
  };
  const onchangeNumber = (e) => {
    const copyFoodData = { ...foodData };
    copyFoodData.number = e.target.value;
    setfoodData(copyFoodData);
  };
  const onchangeEmail = (e) => {
    const copyFoodData = { ...foodData };
    copyFoodData.email = e.target.value;
    setfoodData(copyFoodData);
  };
  const onchangePrice = (e) => {
    const copyFoodData = { ...foodData };
    copyFoodData.price = e.target.value;
    setfoodData(copyFoodData);
  };
  const onchangeLink = (e) => {
    // https://
    if (e.target.value.includes("/")) {
      const copyFoodData = { ...foodData };
      copyFoodData.linkImage = e.target.value;
      setfoodData(copyFoodData);
    } else {
      const copyFoodData = { ...foodData };
      copyFoodData.linkImage =
        "https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg.webp";
      setfoodData(copyFoodData);
    }
  };
  const addItem = () => {
    console.log("add done");
    // console.log(foodData);
    // const copyFoodData = { ...foodData };
    // copyFoodData.id = Math.round(100000000 * Math.random() * Math.random());
    // setfoodData(copyFoodData);

    if (
      foodData.price &&
      foodData.email &&
      foodData.number &&
      foodData.place &&
      foodData.foodName &&
      foodData.id
    ) {
      console.log("dispatch");
      console.log("myItem", myItem);

      dispatch(add(foodData, myItem));
      props.history.push("/l");
    } else {
      console.log("empty");
      alert("Fill the data first");
    }
  };
  // const checkSame = () => {
  //   let flag = true;
  //   for (const iterator of myItem) {
  //     if (iterator.foodName === foodData.foodName) {
  //       console.log("same");
  //       flag = false;
  //       break;
  //     } else {
  //       flag = true;
  //       console.log("not same");
  //     }
  //   }
  //   if (flag) {
  //   } else {
  //     alert("same data");
  //   }
  // };
  return (
    <div style={{ width: "90vw" }}>
      {localStorage.getItem("tokan") ? (
        <>
          <Navi />
          <p
            style={{
              marginTop: "6rem",
              textAlign: "left",
              marginLeft: "8%",
            }}
          >
            <Link to="/home">Delivery India</Link>/
            <Link
              to="/a"
              style={
                {
                  // margin: "1rem",
                  // color: "white",
                  // textDecoration: "none",
                }
              }
            >
              Add Item
            </Link>
            <h4
              style={{
                color: "rgb(75, 74, 74)",
              }}
            >
              Add Items
            </h4>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // position: "relative",
              // top: " 5rem",
              // marginTop: "6rem",
            }}
          >
            <div
              style={{
                width: "60vw",
              }}
            >
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Name:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      onChange={onchangeFoodName}
                      type="name"
                      placeholder="name of food"
                    />
                    <p style={{ color: "red" }}>{setisSame}</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Hotel Name:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      onChange={onchangePlace}
                      type="Place"
                      placeholder="Hotel name"
                    />
                    <p></p>
                  </Col>
                </Form.Group>{" "}
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Phone Number:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      onChange={onchangeNumber}
                      type="number"
                      placeholder="Phone Number"
                    />
                    <p></p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Email:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      onChange={onchangeEmail}
                      type="email"
                      placeholder="Email id"
                    />
                    <p></p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Price:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      onChange={onchangePrice}
                      type="number"
                      placeholder="price"
                    />
                    <p></p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Image Link:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      onChange={onchangeLink}
                      type="text"
                      placeholder="image link (optional)"
                    />
                    <p></p>
                  </Col>
                </Form.Group>
              </Form>
              <Button onClick={addItem}>Add</Button>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>{props.history.push("/sign")}</>
      )}
    </div>
  );
}

export default AddItem;

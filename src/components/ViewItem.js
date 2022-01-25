import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  remove,
  details,
  addPluse,
  removeMines,
  removeAll,
} from "../reduxData/actions/index";
import DetailsItem from "./DetailsItem";
import Footer from "./Footer";
import Navi from "./Navi";

function ViewItem(props) {
  let myItem = useSelector((state) => state.cartAdd);
  myItem = myItem.filter((ele, ind, self) => {
    return (
      ind ===
      self.findIndex((t) => {
        return t.foodName === ele.foodName;
      })
    );
  });

  console.log(
    "Sorted",
    myItem.sort((a, b) => {
      return a.id - b.id;
    })
  );
  const dispatch = useDispatch();
  let totalPrice = 0;
  // model
  const [id, setid] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log(id);
    dispatch(remove(myItem, id));
    setShow(false);
    setTimeout(() => {
      alert("item deleted successfully");
    }, 200);
  };
  const handleShow = (ids) => {
    setid(ids);
    setShow(true);
  };
  const cancle = () => {
    setShow(false);
  };

  return (
    <div>
      {localStorage.getItem("tokan") ? (
        <>
          <Navi />

          {/* {myItem.length} */}

          <p
            style={{
              marginTop: "6rem",
              textAlign: "left",
              marginLeft: "8%",
            }}
          >
            <Link to="/home">Delivery India</Link>/
            <Link
              to="/v"
              style={
                {
                  // margin: "1rem",
                  // color: "white",
                  // textDecoration: "none",
                }
              }
            >
              Cart
            </Link>
            <h4
              style={{
                color: "rgb(75, 74, 74)",
              }}
            >
              Cart
            </h4>
          </p>

          <div className="listAndDetails">
            <div className="list">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Food </th>
                    <th>Hotel </th>
                    <th>Price</th>
                    <th>Add/Remove</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myItem.map((ele, index) => {
                    totalPrice = totalPrice + ele.count * parseInt(ele.price);
                    console.log(totalPrice);

                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <b
                            onMouseOver={() => {
                              dispatch(
                                details(ele, parseInt(ele.price) * ele.count)
                              );
                            }}
                          >
                            {ele.foodName}
                          </b>
                        </td>
                        <td>{ele.place}</td>
                        <td style={{ width: "10rem" }}>
                          {ele.price} X ({ele.count}) =
                          {ele.count * parseInt(ele.price)}
                        </td>

                        <td>
                          <button className="btns Add">
                            <b
                              onClick={() => {
                                dispatch(
                                  addPluse(
                                    {
                                      foodName: ele.foodName,
                                      count: 1,
                                    },
                                    myItem
                                  )
                                );
                              }}
                            >
                              ➕
                            </b>
                          </button>
                          <button className="btns Remove">
                            <b
                              onClick={() => {
                                dispatch(
                                  ele.count === 1
                                    ? handleShow(ele.id)
                                    : removeMines(
                                        {
                                          foodName: ele.foodName,
                                          count: 1,
                                          totalCount: ele.count,
                                        },
                                        myItem,
                                        ele.id
                                      )
                                );
                              }}
                            >
                              ➖
                            </b>
                          </button>
                        </td>
                        <td>
                          <button className="btns">
                            <b
                              onClick={() => {
                                handleShow(ele.id);
                              }}
                            >
                              Delete
                            </b>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="details">
              <DetailsItem />
            </div>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btns">
              <b
                onClick={() => {
                  dispatch(removeAll());
                }}
              >
                Delete All
              </b>
            </button>

            <h4>Total Price </h4>
            <h4>: {totalPrice}</h4>
          </div>
          {/* modesl */}
          <>
            {/* <Button variant="primary" onClick={handleShow}>
              Launch static backdrop modal
            </Button> */}

            <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are u sure want Delete this item.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={cancle}>
                  Cancle
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
          <Footer />
        </>
      ) : (
        <>{props.history.push("/sign")}</>
      )}
    </div>
  );
}

export default ViewItem;

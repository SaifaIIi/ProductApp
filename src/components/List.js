import React from "react";
import { Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart } from "../reduxData/actions";
import Footer from "./Footer";
import Navi from "./Navi";

function List(props) {
  const list = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  return (
    <div>
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
              to="/l"
              style={
                {
                  // margin: "1rem",
                  // color: "white",
                  // textDecoration: "none",
                }
              }
            >
              List
            </Link>
            <h4
              style={{
                color: "rgb(75, 74, 74)",
              }}
            >
              {" "}
              List{" "}
            </h4>
          </p>

          <div
            style={{
              display: "flex",
              width: "90vw",
              justifyContent: " space-evenly",
              // position: "relative",
              // marginTop: "6rem",
              // top: " 5rem",
            }}
          >
            <div style={{ width: "60vw" }}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Food Name </th>
                    <th>Add to Cart</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((ele, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td> {ele.foodName}</td>
                        <td>
                          {" "}
                          <button
                            className="btn"
                            onClick={() => {
                              dispatch(addToCart(ele));
                              alert("Product added Successfully");
                            }}
                          >
                            ✅
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            {/* <ol>
              {list.map((ele, index) => {
                return (
                  <li key={index}>
                    {ele.foodName}
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch(addToCart(ele));
                        alert("Product added Successfully");
                      }}
                    >
                      ✅
                    </button>
                  </li>
                );
              })}
            </ol> */}
          </div>
          <Footer />
        </>
      ) : (
        <>{props.history.push("/sign")}</>
      )}
    </div>
  );
}

export default List;

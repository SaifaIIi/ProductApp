import React from "react";
import { useSelector } from "react-redux";

function DetailsItem(props) {
  const myDetails = useSelector((state) => {
    return state.details;
  });
  console.log(myDetails);
  return (
    <div  >
      {localStorage.getItem("tokan") ? (
        <>
          <h3>
            <b>Details</b>
          </h3>
          <b>Name:</b> <b>{myDetails.foodName}</b>
          <hr />
          <b>Place: </b>
          <b>{myDetails.place}</b>
          <hr />
          <b>Phone Number:</b>
          <b>{myDetails.number}</b>
          <hr />
          <b>Email: </b>
          <b>{myDetails.email}</b>
          <hr />
          <b>Price:</b>
          <b>{myDetails.price}</b>
        </>
      ) : (
        <>{props.history.push("/sign")}</>
      )}
    </div>
  );
}

export default DetailsItem;

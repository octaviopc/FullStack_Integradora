import React from "react";

import classes from "./Movie.module.css";

const User = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.userType}</h3>
      <h3>{props.email}</h3>
      <h3>{props.phone}</h3>
    </li>
  );
};

export default User;

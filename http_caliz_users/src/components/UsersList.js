import React from "react";
import User from "./User";

import classes from "./MoviesList.module.css";

const UserList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.data.map((data) => (
        <User
          key={data.id}
          Name={data.Name}
          userType={data.userType}
          email={data.email}
          phone={data.phone}
        />
      ))}
    </ul>
  );
};

export default UserList;

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import RaisedButton from "@material-ui/core/RaisedButton";

const handleClick = () => {
  console.log("clicked");
};

const NavItem = props => {
  return (
    <Button href="#second-para" startIcon={<i className={props.icon}></i>}>
      <div style={{ flex: 1 }}>
        <span>{props.name}</span>
      </div>
    </Button>
    //</a>
  );
};

export default NavItem;

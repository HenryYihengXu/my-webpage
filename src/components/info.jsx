import React from "react";
import Typography from "@material-ui/core/Typography";

const address = " 1402 Regent St, Apt 219A, Madison, WI 53711";
const title =
  "Senior Computer Science Student at University of Wisconsin-Madison";
const emailAddress = " xu443@wisc.edu ";
const phoneNumber = " 608-504-0524";

const Info = () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h4>
          <b>Yiheng Xu</b>
        </h4>
        <h6>{title}</h6>
        <h6>
          <i class="fas fa-map-marker-alt"></i>
          {address}
        </h6>
        <h6>
          <i class="far fa-envelope"></i>
          {emailAddress}&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-mobile-alt"></i>
          {phoneNumber}
        </h6>
        <br />
      </div>
      <Typography paragraph>Welcome to my personal webpage!!!</Typography>
      <a id="education" />
      <Typography paragraph>
        My name is Yiheng Xu. You can also call me Henry. I'm currently a senior
        computer science major student at University of Wisconsin-Madison. In
        this webpage, you can get the basic information about me. You can also
        get connected to me via social medias by clicking the buttons. If you
        would like to know more about my hobbies, my philosophy, and my life, go
        to my tyuni webpage (in the future, it's under construction lol). Feel
        free to walk around and enjoy your time here!
      </Typography>{" "}
    </React.Fragment>
  );
};

export default Info;

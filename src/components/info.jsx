import React from "react";
import Typography from "@material-ui/core/Typography";

const introductionEnglish = {
  name: "Yiheng Xu",
  address: " 1402 Regent St, Apt 219A, Madison, WI 53711",
  title: "Senior Computer Science Student at University of Wisconsin-Madison",
  emailAddress: " xu443@wisc.edu ",
  phoneNumber: " 608-504-0524",
  welcome: "Welcome to my personal webpage!!!",
  intro: (
    <Typography paragraph>
      My name is Yiheng Xu. You can also call me Henry. I'm currently a senior
      computer science major student at University of Wisconsin-Madison. In this
      webpage, you can get the basic information about me. You can also get
      connected to me via social medias by clicking the buttons. If you would
      like to know more about my hobbies, my philosophy, and my life, go to my
      "chunibyo" webpage (in the future, it's under construction lol).{" "}
      <a id="education" />
      Feel free to walk around and enjoy your time here!
    </Typography>
  )
};

const introductionChinese = {};

const Info = props => {
  let introduction;
  if (props.language === "Chinese") {
    introduction = introductionChinese;
  } else {
    introduction = introductionEnglish;
  }
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h4>
          <b>{introduction.name}</b>
        </h4>
        <h6>{introduction.title}</h6>
        <h6>
          <i class="fas fa-map-marker-alt"></i>
          {introduction.address}
        </h6>
        <h6>
          <i class="far fa-envelope"></i>
          {introduction.emailAddress}&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-mobile-alt"></i>
          {introduction.phoneNumber}
        </h6>
        <br />
      </div>
      <Typography paragraph>{introduction.welcome}</Typography>
      {introduction.intro}
    </React.Fragment>
  );
};

export default Info;

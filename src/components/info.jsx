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
      "chunibyo" webpage (in the future, it's currently under construction lol)!{" "}
      <a id="education" />
      Feel free to walk around and enjoy your time here!
    </Typography>
  )
};

const introductionChinese = {
  name: "徐一恒",
  address: " 1402 Regent St, Apt 219A, Madison, WI 53711",
  title: "美国威斯康星大学麦迪逊分校计算机科学专业大四学生",
  emailAddress: " xu443@wisc.edu ",
  phoneNumber: " 608-504-0524",
  welcome: "欢迎来到我的个人主页！！！",
  intro: (
    <Typography paragraph>
      我是徐一恒，目前就读于美国威斯康星大学麦迪逊分校，是一名计算机专业的大四学生。在我的个人主页，您可以了解我的基本信息，你也可以通过社交媒体联系我，只需点击相应的链接即可。如果您想了解跟多关于我的兴趣爱好、我的思想、我的生活，欢迎访问我的“文艺青年”个人主页（然而目前还在设计当中hhhhhhhh）！{" "}
      <a id="education" />
      请随意浏览，祝您看得愉快！
    </Typography>
  )
};

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

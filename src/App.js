import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import SideBar from "./components/sideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PageviewIcon from "@material-ui/icons/Pageview";
import PublicIcon from "@material-ui/icons/Public";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GetAppIcon from "@material-ui/icons/GetApp";
import Resume from "./components/resume";
import TopBar from "./components/topBar";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import QRCodeDialog from "./components/QRCodeDialog";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar
});

const sideBarButtons = language => [
  {
    icon: <AccountCircleIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "基本信息" : "Info",
    href: "#info"
  },
  {
    icon: <SchoolIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "教育经历" : "Education",
    href: "#education"
  },
  {
    icon: <WorkIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "工作经历" : "Work",
    href: "#work"
  },
  {
    icon: <PageviewIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "科研经历" : "Research",
    href: "#research"
  },
  {
    icon: <DesktopMacIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "项目经历" : "Project",
    href: "#project"
  },
  {
    icon: <PublicIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "社会活动" : "Activity",
    href: "#activity"
  },
  {
    icon: <GetAppIcon style={{ color: "#FFFFFF" }} />,
    name: language === "Chinese" ? "简历下载" : "CV",
    href: "CV.Xu.Yiheng.pdf",
    download: true
  }
];

class App extends Component {
  state = {
    language: "English",
    QQOpen: false,
    weChatOpen: false
  };

  handleWeChatClick = () => {
    //console.log("weChat clicked");
    this.setState({ weChatOpen: true });
  };

  handleQQClick = () => {
    //console.log("QQ clicked");
    this.setState({ QQOpen: true });
  };

  handleWeChatClose = () => {
    this.setState({ weChatOpen: false });
  };

  handleQQClose = () => {
    this.setState({ QQOpen: false });
  };

  handleLanguageChange = () => {
    if (this.state.language === "English") {
      this.setState({ language: "Chinese" });
    } else {
      this.setState({ language: "English" });
    }
  };

  topBarButtons = [
    {
      icon: <i class="fas fa-envelope"></i>,
      link: "mailto:yiheng.xu.henry.1997@gmail.com"
    },
    {
      icon: <i class="fab fa-github"></i>,
      link: "https://github.com/HenryYihengXu/"
    },
    {
      icon: <i class="fab fa-facebook"></i>,
      link: "https://www.facebook.com/profile.php?id=100022096549292"
    },
    {
      icon: <i class="fab fa-linkedin"></i>,
      link: "https://www.linkedin.com/in/henry-xu-390636174/"
    },
    {
      icon: <i class="fab fa-weixin"></i>,
      link: null,
      onClick: this.handleWeChatClick
    },
    {
      icon: <i class="fab fa-qq"></i>,
      link: null,
      onClick: this.handleQQClick
    }
  ];

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <QRCodeDialog
          open={this.state.weChatOpen}
          onClose={this.handleWeChatClose}
          img={require("./images/weChat.JPG")}
        />
        <QRCodeDialog
          open={this.state.QQOpen}
          onClose={this.handleQQClose}
          img={require("./images/QQ.JPG")}
        />
        <CssBaseline />

        <TopBar
          buttons={this.topBarButtons}
          language={this.state.language}
          onChange={this.handleLanguageChange}
        />

        <SideBar
          buttons={sideBarButtons(this.state.language)}
          language={this.state.language}
        >
          <img
            src={require("./images/portrait.jpg")}
            style={{
              width: 220,
              height: 220,
              padding: 10
            }}
          />
        </SideBar>
        <Resume language={this.state.language} />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);

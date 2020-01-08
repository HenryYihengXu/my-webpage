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

const sideBarButtons = [
  {
    icon: <AccountCircleIcon style={{ color: "#FFFFFF" }} />,
    name: "Info",
    href: "#info"
  },
  {
    icon: <SchoolIcon style={{ color: "#FFFFFF" }} />,
    name: "Education",
    href: "#education"
  },
  {
    icon: <WorkIcon style={{ color: "#FFFFFF" }} />,
    name: "Work",
    href: "#work"
  },
  {
    icon: <PageviewIcon style={{ color: "#FFFFFF" }} />,
    name: "Research",
    href: "#research"
  },
  {
    icon: <DesktopMacIcon style={{ color: "#FFFFFF" }} />,
    name: "Project",
    href: "#project"
  },
  {
    icon: <PublicIcon style={{ color: "#FFFFFF" }} />,
    name: "Activity",
    href: "#activity"
  },
  {
    icon: <GetAppIcon style={{ color: "#FFFFFF" }} />,
    name: "CV",
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

        <TopBar buttons={this.topBarButtons} />

        <SideBar buttons={sideBarButtons} />

        <Resume />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);

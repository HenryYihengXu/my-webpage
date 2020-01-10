import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "./myExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import { Divider } from "@material-ui/core";

const activitiesEnglish = [
  {
    title: "Volunteer",
    organization: "Student Today Lead Forever, UW-Madison",
    time: "03/2019",
    summary:
      "Took part in a volunteering trip that did various volunteer activities in different cities",
    achievements: [
      "Assisted an environmental organization to clean up invasive species in Louisville, Kentucky",
      "Helped a local special children’s school take care of the courtyard in Asheville, North Carolina",
      "Arranged to build an oyster shell reef for a local environmental organization in Charleston, South Carolina"
    ]
  },
  {
    title: "Vice President",
    organization: "Debate Team of School of Computer Science, WHU",
    time: "09/2017–06/2018",
    summary:
      "Led the team to play competitions, and do all logistics to administrate the team",
    achievements: [
      "Trained new debaters to familiarize debate and lead team to participate in competitions",
      "First Prize in 2017 Freshmen Debate Competition of Wuhan University; Awarded the Best Debater in many competitions",
      "Organized the school E-Cup Debate Competition, served as the judge, the host, and the timer in multiple competitions"
    ]
  },
  {
    title: "Organizer of Raising Funding",
    organization: "Student Union of Computer Science School, WHU",
    time: "09/2016",
    summary:
      "Contact and coordinate with organizations out of school to get sponsorhip",
    achievements: [
      "Raised sponsorship for the freshman welcome party and got 2000 yuan sponsorship from a well-known Internet Cafe",
      "Took charge of the sponsorship planning and contract writing, including advertising programs for sponsors",
      "Contacted Lenovo, Apple, and the Internet Cafes with the written sponsorship plan and contract"
    ]
  }
];

const activitiesChinese = [
  {
    title: "志愿者",
    organization: "Student Today Lead Forever, 美国威斯康星大学麦迪逊分校",
    time: "03/2019",
    summary: "参加了该志愿者组织的志愿服务之旅，到多个不同城市做了志愿者活动",
    achievements: [
      "在Louisville, Kentucky帮助当地环境组织清理外来入侵植物",
      "在Asheville, North Carolina帮助一所特殊儿童学校布置庭院",
      "在Charleston, South Carolina帮助环境组织建生蚝壳水坝，起到过滤净化河水的作用"
    ]
  },
  {
    title: "副队长",
    organization: "武汉大学计算机学院辩论队",
    time: "09/2017–06/2018",
    summary: "带队参加比赛，训练新人，管理队中事务",
    achievements: [
      "训练新辩手，使他们熟悉辩论技巧，带队参加校内比赛",
      "2017年武汉大学新生辩论赛团队第一名，多次获得最佳辩手",
      "组织E鸣杯辩论赛，担任主持、评委，参与出辩题"
    ]
  },
  {
    title: "拉赞助活动的组织者",
    organization: "武汉大学计算机学院学生会外联部",
    time: "09/2016",
    summary: "联系并和校外组织协调以获得赞助",
    achievements: [
      "为迎新晚会从一家网咖拉到2000元的赞助",
      "负责拉赞助的策划和合同撰写",
      "联系了联想、苹果、以及多家网咖，与他们讨论赞助方案"
    ]
  }
];

const Activity = props => {
  let activities;
  if (props.language === "Chinese") {
    activities = activitiesChinese;
  } else {
    activities = activitiesEnglish;
  }
  return (
    <React.Fragment>
      {activities.map((activity, index) => (
        <React.Fragment>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div
                style={{
                  flex: 1,
                  background: "#FFFFFF"
                }}
              >
                <Grid
                  container
                  style={{
                    background: "#FFFFFF"
                  }}
                >
                  <Grid item xs={9}>
                    <b>{activity.title}</b>
                    <br />
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "right" }}>
                    <b>{activity.time}</b>
                    <br />
                  </Grid>
                </Grid>
                {activity.organization}
                <br />
                {/* {activity.summary ? (
                  <h12>
                    <font style={{ "font-family": "times" }}>
                      {activity.summary}
                    </font>
                  </h12>
                ) : null} */}
                <h12>
                  <font style={{ "font-family": "times" }}>
                    {activity.summary}
                  </font>
                </h12>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                //background: "#FFFF00",
                padding: 0,
                margin: 0
              }}
            >
              <ul>
                {activity.achievements.map((achievement, index2) => (
                  <li key={index2}>
                    <font style={{ "font-family": "times" }}>
                      {achievement}
                    </font>
                  </li>
                ))}
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          {/* <Divider style={{ background: "#FFFFFF", height: 8 }} /> */}
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Activity;

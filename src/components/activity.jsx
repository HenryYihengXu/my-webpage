import React from "react";
import Grid from "@material-ui/core/Grid";

const activities = [
  {
    title: "Volunteer, Student Today Lead Forever, UW-Madison ",
    time: "03/2019",
    summary:
      "Took part in a volunteering trip that did various volunteer activities in different citie",
    achievements: [
      "Assisted an environmental organization to clean up invasive species in Louisville, Kentucky",
      "Helped a local special children’s school take care of the courtyard in Asheville, North Carolina",
      "Arranged to build an oyster shell reef for a local environmental organization in Charleston, South Carolina"
    ]
  },
  {
    title: "Vice President, Debate Team of School of Computer Science, WHU",
    time: "09/2017-06/2018",
    achievements: [
      "Trained new debaters to familiarize debate and lead team to participate in competitions",
      "First Prize in 2017 Freshmen Debate Competition of Wuhan University; Awarded the Best Debater in many competitions",
      "Organized the school E-Cup Debate Competition, served as the judge, the host, and the timer in multiple competitions"
    ]
  },
  {
    title: "Organizer, Student Union of Computer Science School, WHU",
    time: "09/2016",
    achievements: [
      "Raised sponsorship for the freshman welcome party and got 2000 yuan sponsorship from a well-known Internet Cafe",
      "Took charge of the sponsorship planning and contract writing, including advertising programs for sponsors",
      "Contacted Lenovo, Apple, and the Internet Cafes with the written sponsorship plan and contract"
    ]
  }
];

const Activity = () => {
  return (
    <React.Fragment>
      {activities.map((activity, index) => (
        <React.Fragment>
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
          {activity.summary ? (
            <h12>
              <font style={{ "font-family": "times" }}>{activity.summary}</font>
            </h12>
          ) : null}
          <ul>
            {activity.achievements.map((achievement, index2) => (
              <li key={index2}>
                <font style={{ "font-family": "times" }}>{achievement}</font>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Activity;

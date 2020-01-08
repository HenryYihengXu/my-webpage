import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const educationNum = 3;

const educations = [
  {
    school: "School of Letter & Science, UW-Madison, US",
    time: "09/2018–05/2020",
    major: "Computer Science. Major 2: Applied Math",
    GPA: "GPA: 4.0/4.0"
  },
  {
    school: "School of Computer Science, Wuhan University, CN",
    time: "09/2016–07/2018",
    major: "Major: Computer Science",
    GPA: "GPA: 3.97/4.0",
    scholarship: "National Scholarship, Wuhan University",
    scholarshipTime: "10/2017"
  },
  {
    school: "BGA Program, UC-Berkeley Extension, US",
    time: "08/2017–12/2017",
    major: "Study Field: Computer Science",
    GPA: "GPA: 4.0/4.0"
  }
];

const Education = props => {
  return (
    <Grid
      container
      style={{
        background: "#FFFFFF"
      }}
    >
      <Grid item xs={9}>
        {educations.map(education => (
          <div>
            <b>{education.school}</b>
            <br />
            {education.scholarship ? (
              <React.Fragment>
                <h12>{education.major}</h12>
                <br />
                <p>{education.scholarship}</p>
              </React.Fragment>
            ) : (
              <p>{education.major}</p>
            )}
          </div>
        ))}
      </Grid>
      <Grid item xs={3} style={{ textAlign: "right" }}>
        {educations.map((education, index) => (
          <div>
            {index === educationNum - 1 ? <a id="work" /> : null}
            <b>{education.time}</b>
            <br />
            {education.scholarship ? (
              <React.Fragment>
                <h12>{education.GPA}</h12>
                <br />
                <p>{education.scholarshipTime}</p>
              </React.Fragment>
            ) : (
              <p>{education.GPA}</p>
            )}
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default Education;

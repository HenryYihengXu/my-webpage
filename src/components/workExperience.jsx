import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "./myExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";

const experienceNum = 2;

const workExperiences = [
  {
    title: "Algorithm Engineering Intern",
    time: "06/2019–09/2019",
    organization:
      "Institute of Computing Technology, Chinese Academy of Science, Beijing, China",
    summary: "Development of a high performance real FFT library on x86 CPUs",
    achievements: [
      "Optimized existing assembly code based on x86 architecture by revising memory allocation, address computation, and cache usage, and implemented the core “split” function for both single and double precision floating point",
      "Found out the reason for low performance of the code, and reformed the code using SIMD, loop unrolling, as well as multi-thread programming",
      "Designed a faster REDFT00 sub-transform algorithm of R2R transform that reduced computational complexity, and wrote a mathematical proof of it",
      "Realized the algorithm in our library, by which the performance on large scale of data exceeded the corresponding performance of MKL and FFTW"
    ]
  },
  {
    title: "CS 577 (Introduction to Algorithm) Peer Mentor",
    time: "01/2019–05/2019",
    organization: "Computer Science Department, UW-Madison, Madison, WI, US",
    summary:
      "Assist professor to provide more learning resources and helps to the class",
    achievements: [
      "Led weekly review sessions through lecture materials and guided student through teaching practice problems",
      "Advised students with their specific questions during individual help sessions and provided feed-backs",
      "Designed practice problems and answered questions on Piazza"
    ]
  }
];

const WorkExperience = () => {
  return (
    <React.Fragment>
      {workExperiences.map((workExperience, index) => (
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
                    <b>{workExperience.title}</b>
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "right" }}>
                    <b>{workExperience.time}</b>
                  </Grid>
                </Grid>
                <h12>{workExperience.organization}</h12>
                {index === experienceNum - 1 ? <a id="research" /> : null}
                <br />
                {workExperience.summary ? (
                  <React.Fragment>
                    <h12>
                      <font style={{ "font-family": "times" }}>
                        {workExperience.summary}
                      </font>
                    </h12>
                    <br />
                  </React.Fragment>
                ) : null}
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                //background: "#FFFF00",
                padding: 0,
                margin: 0
              }}
            >
              <ul
              //style ={{background:"#FFFF00"}}
              >
                {workExperience.achievements.map((achievement, index2) => (
                  <li key={index2}>
                    {/* {index === experienceNum - 2 && index2 === 3 ? (
                      <a id="research" />
                    ) : null} */}
                    <font style={{ "font-family": "times" }}>
                      {achievement}
                    </font>
                  </li>
                ))}
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          {/* <Divider style={{background:"#FFFFFF", height:8}}/> */}
          <br />
          {/* {index === experienceNum - 2 ? <a id="research" /> : null} */}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default WorkExperience;

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "./myExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const experienceNum = 3;

const researchExperiences = [
  {
    title: "Directed Study, UW-Madison",
    time: "09/2019–Present",
    topic: "Accelerating Deep Learning Inference Using GPU",
    supervisor: "Shivaram Venkataraman",
    goal:
      "To realize new machine learning method on GPU and use parallel programming to best support the method",
    achievements: [
      "Applied parallel programming to DNN with CUDA, and implemented forward pass and back propagation for fully connected DNNs on GPU",
      "Analyzed concurrent execution by changing the size and the weight of the model. Did research on the performance and concurrency impact from varying the number of thread blocks and kernels",
      "Tested running multiple GPU kernels with different sizes in CIFAR-10 training. Assigned various grid sizes to each kernel and found the best grid size combination that leads to the shortest running time."
    ]
  },
  {
    title: "Programming Assistant, madPL Lab, UW-Madison",
    time: "09/2019–Present",
    topic: "RFixer Web Application Development",
    supervisor: "Loris D’Antoni",
    goal:
      "To build a web application for RFixer that provides a friendly UI and a back-end linked to the program to fix regex",
    achievements: [
      "Learned web programming and regex fixing mechanism",
      "Designed a clean UI that collects user’s input and gives active interaction using React and JavaScript ES6",
      "Built a back-end server using Spring and Maven to talk to the program to fix the regex",
      "Optimized the application so that it could provide some matching information before running the whole server program"
    ]
  },
  {
    title: "Directed Study, System Security Lab, Wuhan University",
    time: "03/2018–07/2018",
    topic: "Research on Voice Command System Security",
    supervisor: "Qian Wang",
    goal:
      "To create voice command attack that cannot be detected by human ears but can be received by machines",
    achievements: [
      "Did research on current voice command attacking and defending mechanisms, and involved in the synthesis of current methods to create more effective attacking approach",
      "Engaged in the development of human-undetectable voice command attack. Mainly responsible for collecting data, unit tests, and performance analysis"
    ]
  }
];

const ResearchExperience = () => {
  return (
    <React.Fragment>
      {researchExperiences.map((researchExperience, index) => (
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
                  <Grid item xs={8}>
                    <b>{researchExperience.title}</b>
                    <br />
                    <b>{researchExperience.topic}</b>
                    <br />
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "right" }}>
                    <b>{researchExperience.time}</b>
                    <br />
                    <b>Supervisor:&nbsp;</b>
                    <h12>{researchExperience.supervisor}</h12>
                    <br />
                  </Grid>
                </Grid>
                <b>Goal:&nbsp;</b>
                <h12>{researchExperience.goal}</h12>
                <br />
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
                {researchExperience.achievements.map((achievement, index2) => (
                  <li key={index2}>
                    {index === experienceNum - 1 && index2 === 1 ? (
                      <a id="activity" />
                    ) : null}
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

export default ResearchExperience;

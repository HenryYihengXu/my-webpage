import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "./myExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import { Divider } from "@material-ui/core";

const experienceNum = 7;

const projects = [
  {
    name: "Personal Website",
    time: "01/2020-Present",
    summary:
      "A dynamic website that contains my information, main works and achievements, and will support functions of social media like account registration, posts, comments, etc. in the future",
    achievements: ["Designed a clean, responsive front-end using React.js"]
  },
  {
    name: "Virtual Network Development",
    time: "09/2019-12/2019",
    event: "CS 640 Introduction to Computer Networks, UW-Madison",
    summary:
      "Developed a virtual network with virtual switch and router where various protocols implemented",
    achievements: [
      "Built an application that measures the latency and throughput of the network by socket programming",
      "Performed MAC learning on the virtual switch, and enabled switches and routers to handle and forward packets",
      "Implemented ICMP, ARP, and RIP protocols on the virtual router so that the router could build ARP cache and routing table automatically, and send error message correctly",
      "Developed SDN that dynamically configured the routing, and balanced the load in the network",
      "Built an DNS server that recursively resolves the name"
    ]
  },
  {
    name: "XV6 Operating System Optimization",
    time: "01/2019–05/2019",
    event: "CS 537 Introduction to Operating System, UW-Madison",
    summary:
      "Optimized xv6 (a simple operating system for teaching purpose) to a more powerful operating system",
    achievements: [
      "Reconstructed the process scheduler from FIFO to Round-Robin and rearranged user process virtual memory space",
      "Supported sharing memory between different processes and the system call to create new shared pages",
      "Enabled kernel thread in the operating system",
      "Added a file system checker and fixer that could catch and fix inconsistency in file system"
    ]
  },
  {
    name: "The Compiler of the Carrot Language",
    time: "01/2019–05/2019",
    event:
      "CS 536 Introduction to Programming Languages and Compilers, UW-Madison",
    summary:
      "Developed a compiler of the language that could catch all kinds of errors, and compiled the code to executable assembly code",
    achievements: [
      "Created a scanner to transform plain text to tokens, and established a parser that parsed tokens into a parse tree",
      "Carried out name analysis to catch name errors like undefined id, call to a non-function, invalid struct access, etc.",
      "Implemented type analysis to catch type errors such as type mismatch, wrong return type, parameter mismatch, etc.",
      "Performed code generation that compiles Carrot to runnable assembly code"
    ]
  },
  {
    name:
      "Data Analysis on Winning Probability Prediction and Winning Cause of the Game ",
    time: "11/2018",
    event: '"MadHacks" Hackathon Programming Competition, UW-Madison',
    summary:
      "Produced an application that predicted the likelihood for a player to win based on his gaming style",
    achievements: [
      "Used Excel and Matlab skills to analyze millions of player records",
      "Performed PCA on the huge feature space to do dimension reduction",
      "Trained a regression model with the processed data, and then made predictions by using the trained model"
    ]
  },
  {
    name: "Chatbot",
    time: "10/2018",
    event: "CS 540 Introduction to Artificial Intelligence, UW-Madison",
    summary: "Created a simple chat robot based on trigram language model",
    achievements: [
      "Established a trigram language model, calculated the multinomial distribution of word type by corpus",
      "Proposed the beginning of a sentence, and generated a complete sentence randomly with the model",
      "Created a chatbot driver, used a simple rule to form the beginning of the sentence according to users’ previous chat content, completed the sentence, returned to the users, and realized the function of chatting with each other"
    ]
  },
  {
    name: "Qirkat --- A Board Game",
    time: "10/2017–11/2017",
    event: "CS 61B Data Structure, UC-Berkeley",
    summary:
      "Developed an app by which player could play the game on computers with another player as well as play against a game AI",
    achievements: [
      "Developed the app that correctly simulated the Qirkat, and behaved properly according to the rules of the game",
      "Created a game AI that was fairly smart by using max-min algorithm and alpha-beta pruning algorithm",
      "Implemented a graphic user interface"
    ]
  }
];

const Project = () => {
  return (
    <React.Fragment>
      {projects.map((project, index) => (
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
                    flex: 1,
                    background: "#FFFFFF"
                  }}
                >
                  <Grid item xs={9}>
                    <b>{project.name}</b>
                    <br />
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "right" }}>
                    <b>{project.time}</b>
                    <br />
                  </Grid>
                </Grid>
                {project.event ? (
                  <React.Fragment>
                    {project.event}
                    {index === experienceNum - 1 ? <a id="activity" /> : null}

                    <br />
                  </React.Fragment>
                ) : null}
                <h12>
                  <font style={{ "font-family": "times" }}>
                    {project.summary}
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
              <ul style={{ margin: 0 }}>
                {project.achievements.map((achievement, index2) => (
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

export default Project;

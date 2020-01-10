import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "./myExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const experienceNum = 3;

const researchExperiencesEnglish = [
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

const researchExperiencesChinese = [
  {
    title: "科研学习，美国威斯康星大学麦迪逊分校",
    time: "09/2019至今",
    topic: "通过GPU加速深度学习算法",
    supervisor: "Shivaram Venkataraman",
    goal: "在GPU上实现一个新的机器学习算法，并通过并行编程来更好地支持该算法",
    achievements: [
      "使用CUDA，将并行编程应用到DNN中，并在GPU上实现了DNN全连接层的forward pass和back propagation",
      "通过改变模型的大小和参数，分析了并行执行的流程，进行了关于线程块数量、大小，以及核函数数量对性能和并行度的影响的研究",
      "测试了在CIFAR-10训练中执行多个不同大小的GPU核函数，给每个核函数分配不同的线程网格大小，最终得出最合适的网格大小组合以达到最短运行时间"
    ]
  },
  {
    title: "编程助理，madPL实验室，美国威斯康星大学麦迪逊分校",
    time: "09/2019至今",
    topic: "RFixer 网页应用开发",
    supervisor: "Loris D’Antoni",
    goal:
      "给RFixer搭建一个有友好用户界面的前端和可以链接到后台程序来修复正则表达式的后台的网页应用",
    achievements: [
      "学习了网页设计和正则表达式修复原理",
      "利用React和JavaScript ES6设计了一个整洁的可以接受用户输入并给出反馈的前端",
      "利用Node.js和Maven搭建了一个可以调用后台程序来修复正则表达式的后端",
      "优化了应用使其可以在运行后台前提供一些匹配信息"
    ]
  },
  {
    title: "科研学习，系统安全实验室，武汉大学",
    time: "03/2018–07/2018",
    topic: "关于声音指令系统安全的研究",
    supervisor: "王骞",
    goal: "开发无法被人耳捕捉但可以被机器接收的声音指令攻击",
    achievements: [
      "做了关于当前声音指令攻击和防御原理的研究，参与到通过整合现有方法实现更有效的攻击的工作中",
      "参与了隐蔽声音指令攻击的开发，主要负责收集数据、做测试、和性能分析"
    ]
  }
];

const ResearchExperience = props => {
  let researchExperiences;
  let supervisor;
  if (props.language === "Chinese") {
    researchExperiences = researchExperiencesChinese;
    supervisor = "指导人：";
  } else {
    researchExperiences = researchExperiencesEnglish;
    supervisor = "Supervisor: ";
  }
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
                    {index === experienceNum - 1 ? <a id="project" /> : null}
                    <br />
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "right" }}>
                    <b>{researchExperience.time}</b>
                    <br />
                    <b>{supervisor}</b>
                    <h12>{researchExperience.supervisor}</h12>
                    <br />
                  </Grid>
                </Grid>
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

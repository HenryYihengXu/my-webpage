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

const projectsEnglish = [
  {
    name: "Personal Website",
    time: "01/2020–Present",
    summary:
      "A dynamic website that contains my information, main works and achievements, and will support functions of social media like account registration, posts, comments, etc. in the future",
    achievements: ["Designed a clean, responsive front–end using React.js"]
  },
  {
    name: "Virtual Network Development",
    time: "09/2019–12/2019",
    event: "CS 640 Introduction to Computer Networks, UW-Madison",
    summary:
      "Developed a virtual network with virtual switch and router where various protocols are implemented",
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
      "Data Analysis on Winning Probability Prediction and Winning Cause of the Game",
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

const projectsChinese = [
  {
    name: "个人主页",
    time: "01/2020至今",
    summary:
      "一个包含我的信息、主要成就的动态网站，将来还会支持博客的功能，比如账户管理、发表博文、评论等",
    achievements: ["利用React.js设计了一个整洁的、响应式的网页前端"]
  },
  {
    name: "虚拟网络开发",
    time: "09/2019–12/2019",
    event: "CS 640 计算机网络课程大作业, 美国威斯康星大学麦迪逊分校",
    summary:
      "开发了一个由虚拟路由器和switch组成的虚拟网络，实现了真正网络的各种协议",
    achievements: [
      "利用socket编程开发了一个可以测量网络延迟和吞吐量的应用",
      "在虚拟switch上实现了MAC learning，使得switch和路由器可以处理并转送数据包",
      "在虚拟路由器上实现了ICMP、ARP、RIP协议，使得路由器可以自动生成ARP表和路由表，并且可以正确发送错误信息",
      "开发了可以动态设置路由表，并且平衡网络负担的SDN",
      "搭建了一个可以递归解析域名的DNS服务器"
    ]
  },
  {
    name: "xv6操作系统优化",
    time: "01/2019–05/2019",
    event: "CS 537 操作系统课程大作业, 美国威斯康星大学麦迪逊分校",
    summary:
      "将xv6（一个简易的教学用操作系统）优化成为一个性能更好，功能更强大的操作系统",
    achievements: [
      "重新设计了进程调度算法，将先来先服务修改成为多级反馈队列；重新排列了用户进程空间",
      "实现了不同进程见的共享内存空间，以及创建新的共享页的系统调用",
      "在该操作系统中实现了线程",
      "创建了文件系统检查修复器，使操作系统可以发现并修复文件系统的不一致错误"
    ]
  },
  {
    name: "Carrot语言编译器",
    time: "01/2019–05/2019",
    event: "CS 536 编译原理课程大作业，美国威斯康星大学麦迪逊分校",
    summary:
      "开发了Carrot这个自创语言的编译器，该编译器可以找到所有语法错误、类型错误，并将程序编译为可执行的汇编语言",
    achievements: [
      "编写了可以将文本转换为token的scanner；创建了可以将token转换为parse tree的parser",
      "实现了name analysis功能，使编译器能够找到所有name errors，例如未定义变量、调用非函数变量、结构体非法访问等等",
      "实现了type analysis功能，使编译器能够找到所有type errors，例如类型不匹配、错误返回类型、参数不匹配等等",
      "实现了汇编语言生成功能，将Carrot语言编译为可执行的汇编语言"
    ]
  },
  {
    name: "关于“吃鸡”游戏获胜预测和获胜原因的数据分析",
    time: "11/2018",
    event: '"MadHacks" 编程马拉松比赛，美国威斯康星大学麦迪逊分校',
    summary: "开发了一个基于玩家游戏风格预测玩家获胜概率的小应用",
    achievements: [
      "利用Excel和Matlab对数以百万计的玩家数据进行分析",
      "使用PCA对巨大的特征空间进行降维",
      "训练了一个回归模型，并用其进行获胜概率预测，同时发现越“苟”的玩家越容易获胜"
    ]
  },
  {
    name: "聊天机器人",
    time: "10/2018",
    event: "CS 540 人工智能课程项目, 美国威斯康星大学麦迪逊分校",
    summary: "基于trigram语言模型，编写了一个简易的聊天机器人",
    achievements: [
      "建立了一个trigram语言模型，用语料库计算了单词的多项分布",
      "根据已知句子的开头，用模型随机生成一个完整可读有相关性的句子",
      "编写了聊天机器人驱动，用来根据用户的输入生成一个句子的开头，用模型补全句子，返回给用户，以此实现交互聊天的功能"
    ]
  },
  {
    name: "桌游Qirkat",
    time: "10/2017–11/2017",
    event: "CS 61B 数据结构课程项目，加州大学伯克利分校",
    summary: "开发了一款可以既人人对战，又可以与游戏AI对战的小桌游",
    achievements: [
      "编写了跟Qirkat桌游一样的电脑应用，符合游戏规则",
      "用最大最小算法和α-β剪枝算法实现了一个还算聪明的游戏AI",
      "编写了用户图形界面"
    ]
  }
];

const Project = props => {
  let projects;
  if (props.language === "Chinese") {
    projects = projectsChinese;
  } else {
    projects = projectsEnglish;
  }
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

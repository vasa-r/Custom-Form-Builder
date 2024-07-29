import React from "react";
import { useSelector } from "react-redux";
import styles from "./Flow.module.css";
import FlowSidebar from "../FlowSidebar/FlowSidebar";
import FlowStartFlag from "../../../assets/icons/flow-start-icon.svg";
import BubbleCard from "../BubbleCard/BubbleCard";
import InputFlowCard from "../InputCard/InputFlowCard/InputFlowCard";
import InputButtonCard from "../InputCard/InputButtonCard/InputButtonCard";
import { bubbleTypeData, inputTypeData } from "../../../utils/constants";

const Flow = () => {
  const flow = useSelector((store) => store.flows.flowitems);
  console.log(flow);
  return (
    <div className={styles.flowWrapper}>
      <div className={styles.sidebarConatiner}>
        <FlowSidebar />
      </div>
      <div className={styles.flowContainer}>
        <div className={styles.flowStart}>
          <img src={FlowStartFlag} alt="flow start flag" />
          <p>Start</p>
        </div>
        <div className={styles.formFlows}>
          {flow.map((item, index) => {
            if (item.bubbleOrInput === "bubble") {
              const bubbleDatas = bubbleTypeData[item.content.type];
              if (bubbleDatas) {
                return (
                  <BubbleCard
                    key={index + 1}
                    logoType={bubbleDatas.logoType}
                    title={item.title}
                    placeholder={bubbleDatas.placeholder}
                    index={index}
                  />
                );
              }
            } else if (item.bubbleOrInput === "input") {
              if (item.content.type === "button") {
                return (
                  <InputButtonCard
                    key={index + 1}
                    title={item.title}
                    index={index}
                  />
                );
              } else {
                const inputDatas = inputTypeData[item.content.type];
                return (
                  <InputFlowCard
                    key={index + 1}
                    title={item.title}
                    placeholder={inputDatas.placeholder}
                    index={index}
                  />
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Flow;

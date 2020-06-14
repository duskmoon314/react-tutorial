import React from "react";
import { Timeline } from "antd";

interface HistoryProps {
  history: { value: number; status: string }[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  const historyList = history.map((element) => {
    return (
      <Timeline.Item
        color={
          element.status === "You Win"
            ? "green"
            : element.status === "Too small"
            ? "#ffec3d"
            : "#ffa940"
        }
      >
        You've guessed {element.value}. {element.status}
      </Timeline.Item>
    );
  });

  return (
    <div style={{ padding: 10 }}>
      <Timeline>{historyList}</Timeline>
    </div>
  );
};

export default History;

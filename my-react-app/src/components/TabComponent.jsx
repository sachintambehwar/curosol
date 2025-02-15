import { useState } from "react";
import BasicDetails from "./BasicDetails";
import Hobbies from "./Hobbies";
import Theme from "./Theme";

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const data = [
    {
      title: "Tab1",
      content: BasicDetails,
    },
    {
      title: "Tab2",
      content: Hobbies,
    },
    {
      title: "Tab3",
      content: Theme,
    },
  ];

  const handleClick = (index) => {
    setCurrentTab(index);
  };
  const ActiveTab = data[currentTab].content;
  return (
    <div className="tab-wrapper">
      <div className="tab-container">
        {data.map((tab, index) => (
          <div key={index} onClick={() => handleClick(index)} className="tab">
            {tab.title}
          </div>
        ))}
      </div>
      <div className="conatiner">
        <ActiveTab />
        {/* {data[currentTab].content} */}
      </div>
    </div>
  );
};
export default TabComponent;

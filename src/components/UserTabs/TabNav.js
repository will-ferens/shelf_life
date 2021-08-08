import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../actions/tab.action";
import * as GlobalStyles from "../../constants/styles";

// Take a list of components
// Indicate which is active
// Return active component to dashboard
const tabs = [
  {
    title: "Search",
    id: "user_search_tab",
    component: null,
  },
  {
    title: "List",
    id: "user_list_tab",
    component: null,
  },
  {
    title: "Stats",
    id: "user_reading_stats_tab",
    component: null,
  },
];
const TabNavContainer = styled.div`
  display: flex;
`;
const TabContainer = styled.div``;
const Tab = styled.button`
  background: ${GlobalStyles.paperWhite};
  border: 2px solid ${GlobalStyles.paperWhite};
  margin: 0 4px 0 0;
  font-size: 22px;
  width: 95px;
  padding: 6px;
  margin-bottom: -2px;
  &.active {
    z-index: 1;
    position: relative;
    text-decoration: underline;
    text-decoration-color: ${GlobalStyles.accentRogue};
    top: 2px;
    border: 2px solid ${GlobalStyles.velveticaSecondary};
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
`;

const TabNav = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabReducer.activeTab);
  function SwitchTab(tab) {
    dispatch(setActiveTab(tab));
  }
  return (
    <TabNavContainer>
      {tabs.map((tab) => {
        return (
          <TabContainer key={tab.id}>
            <Tab
              className={activeTab.id === tab.id ? "active" : ""}
              onClick={() => SwitchTab(tab)}
            >
              {tab.title}
            </Tab>
          </TabContainer>
        );
      })}
    </TabNavContainer>
  );
};

export default TabNav;

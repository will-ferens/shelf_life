import React from "react";
import styled from "styled-components";
import TabNav from "../UserTabs/TabNav";
import { useSelector } from "react-redux";
import * as GlobalStyles from "../../constants/styles";

const DashboardContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: ${GlobalStyles.gutterPadding};
`;
const UserComponentContainer = styled.section`
  min-height: 600px;
  border: 2px solid ${GlobalStyles.velveticaSecondary};
  border-radius: 4px;
  &.top-border-radius-none {
    border-radius: 0 4px 4px 4px;
  }
`;

const Dashboard = () => {
  const activeTab = useSelector((state) => state.tabReducer.activeTab);
  return (
    <DashboardContainer>
      <TabNav />
      <UserComponentContainer
        className={
          activeTab.id === "user_search_tab" ? "top-border-radius-none" : ""
        }
      ></UserComponentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

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

const Dashboard = () => {
  const activeTab = useSelector((state) => state.tabReducer.activeTab);
  return (
    <DashboardContainer>
      <TabNav />
      {activeTab.title}
    </DashboardContainer>
  );
};

export default Dashboard;

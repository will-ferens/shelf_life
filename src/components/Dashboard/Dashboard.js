import React from "react";
import styled from "styled-components";
import TabNav from "../UserTabs/TabNav";
import Search from "../Search/Search";
import SelectedBook from "../SelectedBook/SelectedBook";

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
  &.search {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Dashboard = () => {
  const activeTab = useSelector((state) => state.tabReducer.activeTab);

  return (
    <DashboardContainer>
      <TabNav />
      <UserComponentContainer
        className={
          activeTab.id === "user_search_tab"
            ? "top-border-radius-none search"
            : ""
        }
      >
        {activeTab.id === "user_search_tab" && <Search />}
        {activeTab.id === "user_search_tab" ||
        activeTab.id === "user_list_tab" ? (
          <SelectedBook />
        ) : null}
      </UserComponentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

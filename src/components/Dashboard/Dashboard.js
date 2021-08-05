import React from "react";
import styled from "styled-components"
import TabNav from "../UserTabs/TabNav"

const DashboardContainer = styled.main`
  display: flex;
  flex-direction: column;
  
`

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TabNav />
    </DashboardContainer>
  )
}

export default Dashboard
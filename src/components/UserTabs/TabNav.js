import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../actions/tab.action"
// Take a list of components
// Indicate which is active
// Return active component to dashboard
const tabs = [
  {
    title: 'Search',
    id: 'user_search_tab',
    component: null
  },
  {
    title: 'List',
    id: 'user_list_tab',
    component: null
  },
  {
    title: 'Stats',
    id: 'user_reading_stats_tab',
    component: null
  },
]
const TabNavContainer = styled.div`
  display: flex;
  padding: 0 20px;
`
const TabContainer = styled.div``
const Tab = styled.button`
  background: #fff;
  margin: 0 4px 0 0;
`

const TabNav = (props) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabReducer.activeTab);
  function SwitchTab (tab) {
    dispatch(setActiveTab(tab))
  }
  return (
    <TabNavContainer>
      {
        tabs.map((tab) => {
          return (
            <TabContainer id={tab.id}>
              <Tab onClick={() => SwitchTab(tab.id)}>
                {tab.title}
              </Tab>
            </TabContainer>
          )
        })
      }
    </TabNavContainer>
  )
}

export default TabNav;
import React from 'react'
import glamorous from 'glamorous'
const { H1 } = glamorous
import ContentSidebar from './ContentSidebar'

const Content = glamorous.div((props, theme) => ({
  display: 'flex',
  height: 'calc(100vh - 50px)',
}));

const MainHeader = glamorous.div((props, theme) => ({
  margin: 0,
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  borderBottom: theme.borders.light,
}));

const Body = glamorous.h1((props, theme) => ({}));

const Main = glamorous.div((props, theme) => ({
  flex: '2 0 0%',
}));

const tickets = [
  {
    id: 0,
    key: 'TICKET-0',
    priority: 'high',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
  },
  {
    id: 1,
    key: 'TICKET-1',
    priority: 'low',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
  },
  {
    id: 2,
    key: 'TICKET-2',
    priority: 'high',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
  }
];

export default () => (
  <Content>
    <ContentSidebar tickets={tickets} />
    <Main>
      <MainHeader>
        <H1 fontSize="1em">
          TICKET-1
        </H1>
      </MainHeader>
      <Body />
    </Main>
  </Content>
)

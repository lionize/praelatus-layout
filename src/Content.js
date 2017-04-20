import React from 'react'
import glamorous from 'glamorous'
const { H1 } = glamorous
import FontAwesome from 'react-fontawesome'
import TicketList from './TicketList'

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

const ListHeader = glamorous.div((props, theme) => ({
  margin: 0,
  padding: '0 1rem 0 1rem',
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  borderBottom: theme.borders.light,
}));

const Body = glamorous.h1((props, theme) => ({}));

const LeftSidebar = glamorous.div((props, theme) => ({
  flex: '0 0 30%',
  borderRight: theme.borders.dark,
  maxWidth: '300px',
}));

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
    <LeftSidebar>
      <ListHeader>
        <FontAwesome style={{ fontSize: '1.4em' }} name="arrow-left" />
        <H1 margin="0" fontSize="1.2em" textAlign="center">
          Tickets
        </H1>
        <FontAwesome style={{ fontSize: '1.4em' }} name="cog" />
      </ListHeader>
      <TicketList tickets={tickets} />
    </LeftSidebar>
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

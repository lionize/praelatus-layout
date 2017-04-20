import React, { Component } from 'react';
import glamorous, { ThemeProvider } from 'glamorous';
const { H1 } = glamorous;
import FontAwesome from 'react-fontawesome';
import TicketList from './TicketList';
import { css } from 'glamor';

css.global('html, body', { padding: 0, margin: 0 });
css.global('body', {
  bodySizing: 'border-box',
  fontFamily: "system-ui, 'Segoe UI'",
});

const Wrapper = glamorous.div((props, theme) => ({
  height: '100vh',
  color: theme.main.color,
  WebkitFontSmoothing: 'antialiased',
  minWidth: '500px',
}));

const MainHeader = glamorous.div((props, theme) => ({
  height: '50px',
  borderBottom: theme.borders.dark,
  display: 'flex',
  alignItems: 'center',
}))

const Brand = glamorous.a((props, theme) => ({
  fontSize: '1.1em',
  fontWeight: 'bold',
  padding: '0 1rem 0 1rem',
  color: 'inherit',
  textDecoration: 'none',
}))

const Content = glamorous.div((props, theme) => ({
  display: 'flex',
  height: 'calc(100vh - 50px)',
}));

const Header = glamorous.div((props, theme) => ({
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

class App extends Component {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <MainHeader>
            <Brand href='/'>praelatus</Brand>
          </MainHeader>
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
              <Header>
                <H1 fontSize="1em">
                  TICKET-1
                </H1>
              </Header>
              <Body />
            </Main>
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;

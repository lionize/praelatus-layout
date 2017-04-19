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
  height: '40px',
  borderBottom: theme.borders.dark,
}))

const Brand = glamorous.h1((props, theme) => ({
  fontSize: '1.5em',
}))

const Content = glamorous.div((props, theme) => ({
  display: 'flex',
  height: 'calc(100vh - 40px)',
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
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'space-around',
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
    type: 'arrow-up',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
  },
  {
    id: 1,
    key: 'TICKET-1',
    type: 'arrow-down',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
  },
];

class App extends Component {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <MainHeader>
            <Brand>praelatus.io</Brand>
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

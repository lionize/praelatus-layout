import React, { Component } from 'react';
import glamorous, { ThemeProvider } from 'glamorous';
import { css } from 'glamor';
import { Route } from 'react-router-dom'
import Theme from './Theme'
import Header from './Header'
import TicketContent from './TicketContent'

css.global('html, body', { padding: 0, margin: 0 });
css.global('body', {
  bodySizing: 'border-box',
  fontFamily: "'Work Sans', system-ui, 'Segoe UI'",
});

const Wrapper = glamorous.div((props, theme) => ({
  height: '100vh',
  color: theme.colors.dark,
  WebkitFontSmoothing: 'antialiased',
  minWidth: '500px',
}));

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <Header />
          <Route exact path="/" render={() => <h1>Home</h1>}/>
          <Route path="/tickets/:ticketId?" component={TicketContent}/>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;

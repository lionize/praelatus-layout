import React, { Component } from 'react';
import glamorous, { ThemeProvider } from 'glamorous';
import { css } from 'glamor';
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
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <TicketContent />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;

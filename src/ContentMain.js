import React from 'react'
import glamorous from 'glamorous'
const { H1 } = glamorous

const Main = glamorous.div((props, theme) => ({
  flex: '2 0 0%',
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

export default () => (
  <Main>
    <MainHeader>
      <H1 fontSize="1em">
        TICKET-1
      </H1>
    </MainHeader>
    <Body />
  </Main>
)

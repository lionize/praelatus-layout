import React from 'react'
import glamorous from 'glamorous'
const { H1 } = glamorous

const Main = glamorous.div((props, theme) => ({
  flex: '2 0 0%',
  fontSize: '1rem',
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

const Body = glamorous.div((props, theme) => ({
  padding: '1.5em',
}));


export default ({ headerText, body }) => (
  <Main>
    <MainHeader>
      <H1 fontSize="1em">
        {headerText}
      </H1>
    </MainHeader>
    <Body>{body}</Body>
  </Main>
)

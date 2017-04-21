import React from 'react'
import glamorous from 'glamorous'
const { H1 } = glamorous
import FA from 'react-fontawesome'

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

const CreatedAt = glamorous.div((props, theme) => ({
  color: theme.colors.light,
}))

const Summary = glamorous.p((props, theme) => ({
  fontSize: '1.3em',
  fontWeight: 'bold',
}))

const Description = glamorous.p((props, theme) => ({
}))

const formatDate = date => {
  const regex = /(\w+), (\d+) (\w+) (\d+) ([\d:]+)/g
  return new Date(date).toUTCString().match(regex)
}

export default ({ ticket }) => (
  <Main>
    <MainHeader>
      <H1 fontSize="1em">
        {ticket.key}
      </H1>
    </MainHeader>
    <Body>
      <CreatedAt>
        {<FA name="clock-o" />} {formatDate(ticket.createdAt)}
      </CreatedAt>
      <Summary>{ticket.summary}</Summary>
      <Description>{ticket.description}</Description>
    </Body>
  </Main>
)

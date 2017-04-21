import React from 'react'
import glamorous from 'glamorous'
import FA from 'react-fontawesome'
import Label from './Label'
import ContentMain from './ContentMain'

const CreatedAt = glamorous.div((props, theme) => ({
  fontSize: '0.9em',
  color: theme.colors.light,
  marginBottom: '1.5em',
}))

const Labels = glamorous.div((props, theme) => ({
  marginBottom: '1.2em',
}))

const Summary = glamorous.div((props, theme) => ({
  fontSize: '1.3em',
  fontWeight: 'bold',
}))

const Description = glamorous.div((props, theme) => ({
}))

const formatDate = date => {
  const regex = /(\w+), (\d+) (\w+) (\d+) ([\d:]+)/g
  return new Date(date).toUTCString().match(regex)
}

const Body = ({ ticket }) => (
  <div>
    <CreatedAt>
      {<FA name="clock-o" />} {formatDate(ticket.createdAt)}
    </CreatedAt>
    <Labels>
      {!!ticket.labels.length &&
        ticket.labels.map(label => (
          <Label key={label.id} name={label.name} />
        ))
      }
    </Labels>
    <Summary>{ticket.summary}</Summary>
    <Description>
      {ticket.description.split('\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Description>
  </div>
)

export default ({ ticket }) => (
  <ContentMain
    headerText={ticket.key}
    body={<Body ticket={ticket} />}
  />
)

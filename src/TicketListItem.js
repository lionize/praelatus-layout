import React from 'react'
import glamorous from 'glamorous'
const { Div } = glamorous
import ListItemIcon from './ListItemIcon'

const Title = glamorous.div((props, theme) => ({
  fontSize: '1.1em',
}));

const Summary = glamorous.div((props, theme) => ({
  fontSize: '0.8em',
}));

const ListItem = glamorous.div((props, theme) => ({
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: props.active ? 'rgba(0,0,0,0.040)' : 'inherit',
}));

const ItemLink = glamorous.a((props, theme) => ({
  fontSize: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',
  padding: '0.5em 1em 0.5em 0.5rem',
  color: 'inherit',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

const TicketListItem = ({ ticket: { id, key, priority, summary }, current, handleClick }) => (
  <ListItem onClick={() => handleClick(id)} active={id === current}>
    <ItemLink href="#">
      <ListItemIcon priority={priority} />
      <Div padding='0 0.5rem 0 0.5rem'>
        <Title>{key}</Title>
        <Summary>{summary}</Summary>
      </Div>
    </ItemLink>
  </ListItem>
)

export default TicketListItem

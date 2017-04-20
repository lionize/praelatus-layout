import React from 'react';
import glamorous from 'glamorous';
const { Div } = glamorous;
import ListItemIcon from './ListItemIcon'

const TicketList = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
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

const Title = glamorous.div((props, theme) => ({}));

const Summary = glamorous.div((props, theme) => ({
  fontSize: '0.8em',
}));

export default ({ tickets = [] }) => (
  <TicketList>
    {tickets.map(ticket => (
      <ListItem active={ticket.id === 1} key={ticket.id}>
        <ItemLink href="#">
          <ListItemIcon type={ticket.type} />
          <Div padding='0 0.5rem 0 0.5rem'>
            <Title>{ticket.key}</Title>
            <Summary>{ticket.summary}</Summary>
          </Div>
        </ItemLink>
      </ListItem>
    ))}
  </TicketList>
);

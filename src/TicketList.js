import React from 'react';
import glamorous from 'glamorous';
import TicketListItem from './TicketListItem'

const TicketList = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default ({ tickets = [] }) => (
  <TicketList>
    {tickets.map(ticket => <TicketListItem key={ticket.id} ticket={ticket} />)}
  </TicketList>
);

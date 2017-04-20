import React from 'react';
import glamorous from 'glamorous';
import TicketListItem from './TicketListItem'

const TicketList = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default ({ tickets = [], handleClick, current }) => (
  <TicketList>
    {tickets.map(ticket =>
      <TicketListItem
        current={current}
        handleClick={handleClick}
        key={ticket.id}
        ticket={ticket}
      />)}
  </TicketList>
);

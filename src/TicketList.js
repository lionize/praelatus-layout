import React from 'react';
import glamorous from 'glamorous';
import TicketListItem from './TicketListItem'

const TicketListWrapper = glamorous.div((props, theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

class TicketList extends React.Component {
  static contextTypes = {
    tickets: React.PropTypes.array,
    match: React.PropTypes.any,
  }

  render() {
    const { tickets } = this.context

    const items = tickets.map(ticket => (
      <TicketListItem
        ticket={ticket}
        key={ticket.id}
      />
    ))

    return (
      <TicketListWrapper>
        {items}
      </TicketListWrapper>
    );
  }
}

export default TicketList

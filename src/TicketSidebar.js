import React from 'react'
import ContentSidebar from './ContentSidebar'
import TicketList from './TicketList'

export default ({ handleClick, current, tickets }) => (
  <ContentSidebar
    headerText={'Tickets'}
    list={(
      <TicketList
        current={current}
        handleClick={handleClick}
        tickets={tickets}
      />
    )}
  />
)

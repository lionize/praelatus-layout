import React from 'react'
import ContentSidebar from './ContentSidebar'
import TicketList from './TicketList'

const TicketSidebar = () => (
  <ContentSidebar
    headerText={'Tickets'}
    list={(
      <TicketList/>
    )}
  />
)

export default TicketSidebar

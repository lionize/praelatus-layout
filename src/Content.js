import React, { Component } from 'react'
import glamorous from 'glamorous'
import ContentSidebar from './ContentSidebar'
import ContentMain from './ContentMain'

const ContentWrapper = glamorous.div((props, theme) => ({
  display: 'flex',
  height: 'calc(100vh - 50px)',
}));

const tickets = [
  {
    id: 0,
    key: 'TICKET-0',
    priority: 'high',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
    createdAt: '2017-04-12T11:46:20.525186Z',
  },
  {
    id: 1,
    key: 'TICKET-1',
    priority: 'low',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
    createdAt: '2017-05-05T11:46:20.525186Z',
  },
  {
    id: 2,
    key: 'TICKET-2',
    priority: 'high',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
    createdAt: '2017-02-05T11:46:20.525186Z',
  }
];

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTicket: tickets[0],
    }
  }

  handleChangeTicket = (id) => {
    this.setState(() => ({
      currentTicket: tickets[id],
    }))
  }

  render() {
    const { currentTicket } = this.state
    return (
      <ContentWrapper>
        <ContentSidebar handleClick={this.handleChangeTicket} current={currentTicket.id} tickets={tickets} />
        <ContentMain ticket={currentTicket} />
      </ContentWrapper>
    )
  }
}

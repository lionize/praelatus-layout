import React from 'react'
import { Redirect } from 'react-router-dom'
import glamorous from 'glamorous'
import Content from './Content'
import TicketSidebar from './TicketSidebar'
import TicketMain from './TicketMain'

const tickets = [
  {
    id: 0,
    key: 'TICKET-0',
    priority: 'high',
    summary: 'Create design for the site',
    description: "The site currently has a shitty design. We need to revamp it with modern styling practices to create a consist, flowing design.\nIt's important that we ensure maximum usability from the user's standard and guarantee that we provide a friendly experience.",
    createdAt: '2017-04-12T11:46:20.525186Z',
    labels: [
      {
        id: 1,
        name: 'test',
      },
      {
        id: 2,
        name: 'documentation',
      }
    ]
  },
  {
    id: 1,
    key: 'TICKET-1',
    priority: 'low',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
    createdAt: '2017-05-05T11:46:20.525186Z',
    labels: [],
  },
  {
    id: 2,
    key: 'TICKET-2',
    priority: 'high',
    summary: 'Ticket Summary',
    description: 'Ticket Description',
    createdAt: '2017-02-05T11:46:20.525186Z',
    labels: [],
  }
];

const NotFound = glamorous.div((props, theme) => ({
  display: 'flex',
  height: `calc(100vh - ${theme.header.height})`,
  alignItems: 'center',
  justifyContent: 'center',
}))

export default class TicketContent extends React.Component {
  static childContextTypes = {
    tickets: React.PropTypes.array,
    match: React.PropTypes.any,
  }

  getChildContext() {
    return {
      tickets,
      match: this.props.match,
    }
  }

  render() {
    const { match } = this.props

    if (tickets.length && !match.params.ticketId) {
      return (
        <Redirect to={`/tickets/${tickets[0].id}`} />
      )
    }

    if (!tickets.length) {
      return (
        <NotFound>No tickets found</NotFound>
      )
    }

    return (
      <div>
        <Content>
          <TicketSidebar />

          {/*
            2) Add conditionals for rendering not found messages if tickets is empty.
          */}

          <TicketMain match={match} />
        </Content>
      </div>
    )
  }
}

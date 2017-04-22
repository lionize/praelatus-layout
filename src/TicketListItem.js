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
  cursor: 'pointer',
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0.5em',
  backgroundColor: props.active ? 'rgba(0,0,0,0.040)' : 'inherit',
  '&:hover': {
    backgroundColor: props.active ? 'rgba(0,0,0,0.040)' : 'rgba(0,0,0,0.020)'
  }
}));

export default class TicketListItem extends React.Component {
  static contextTypes = {
    match: React.PropTypes.any,
    router: React.PropTypes.any,
  }

  handleClick(id) {
    this.context.router.history.push(`/tickets/${id}`)
  }

  render() {
    const { ticket } = this.props
    const { match } = this.context
    const ticketId = Number(match.params.ticketId)

    return (
      <ListItem
        onClick={() => this.handleClick(ticket.id)}
        active={ticketId === ticket.id}
        >
        <ListItemIcon priority={ticket.priority} />
        <Div padding='0 0.5rem 0 0.5rem'>
          <Title>{ticket.key}</Title>
          <Summary>{ticket.summary}</Summary>
        </Div>
      </ListItem>
    )
  }
}

import React from 'react'
import FA from 'react-fontawesome'

const colors = {
  red: '#F44336',
  green: '#8BC34A',
}

const priorityColors = {
  'high': 'red',
  'low': 'green',
}

const priorityNames = {
  'high': 'arrow-up',
  'low': 'arrow-down',
}

const colorSelector = priority => colors[priorityColors[priority]] || 'inherit'

const nameSelector = priority => priorityNames[priority]

const ListItemIcon = ({ priority }) => (
  <FA
    style={{
      fontSize: '1.5em',
      padding: '8px',
      color: colorSelector(priority),
    }}
    name={nameSelector(priority)}
  />
)


export default ListItemIcon

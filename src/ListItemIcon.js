import React from 'react'
import FA from 'react-fontawesome'

const colors = {
  red: '#F44336',
  green: '#8BC34A',
}

const typeColors = {
  'arrow-up': 'green',
  'arrow-down': 'red',
}

const colorSelector = type => colors[typeColors[type]] || 'inherit'

const ListItemIcon = ({ type }) => (
  <FA
    style={{
      fontSize: '1.5em',
      padding: '8px',
      color: colorSelector(type),
    }}
    name={type}
  />
)


export default ListItemIcon

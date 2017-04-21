import React from 'react'
import glamorous from 'glamorous'

const Label = glamorous.span((props, theme) => ({
  padding: '0.4rem',
  fontSize: '0.7em',
  borderRadius: '1rem',
  background: 'rgba(0,0,0,0.1)',
  color: theme.colors.dark,
  '&:not(:first-child)': {
    marginLeft: '0.3em',
  }
}))

export default ({ name }) => (
  <Label>{name}</Label>
)

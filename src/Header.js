import React from 'react'
import glamorous from 'glamorous'

const MainHeader = glamorous.div((props, theme) => ({
  height: '50px',
  borderBottom: theme.borders.dark,
  display: 'flex',
  alignItems: 'center',
}))

const Brand = glamorous.a((props, theme) => ({
  fontSize: '1.1em',
  fontWeight: 'bold',
  padding: '0 1rem 0 1rem',
  color: 'inherit',
  textDecoration: 'none',
}))

const Header = () => (
  <MainHeader>
    <Brand href='/'>praelatus</Brand>
  </MainHeader>
)

export default Header

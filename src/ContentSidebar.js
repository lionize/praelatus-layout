import React from 'react'
import glamorous from 'glamorous'
const { H1 } = glamorous
import FontAwesome from 'react-fontawesome'

const ContentSidebar = glamorous.div((props, theme) => ({
  flex: '0 0 30%',
  borderRight: theme.borders.dark,
  maxWidth: '300px',
}));

const ListHeader = glamorous.div((props, theme) => ({
  margin: 0,
  padding: '0 1rem 0 1rem',
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  borderBottom: theme.borders.light,
}));

export default ({ headerText, list }) => (
  <ContentSidebar>
    <ListHeader>
      <FontAwesome style={{ fontSize: '1.4em' }} name="arrow-left" />
      <H1 margin="0" fontSize="1.2em" textAlign="center">
        {headerText}
      </H1>
      <FontAwesome style={{ fontSize: '1.4em' }} name="cog" />
    </ListHeader>
    {list}
  </ContentSidebar>
)

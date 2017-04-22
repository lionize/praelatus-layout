import React from 'react'
import glamorous from 'glamorous'

const ContentWrapper = glamorous.div((props, theme) => ({
  display: 'flex',
  height: 'calc(100vh - 50px)',
}));

export default ({ children }) => (
  <ContentWrapper>
    {children}
  </ContentWrapper>
)

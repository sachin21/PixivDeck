// @flow
import React from 'react'
import styled from 'styled-components'

const View = styled.div`
  margin: 0;
  width: 100%;
  height: calc(100% - 2px);
  min-width: 300px;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #222426;
  border: 2px solid #444448;
`

type Props = {
  children?: React$Element<*>,
}

export default function ColumnRoot({ children }: Props) {
  return (
    <View>
      {children}
    </View>
  )
}
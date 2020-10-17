import React, { Component } from 'react'
import styled, { css } from 'styled-components'

export default function Button() {
    
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;

${props => props.primary && css`
  background: palevioletred;
  color: white;
`}
`;

const Container = styled.div`
text-align: center;
`
    return (
        <div>
              <Container>
    {/* <Button>Normal Button</Button> */}
    <Button primary>Next</Button>
  </Container>
        </div>
    )
}

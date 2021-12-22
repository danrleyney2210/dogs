import React from 'react'
import { Feed } from '../Feed'
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/global';


export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <SectionHome className="mainContainer">
        <Feed />
      </SectionHome>
    </>
 
  )
}


const SectionHome = styled.section`
  max-width: 50rem;
  margin: 0 auto;
`
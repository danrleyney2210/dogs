import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { UserHeader } from './UserHeader'
import {Feed} from '../Feed'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStats } from './UserStats'

export const User = () => {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/postar" element={<UserPhotoPost />}/>
        <Route path="/estatistica" element={<UserStats />}/>
      </Routes>
    </Container>
  )
}

const Container = styled.section`
  max-width: 50rem;
  margin: 0 auto;

`
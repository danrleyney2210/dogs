import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {LoginForm} from './LoginForm'
import { LoginCreate } from './LoginCreate' 
import {LoginPasswordLost}  from './LoginPasswordLost'
import {LoginPasswordRest}  from './LoginPasswordRest'
import { UserContext } from '../../userContext'
import styled from 'styled-components'
import ImgLogin from '../../assets/login.jpg'

export const Login = () => {
  const { login } = React.useContext(UserContext);
  if(login === true) return <Navigate to="/conta" />
  
  return (
    <SectionLogin>
      <div className='forms'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordRest />} />
        </Routes>
      </div>
    </SectionLogin>
  )
}

const SectionLogin = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  &:before {
    display: block;
    content: '';
    background-image: url(${ImgLogin});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 2rem;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;

    &:before {
      display: none;
    }

    .forms {
      max-width: 100%;
    }
  }
`
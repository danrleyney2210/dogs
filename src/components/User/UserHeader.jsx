import React from 'react';
import { UserHeaderNav } from './UserHeaderNav';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


export const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(()=> {
    const {pathname} = location; 
    switch(pathname) {
      case '/conta/postar': setTitle('Postar sua Foto'); break;
      case '/conta/estatisticas': setTitle('Estatísticas'); break;
      default: setTitle('Minha Conta');
    }
    
  },[location])

  return (
    <HeaderNav>
      <h1 className="tittle">{title}</h1>
      <UserHeaderNav />
    </HeaderNav>
  )
}

const HeaderNav = styled.header`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;

`
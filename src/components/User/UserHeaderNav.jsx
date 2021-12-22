import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../userContext';
import { ReactComponent as MinhasFotos} from '../../assets/feed.svg'
import { ReactComponent as Estatisticas} from '../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto} from '../../assets/adicionar.svg'
import { ReactComponent as Sair} from '../../assets/sair.svg'
import { useMedia } from '../../Hooks/useMedia';


export const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  },[pathname])


  return (
    <>  
      {mobile && 
        <ContentButton>
          <button
            arial-label="menu" 
            onClick={()=> setMobileMenu(!mobileMenu) }
            className={`${mobileMenu && "mobileButtonActive"}`}
          ></button>
        </ContentButton>
      }
      
      <ContentMenu>
         
        <nav
          className={
          `${mobile? 'navMobile' : 'nav'}
           ${mobileMenu && 'navMobileActive'}`
          }
        >
          <NavLink to="/conta" end activeClassName="active">
            <MinhasFotos />
            {mobile && 'Minhas Fotos'}
          </NavLink>
          <NavLink to="/conta/estatisticas" activeClassName="active">
            <Estatisticas />
            {mobile && 'Estatísticas'}       
          </NavLink>
          <NavLink to="/conta/postar" activeClassName="active">
            <AdicionarFoto />
            {mobile && 'Adcionar Fotos'}
          </NavLink>
          <button onClick={userLogout}>
            <Sair />
            {mobile && 'Sair'}
          </button>
        </nav>
      </ContentMenu>
    </>
  )
}

const ContentMenu = styled.nav`
  .nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    a, button { 
      background-color: #eee;
      border-radius: .2rem;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: 0.1s;
      cursor: pointer;

      &:hover , :focus {
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }
    }

    a.active {
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    svg > * {
      fill: #fb1;
    }
  }

  
}

nav.navMobile {
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0,0,0, .2);
  border-radius: .2rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;

  a, button {
    display: flex;
    align-items: center;
    background: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: .5rem 0;
    cursor: pointer; 
    color: black;

    &:hover {
      svg > * {
        fill: #fb1;
      }
    }
  }

  button {
    border-bottom: none;
  }
}

nav.navMobileActive {
  pointer-events: initial;
  transition: .3s;
  transform: initial;
  opacity: 1;
  z-index: 100;
}

`
const ContentButton = styled.div`
  button {
    background-color: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 6px currentcolor, 0 -6px currentcolor;
      transition: .2s;
    }

    &:hover, &:focus{
      outline: none;
      background-color: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }  
  }

  button.mobileButtonActive {
    &:after {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentcolor, 0 -8px currentcolor;
    }
  }  
`

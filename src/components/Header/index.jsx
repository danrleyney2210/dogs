import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { HeaderContent } from './styles'
import { ReactComponent as Dog } from '../../assets/dogs.svg';
import { UserContext } from '../../userContext'

export const Header = () => {
  const { data, userLogout } = React.useContext(UserContext)

  return (
    <HeaderContent>
      <nav>
        <Link to="/" arial-label="Dogs - Home">
          <Dog  className="logo"/>
        </Link>

        {data ? (
          <Link to="/conta" className="login">
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className="login">
            Login/ Criar
          </Link>
        )
        }     
      </nav>
    </HeaderContent>
  )
}
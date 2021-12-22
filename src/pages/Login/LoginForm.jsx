import React from 'react'
import reactDom from 'react-dom';
import { Link } from 'react-router-dom'
import { ButtonDog } from '../../components/Button/styles';
import { Input } from '../../components/Input';
import userForm from '../../Hooks/useForm';
import { UserContext } from '../../userContext'
import styled from 'styled-components';

export const LoginForm = () => {

  const username = userForm();
  const password = userForm();

  const { userLogin, data, error, loading } = React.useContext(UserContext)
  console.log(data)

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <SectionLogin className='animeLeft'>
      <h1 className='tittle'>Login</h1>
      <form className='form-dog' action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? 
          (<ButtonDog disabled>Carregando...</ButtonDog>) : 
          (<ButtonDog >Entrar</ButtonDog> )
        }
        {error && <p style={{color: 'red', margin: '1rem 0'}}>{error}</p>}
      </form> 
      <Link className='perdeu' to="/login/perdeu">Perdeu a Senha?</Link>

      <div className='cadastro'>
        <h2 className='subtitle'>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className='buttonCriar' to="/login/criar">
          <ButtonDog>Cadastro</ButtonDog>
        </Link>
      </div>
    </SectionLogin>
  )
}

const SectionLogin = styled.section`
  form {
  }

  .perdeu {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &:after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: currentColor;
      display: block;
    }    
  }

  .cadastro {
    margin-top: 4rem;

    .subtitle {
      font-family: var(--text-secondary);
      line-height: 1;
      font-size: 2rem;

      &:after {
        content: '';
        display: block;
        background: #ddd;
        height: .5rem;
        width: 3rem;
        border-radius: 0.2rem;
      }
    }

    p {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

`
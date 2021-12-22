import React from 'react'
import styled from 'styled-components'
import { Input } from '../../components/Input';
import { ButtonDog } from '../../components/Button/styles';
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../api';
import { UserContext } from '../../userContext';
import { Error } from '../../components/Helper';
import { useFetch } from '../../Hooks/useFetch'


export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = React.useContext(UserContext)
  const { loading, error, request } = useFetch();


  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options); 
    console.log(response)
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <SectionCreate className="animeLeft">
      <h1 className='tittle'>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? ( 
          <ButtonDog disabled>Cadastrando...</ButtonDog>
         ) : ( 
          <ButtonDog>Cadastro</ButtonDog>
         )}
        <Error error={error} />
      </form>
    </SectionCreate>
  )
}

const SectionCreate = styled.section`


`


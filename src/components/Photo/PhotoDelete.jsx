import React from 'react'
import styled from 'styled-components'
import { PHOTO_DELETE } from '../../api';
import { useFetch } from './../../Hooks/useFetch';


export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  async function handleClick () {
    const confirm = window.confirm("Tem certeza que deseja deletar?")
    if(confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <ButtonContent>
      {loading ? (
        <button disabled>Deletar</button>
      ) : (
        <button onClick={handleClick}>Deletar</button>
      ) }
    </ButtonContent>
  )
}


const ButtonContent = styled.div`
  button {
    background-color: #ddd;
    padding: .3rem .6rem;
    line-height: 1;
    font-size: .875rem;
    cursor: pointer;
    border-radius: 4px;
    border: none;

    &:hover,&:focus {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
    }
  }
`
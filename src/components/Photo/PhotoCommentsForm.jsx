import React from 'react'
import { COMMENT_POST } from '../../api';
import {ReactComponent as Enviar} from '../../assets/enviar.svg'
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../Helper';
import styled from 'styled-components'


export const PhotoCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = React.useState('');
  const {request, error} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment});
    const {response, json} =  await request(url, options);
    if(response.ok) {
      setComment('');
      setComments((comments)=> [...comments, json])
    }
  }

  return (
    <FormComent onSubmit={handleSubmit}>
      <textarea 
        id="comment"
        name="comment"
        placeholder='Comente...'
        value={comment} 
        onChange={({target})=> setComment(target.value)}></textarea>
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </FormComent>
  )
}

const FormComent = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem; 

  > textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: Helvetica, Arial, sans-serif;
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
    background: #eee;
    transition: 0.2s;

    &:focus, &:hover {
      outline: none;
      cursor: pointer;
      border-color: #fb1;
      background: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    overflow: hidden;
    padding: 0 1rem;

    &:focus, &:hover {
      outline: none;
      > svg path{
        fill: #fea;
        stroke: #fb1;
      }
    }
  }

  button {
    &:focus, &:hover {
      > svg g {
        animation: latir .6s infinite;
      }
    }
  }

  @keyframes latir {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }  
`
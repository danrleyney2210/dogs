import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { PhotoComments } from './PhotoComments';
import visu from '../../assets/visualizacao-black.svg'

export const PhotoContent = ({data}) => {
  const { photo, comments} = data;

  return (
    <ContentPhoto>
      <img className="img" src={photo.src} alt={photo.title} />
      <div className='details'>
        <p className="author">
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <span className="visualizacoes">{photo.acessos}</span>
        </p>

        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>

        <ul className="attributes">
          <li>{photo.peso} Kg</li>
          <li>{photo.idade} Anos</li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </ContentPhoto>
  )
}

const ContentPhoto = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: .2rem;
    background: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: scaleUp .3s forwards;

    @keyframes scaleUp {
      to {
        opacity: initial;
        transform: initial;
      }
    }

    .details {
      padding: 2rem 2rem 0 2rem;
    }

    .img {
      grid-row: 1/4;
    }

    .comments {
      padding: 0 2rem;
    }

    .author {
      opacity: 0.5;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        color: #333;
        &:hover {
          text-decoration: underline;
        }
      }

      .visualizacoes {
        &:before {
          content: '';
          display: inline-block;
          width: 16px;
          height: 10px;
          margin-right: .5rem;
          background: url(${visu}) no-repeat;
        }
      } 
    }
        
    .attributes {
      display: flex;
      font-size: 1.125rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 2rem;

      li {
        margin-right: 2rem;

        &:before {
          content: '';
          display: inline-block;
          height: 20px;
          margin-right: .5rem;
          position: relative;
          top: 3px;
          width: 2px;
          background-color: black;
          margin-top: 5px;
        }
      }
    }

    .comments {
      overflow-y: auto;
      word-break: break-word;
      padding: 0 2rem;

      li {
        margin-bottom: .5rem;
        line-height: 1.2;
      }
    }


    @media (max-width: 64rem) {
      height: auto;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
      grid-template-columns: minmax(20rem, 40rem);

      img {
        grid-row: 1;
      }
    }
`
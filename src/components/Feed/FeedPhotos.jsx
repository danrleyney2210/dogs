import React from 'react'
import { PHOTOS_GET } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { FeedPhotosItem } from './FeedPhotosItem'
import { Error } from '../Helper/'
import { Loading } from '../Helper/Loading'
import styled from 'styled-components'
import  view  from '../../assets/visualizacao.svg'


export const FeedPhotos = ({setModalPhoto}) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(()=> {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0});
      const {response, json }  = await request(url, options);
      console.log(json)
    }

    fetchPhotos();
  },[request]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
    return (
      <Feed>
        <ul className="animeLeft feed">
          {data.map(photo => 
            <FeedPhotosItem 
              key={photo.id} 
              photo={photo} 
              setModalPhoto={setModalPhoto}  
            />)
          }       
        </ul>
      </Feed>
    );
  else return null;
}


const Feed = styled.div`
  .feed {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;

    .photo {
      display: grid;
      border-radius: 0.2rem;
      overflow: hidden;
      cursor: pointer;

      &:hover span {
        display: flex;
      }

      img {
        grid-area: 1/1;    
      }


      span {
        background-color: rgba(0,0,0, 0.3);
        color: white;
        font-size: 1rem;
        text-align: center;
        grid-area: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;

        &:before {
          content: '';
          width: 16px;
          height: 10px;
          display: inline-block;
          margin-right: .25rem;
          background: url(${view}) no-repeat;

        }
      }
    }
  }

  .photo:nth-child(2){
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media(max-width: 40rem) {
    .feed {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .photo:nth-child(2) {
        grid-column: initial;
        grid-row: initial;

      }   
    }
  }
`
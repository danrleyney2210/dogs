import React from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhotos} from './FeedPhotos'
import styled from 'styled-components'

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <FeedMain>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}     
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </FeedMain>
  )
}

const FeedMain = styled.div`
  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
    top: 0px;
    left: 0px;
    display: flex;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
  }

  @media(max-width: 40rem) {
    .modal {
      padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
  }
`



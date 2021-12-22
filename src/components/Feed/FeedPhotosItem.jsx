import React from 'react'; 


export const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className="photo" onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}





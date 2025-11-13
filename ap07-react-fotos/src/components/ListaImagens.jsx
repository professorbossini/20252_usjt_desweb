// rafce
// rcc
import React from 'react'
import Imagem from './Imagem'

// operador de desestruturação
const ListaImagens = ({ photos, imageStyle }) => {
  return (
    photos.map((photo) => (
      <Imagem 
        imageStyle={imageStyle}
        key={photo.id} 
        src={photo.src.small} 
        alt={photo.alt}/>
    ))
  )
}

export default ListaImagens

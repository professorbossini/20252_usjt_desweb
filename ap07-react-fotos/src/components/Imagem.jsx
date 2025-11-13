// rafce
import React from 'react'

const Imagem = ({ src, alt, imageStyle }) => {
  // const src = props.src
  // const alt = props.alt
  //operador de desestruturação
  // const { src, alt } = props
  return (
    <div className={imageStyle} >
      <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem

{/* <Imagem src="seila" alt="outra coisa" /> 

=> {src: "seila", alt: "outra coisa"} */}
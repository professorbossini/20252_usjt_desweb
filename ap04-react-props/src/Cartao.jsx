// rafce
import React from 'react'

const Cartao = ({cabecalho, children}) => {
  return (
    <div className='card'>
      <div className="card-header text-muted">
        {cabecalho}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}
<Cartao cabecalho="seila">
  <p>oi</p>
  <p>tchau</p>
</Cartao>

export default Cartao
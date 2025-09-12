import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Cartao
            cabecalho="Família de animais peculiar">
            <Animal
              tipo="cat"
              tamanho="3" />
            <Animal
              tipo="cat"
              tamanho="2"
              espelhamento="flip-horizontal" />
            <Animal
              tipo="cat"
              tamanho="1"
              espelhamento="flip-horizontal" />
            <Animal
              tipo="cat"
              tamanho="1"
              espelhamento="flip-horizontal" />
            <Animal
              tipo="hippo"
              tamanho="1"
              espelhamento="flip-horizontal" />
          </Cartao>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido
            data="14/09/2025"
            icone="car"
            titulo="Carro"
            descricao="Porsche Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="12/09/2025"
            icone="tractor"
            titulo="Trator"
            descricao="Trator Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="12/09/2025"
            icone="house"
            titulo="Casa"
            descricao="Casa Amarela" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="12/09/2025"
            icone="computer"
            titulo="Computador"
            descricao="Computador Amarelo" />
        </div>
      </div>

    </div>
  )
}

export default App
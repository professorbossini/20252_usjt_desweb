import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const funcaoOK = () => alert('Agradecemos o feedback')
  const funcaoNOK = () => alert('Verificaremos')
  const textoOK = 'Pedido já chegou'
  const textoNOK = 'Ainda não chegou'
  const pedidos = [
    {
      data: '15/09/2025',
      icone: 'car',
      titulo: 'Carro',
      descricao: 'Porsche Amarelo'
    },
    {
      data: '12/09/2025',
      icone: 'house',
      titulo: 'Casa',
      descricao: 'Casa Amarela'
    }
  ]
  const expressaoFeedback = (
    <Feedback 
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      textoOK={textoOK}
      textoNOK={textoNOK}/>
  )
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Cartao
            cabecalho="Família de animais peculiar">
              <div className="d-flex flex-column">
                <div 
                  className="d-flex justify-content-center align-items-end mb-5">
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
                </div>
                <Feedback 
                  textoOK="Adotar uma lontra?"
                  textoNOK="Não adotar!"
                  funcaoOK={() => alert('Oba!')}
                  funcaoNOK={() => alert('Ahhh')}/>
              </div>
          </Cartao>
        </div>
      </div>
      <div className="row mt-2">
        {
          pedidos.map(({data, icone, titulo, descricao}) =>{
            return(
              <div className="col-sm-12 col-md-6 col-xl-4">
                <Cartao
                  cabecalho={data}>
                  <Pedido
                    icone={icone}
                    titulo={titulo}
                    descricao={descricao} />
                  <div className="mt-3"></div>
                  {expressaoFeedback}
                </Cartao>
              </div>
            )
          })
        }
        
      </div>

    </div>
  )
}

export default App
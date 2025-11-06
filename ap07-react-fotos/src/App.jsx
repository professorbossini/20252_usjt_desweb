import { Button } from 'primereact/button'
import Busca from './components/Busca'
import React from 'react'
import { createClient } from 'pexels'
class App extends React.Component{

  chavePexels = 'a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV'

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient(this.chavePexels)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then((result) => console.log(result))
  }
  render(){
    return(
      <div className='grid border-1 justify-content-center border-400 border-round'>
        <div className="col-12">
          <div className='flex mb-3'>
            <i className="pi pi-car mr-3"></i>
            <i className="pi pi-car"></i>
          </div>
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de....</h1>
        </div>
        <div className='col-8'>
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}
export default App
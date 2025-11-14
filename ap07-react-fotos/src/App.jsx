import { Button } from 'primereact/button'
import Busca from './components/Busca'
import React from 'react'
import axios from 'axios'
import ListaImagens from './components/ListaImagens'
class App extends React.Component {

  state = {
    photos: []
  }

  onBuscaRealizada = (termo) => {
    const httpClient = axios.create({
      baseURL: 'http://localhost:3000/'
    })

    httpClient.get('/search', {
      params: {
        query: termo
      }
    })
    .then(({ data }) => {
      this.setState({
        photos: data.photos
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
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
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens
              imageStyle='col-12 md:col-6 lg:col-4 xl:col-3'
              photos={this.state.photos} />
          </div>
        </div>
      </div>
    )
  }
}
export default App
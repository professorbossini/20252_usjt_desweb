import { Button } from 'primereact/button'
import Busca from './components/Busca'
const App = () => {
  return(
    <div>
      <div className='flex mb-3'>
        <i className="pi pi-car mr-3"></i>
        <i className="pi pi-car"></i>
      </div>
      <div>
        <Busca />
      </div>
    </div>
  )
}
export default App
const App = () => {
  return(

    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label 
        htmlFor="nome"
        style={{display: 'block', marginBottom: 4}}>
        Nome:
      </label>
      <input
        id="nome" 
        style={{paddingTop: 8, paddingTop: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%'}}
        type="text" />
      <button
        style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', width: '100%', border: 'none', borderRadius: 8, color: 'white'}}>
        Enviar
      </button>
    </div> 
  )
}

export default App

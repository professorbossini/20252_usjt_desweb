const Animal = function({tipo, tamanho, espelhamento}){
  return <i 
  className={`fa-solid fa-${tipo} fa-${tamanho}x fa-${espelhamento}`}></i>
}
export default Animal
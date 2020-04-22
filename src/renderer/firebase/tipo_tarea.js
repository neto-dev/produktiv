import Repository from './repository'

let tipo_tarea = Repository.db.ref('tipo_tarea')


class TipoTarea {
  static index(){
    return tipo_tarea
  }
  
  static add(data) {
    return new Promise( (resolve, reject) => {
      tipo_tarea.push(data, function(error){
        if (error){
          reject(error)
        }else{
          resolve('Registro agregado correctamente.')
        }
      })
    })
    
  }

  static edit(p_tipo_tarea, data){     
    return new Promise( (resolve, reject) => {
      tipo_tarea.child(p_tipo_tarea['.key']).set(data, function(error){
        if (error){
          reject(error)
        }else{          
          resolve('Registro modificado correctamente.')
        }
      })
    }) 
  }

  static delete(p_tipo_tarea){
    return new Promise( (resolve, reject) => {
      tipo_tarea.child(p_tipo_tarea['.key']).remove(function(error){
        if (error){
          reject(error)
        }else{          
          resolve('Registro eliminado correctamente.')
        }
      })      
    })
  }
}
export default TipoTarea
import React, { Fragment, useState, useEffect } from 'react'
import ListaUsuarios from './ListaUsuarios'
import {v4 as uuidv4} from 'uuid'
import FormularioUsuario from './FormularioUsuario'
import EditarUsuario from './EditarUsuario'

const App = () => {

  const baseDeDatos = [
    {id: uuidv4(), nombre: 'Mauro', email: 'mauro.depascali', telefono: '1111111111', notas:'descripcion'},
  ]

  const [usuarios, setUsuarios] = useState(baseDeDatos)

  const [editar, setEditar] = useState(false)

  const [currentUsuario, setCurrentUsuario] = useState({
    id: null, nombre:'', email: '', telefono:'', notas:''
  })

  useEffect(() => {
    let data = localStorage.getItem('usuarios')
    if(data){
      setUsuarios(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  },[usuarios])

  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4()
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id))
  }

  const editarUsuario = (usuario) => {
    setEditar(true)
    setCurrentUsuario({
      id: usuario.id, nombre: usuario.nombre, email: usuario.email, telefono: usuario.telefono, notas: usuario.notas
    })
  }

  const actualizarUsuario = (id, usuarioActualizado) => {
    setEditar(false)
    setUsuarios(usuarios.map(usuario => (usuario.id === id ? usuarioActualizado : usuario)))
  }

  return (
    <Fragment>
      <h1 className='text-center titulo'>Sistema de usuarios</h1><br />
      <div className='contenedor'> 
          <div className='formAddOrEdit'>
            {
              editar ? 
              (
                <div>
                  <h2 className='text-center subtitulo'>Editar usuario</h2>
                  <EditarUsuario
                    currentUsuario={currentUsuario}
                    actualizarUsuario={actualizarUsuario}
                  />
                </div>
              ) : (
                <div>
                  <h2 className='text-center subtitulo'>Agregar usuario</h2>
                  <FormularioUsuario agregarUsuario={agregarUsuario}/>
                </div>
              )
            }
          </div>
          <div className='UserList'>
            <h2 className='text-center subtitulo'>Listado de usuarios</h2>
              <ListaUsuarios 
                usuarios={usuarios} 
                eliminarUsuario={eliminarUsuario}  
                editarUsuario={editarUsuario}
              />
          </div>
      </div>
    </Fragment>
  )
}

export default App








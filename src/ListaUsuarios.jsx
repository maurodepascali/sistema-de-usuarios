import React from 'react'
import {PencilSquare} from 'react-bootstrap-icons';
import {Trash} from 'react-bootstrap-icons';

const ListaUsuarios = (props) => {
  return (
    <table>
        <thead>
            <tr>
                {/* 
                <th>Nombre</th>
                <th>Correo eléctronico</th>
                <th>Teléfono</th>
                <th className='notas'>Notas</th>
                */}
            </tr>
        </thead>
        <tbody>
            {
            props.usuarios.length > 0 ? (
            props.usuarios.map(usuario => (
                 <tr key={usuario.id} className="listadoDeUsuarios">
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.telefono}</td>
                    <td>{usuario.notas}</td>
                    <td className='buttons'>
                        <button 
                            className='btn btn-primary'
                            onClick={() => {props.editarUsuario(usuario)}}
                        >    <PencilSquare/>
                        </button>
                        <button 
                            className='btn btn-danger' 
                            onClick={() => {props.eliminarUsuario(usuario.id)}}
                        >
                            <Trash/>
                        </button>
                    </td>
             </tr>
             
            ))
            ) : (
                <tr>
                    <td>No hay usuarios</td>
                </tr>
            )
            }
        </tbody>
    </table>
  )
}

export default ListaUsuarios

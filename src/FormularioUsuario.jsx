import React from 'react'
import { useForm } from 'react-hook-form'

const FormularioUsuario = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        //console.log(data)
        props.agregarUsuario(data)
        e.target.reset();
    }

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input 
                type="text" 
                name="nombre"
                {...register("nombre", { required: true })}
            />
            <div>
                {errors.nombre && <span>Campo obligatorio</span>}
            </div>
            <label>Correo eléctronico</label>
            <input 
                type="text" 
                name="email" 
                {...register("email", { required: true })}
                />
            <div>
                {errors.email && <span>Campo obligatorio</span>}
            </div>
            <label>Teléfono</label>
            <input 
                type="text" 
                name="telefono"
                {...register("telefono", { required: true })}
            />
            <div>
                {errors.telefono && <span>Campo obligatorio</span>}
            </div>
            <label>Notas:</label>
            <textarea
            type="text" 
            name="notas"
            {...register("notas", { required: true })}
            />
            
            <div>
                {errors.notas && <span>Campo obligatorio</span>}
            </div>
            

            <button type="submit">Agregar</button>
        </form>
  )
}

export default FormularioUsuario

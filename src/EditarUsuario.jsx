import React from 'react'
import { useForm } from 'react-hook-form'
        
    const EditarUsuario = (props) => {
        
            const {register, handleSubmit, formState: { errors }, setValue} = useForm({
                defaultValues: props.currentUsuario
            });

            setValue('nombre', props.currentUsuario.nombre)
            setValue('email', props.currentUsuario.email)
            setValue('telefono', props.currentUsuario.telefono)
            setValue('notas', props.currentUsuario.notas)

            const onSubmit = (data, e) => {
                console.log(data)
                data.id = props.currentUsuario.id
                props.actualizarUsuario(props.currentUsuario.id, data)
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
                {errors.nombre && <span style={{color: 'red'}}>*Campo obligatorio</span>}
            </div>
            <label>Correo eléctronico</label>
            <input 
                type="text" 
                name="email" 
                {...register("email", { required: true })}
                />
            <div>
                {errors.email && <span style={{color: 'red'}}>*Campo obligatorio</span>}
            </div>
            <label>Teléfono</label>
            <input 
                type="text" 
                name="telefono"
                {...register("telefono", { required: true })}
            />
            <div>
                {errors.telefono && <span style={{color: 'red'}}>*Campo obligatorio</span>}
            </div>
            <label>Notas</label>
            <textarea
            rows="5"
            type="text" 
            name="notas"
            {...register("notas", { required: true })}
            />
            
            <div>
                {errors.notas && <span style={{color: 'red'}}>*Campo obligatorio</span>}
            </div>
                    <button 
                        type="submit"
                        className='btn btn-primary add'
                        >Editar usuario</button>
                </form>
          )
        }
        
        export default EditarUsuario
        
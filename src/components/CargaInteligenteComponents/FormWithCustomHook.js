import React from 'react'
import { UseForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = UseForm({
        patente: '',
        empresa: '',
        capacidad: '',
        añoVehiculo: ''
    })

    const { patente, empresa, capacidad, añoVehiculo } = formValues;

    return (
        <>

            <h1>Formulario Vahiculo</h1>
            <hr />

            <div className="form-group">

                <input type="text"
                    name="patente"
                    className="form-control"
                    placeholder="Ingrese Patente"
                    autoComplete="off"
                    value={patente}
                    onChange={handleInputChange}
                />

                <input type="text"
                    name="empresa"
                    className="form-control"
                    placeholder="Empresa"
                    autoComplete="off"
                    value={empresa}
                    onChange={handleInputChange}
                />

                <input type="txt"
                    name="capacidad"
                    className="form-control"
                    placeholder="Capacidad"
                    value={capacidad}
                    onChange={handleInputChange}
                />

                <input type="txt"
                    name="añoVehiculo"
                    className="form-control"
                    placeholder="Año del Vehiculo"
                    value={añoVehiculo}
                    onChange={handleInputChange}
                />

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className ="form-check-label" htmlFor="flexRadioDefault1">
                    Refrigerado 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className ="form-check-label" htmlFor="flexRadioDefault2">
                    No Refrigerado
                    </label>
                </div>

                <input type="file" name="archivosubido"/>

                {/* <input type="submit" value="Cargar documentos del camion"/> */}

                <input type="submit" value="Cargar Vehiculo"/>
            </div>
        </>
    )


}

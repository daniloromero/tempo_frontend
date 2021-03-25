import React from 'react';
import '../assets/styles/components/Shows.css'

export const Filter = () => {
  return (
    <div className="filter">
        <form action="/shows" className="form-filter">
            <p>Buscar ahora:</p>
            <div className="selects">
                <select name="" id="">
                    <option value="">Ciudad</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellin">Medellín</option>
                    <option value="Cali">Cali</option>
                </select>
                <select name="" id="">
                    <option value="">Rango de fecha</option>
                    <option value="">Hoy</option>
                    <option value="">Próximos 7 días</option>
                    <option value="">Próximos 15 días</option>
                    <option value="">Próximo mes</option>
                    <option value="">Próximos 3 meces</option>
                    <option value="">Próximos 6 meces</option>
                </select>
                <select name="" id="">
                    <option value="">Genero</option>
                    <option value="">Pop</option>
                    <option value="">Rock</option>
                    <option value="">Heavy Metal</option>
                    <option value="">Jazz</option>
                    <option value="">Reggae</option>
                    <option value="">Punk</option>
                    <option value="">Electro</option>
                </select>
            </div>
        </form>
        <div className="content-inp-form">
            <input type="submit" value="Filtrar"/>
        </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';


const BusquedaTexto = ({ data, searchTerm, setSearchResults }) => {
  const [filteredData, setFilteredData] = useState([]);

  console.log(data)

  useEffect(() => {
    if (!data || !searchTerm) {
      setFilteredData(data);
      return; // If 'data' or 'searchTerm' is undefined, exit the useEffect hook early
    }

    let filtered = data.flatMap((restaurant) =>
      restaurant.Productos.map((product) => ({
        ...product,
        restaurantId: restaurant.id, // clearly naming restaurant ID
        restaurantName: restaurant.nombre,
        distancia: restaurant.distancia,
        urlImagenLogo: restaurant.urlImagenLogo,
        urlImagenPortada: restaurant.urlImagenPortada,
        calificaciones: restaurant.calificaciones,
      }))
    );

    filtered = filtered.filter((item) =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.direccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cocina.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Productos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Productos.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  }, [data, searchTerm]);

  setSearchResults(filteredData);
  return filteredData;
};

export default BusquedaTexto;
export const datosUsuario = [
  {
    _id: "unique_user_id",
    Nombre: "John Doe",
    Telefono: "+58-212-555-1234",
    Correo: "johndoe@example.com",
    Contraseña: "hashed_password_string",
    Ubicaciones: [
      {
        Direccion: "Calle 123, Caracas, Venezuela",
        Latitud: 10.5,
        Longitud: -66.916664,
      },
    ],
    RestaurantesFavoritos: [9, 2],
    Pedidos: [
      {
        _id: "unique_order_id",
        FechaVenta: "2024-02-01T14:30:00Z",
        Productos: [
          {
            id: 3,
            cantidad: 1,
            nombre: "Hamburguesa Especial",
            precioAntes: "8.00",
            precioVenta: 5.6,
            cantidadDisponible: "15",
            diaRetiro: "Mañana",
            horaRetiro: "08:00 - 12:30",
            descripcion:
              "Hamburguesa con doble carne, queso, y nuestras salsas secretas",
            categoria: ["Comida rápida"],
          },
          {
            id: 4,
            cantidad: 1,
            nombre: "Cheesecake de Fresa",
            precioAntes: "4.00",
            precioVenta: 2.8,
            cantidadDisponible: "20",
            diaRetiro: "Mañana",
            horaRetiro: "09:45 - 12:15",
            descripcion:
              "Cheesecake cremoso con una capa generosa de fresas frescas",
            categoria: ["Postre"],
          },
        ],
        TipoDeEntrega: "Retiro",
        Estado: "Entregado",
        CodigoRetiro: "ab2k3",
        MetodoDePago: "Efectivo",
        NombreRestaurante: "Cocina Caraqueña",
        IdRestaurante: 2,
        urlImagenLogo:
          "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        _id: "unique_order_id_2",
        FechaVenta: "2024-04-01T14:30:00Z",
        Productos: [
          {
            id: 5,
            cantidad: 1,
            nombre: "Croissant de Almendra",
            precioAntes: "3.00",
            precioVenta: "1.80",
            cantidadDisponible: "25",
            diaRetiro: "Hoy",
            horaRetiro: "10:30 - 15:00",
            descripcion:
              "Croissants recién horneados con relleno de crema de almendras",
            categoria: ["Panadería"],
          },
        ],
        tipoDeEntrega: "Retiro",
        Estado: "Por retirar",
        CodigoRetiro: "d2sdw",
        MetodoDePago: "Tarjeta de crédito",
        IdRestaurante: 3,
        NombreRestaurante: "Panadería del Este",
        urlImagenLogo:
          "https://i.imgur.com/uzJ5Bts.png",
      },
    ],
    Notificaciones: [
      {
        _id: "unique_notification_id",
        Mensaje: "Tu pedido ha sido entregado.",
        Leido: false,
        Fecha: "2024-04-01T15:00:00Z",
      },
    ],
    AjustesDeNotificaciones: {
      Promociones: true,
      Alertas: true,
      Novedades: false,
    },
  },
];

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
        Fecha: "2024-02-01T14:30:00Z",
        ProductoId: 3,
        Cantidad: 2,
        Precio: 9.99,
        Estado: "Entregado",
      },
      {
        _id: "unique_order_id_2",
        Fecha: "2024-04-01T14:30:00Z",
        ProductoId: 4,
        Cantidad: 1,
        Precio: 5.99,
        Estado: "Entregado",
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

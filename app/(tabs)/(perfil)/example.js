LOG = {
  AjustesDeNotificaciones: {
    Alertas: true,
    Novedades: false,
    Promociones: true,
  },
  Contraseña: "hashed_password_string",
  Correo: "johndoe@example.com",
  Nombre: "John Doe",
  Notificaciones: [
    {
      Fecha: "2024-04-01T15:00:00Z",
      Leido: false,
      Mensaje: "Tu pedido ha sido entregado.",
      _id: "unique_notification_id",
    },
  ],
  Pedidos: [
    {
      Cantidad: 2,
      Estado: "Entregado",
      Fecha: "2024-02-01T14:30:00Z",
      Precio: 9.99,
      ProductoId: 3,
      _id: "unique_order_id",
    },
    {
      Cantidad: 1,
      Estado: "Entregado",
      Fecha: "2024-04-01T14:30:00Z",
      Precio: 5.99,
      ProductoId: 4,
      _id: "unique_order_id_2",
    },
  ],
  RestaurantesFavoritos: [9, 2],
  Telefono: "+58-212-555-1234",
  Ubicaciones: [
    {
      Direccion: "Calle 123, Caracas, Venezuela",
      Latitud: 10.5,
      Longitud: -66.916664,
    },
  ],
  _id: "unique_user_id",
};

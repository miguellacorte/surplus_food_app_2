export const datosRestaurante = [
  {
    id: 1,
    nombre: "El Coyuco",
    direccion: "Trans. 3, Qta Guio, con Av 3, Caracas 1060, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/KEikhkDyTsXDkwk47",
    cocina: "Pollo en brasa y parrilla",
    categoria: ["Plato principal", "Caja sorpresa", "Postre", "Otros"],
    distancia: "1.5",
    calificaciones: [
      {
        calificacion: 4.5,
        comentario: "Excelente servicio, la comida es deliciosa",
      },
      {
        calificacion: 4,
        comentario: "La comida es buena, pero el servicio es lento",
      },
      {
        calificacion: 1,
        comentario: "La comida es deliciosa y el servicio es excelente",
      },
      {
        calificacion: 2,
        comentario: "El ambiente es agradable y la comida es sabrosa",
      },
      {
        calificacion: 3,
        comentario: "El servicio podría ser mejor, pero la comida es buena",
      },
      {
        calificacion: 4,
        comentario: "Me encanta la variedad del menú",
      },
      {
        calificacion: 5,
        comentario: "Los precios son razonables para la calidad de la comida",
      },
      {
        calificacion: 2,
        comentario: "La comida es buena, pero el lugar es un poco ruidoso",
      },
      {
        calificacion: 3,
        comentario: "El personal es amable y la comida es excelente",
      },
      {
        calificacion: 4,
        comentario: "La comida es promedio, pero el servicio es rápido",
      },
      {
        calificacion: 1,
        comentario: "El lugar es limpio y la comida es deliciosa",
      },
      {
        calificacion: 2,
        comentario: "La comida es buena, pero el lugar es un poco pequeño",
      },
      {
        calificacion: 3,
        comentario: "El servicio es excelente y la comida es sabrosa",
      },
      {
        calificacion: 4,
        comentario: "La comida es deliciosa, pero el servicio podría ser mejor",
      },
      {
        calificacion: 5,
        comentario: "El lugar es agradable y la comida es buena",
      },
      {
        calificacion: 1,
        comentario: "El servicio es rápido y la comida es sabrosa",
      },
      {
        calificacion: 2,
        comentario: "La comida es promedio, pero el lugar es agradable",
      },
      {
        calificacion: 3,
        comentario: "El servicio es lento, pero la comida es buena",
      },
      {
        calificacion: 4,
        comentario: "La comida es deliciosa y el lugar es limpio",
      },
      {
        calificacion: 5,
        comentario: "El servicio es excelente, pero la comida es promedio",
      },
      {
        calificacion: 1,
        comentario: "La comida es sabrosa y los precios son razonables",
      },
      {
        calificacion: 2,
        comentario: "El lugar es ruidoso, pero la comida es buena",
      },
    ],
    ordenesCantidad: "200",
    urlImagenLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d49a502485ec5cfa23e5bb59bc169df6a240c31ae56c86b3ad9ef8f1e5bb28ba?apiKey=64cf540a2469411fb888e6001ea1b7f2&",
    urlImagenPortada:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/164d420ddd7ad34c6edf2890f7912b900b98b29f58d00cd7cb13fba47b580fcb?apiKey=64cf540a2469411fb888e6001ea1b7f2&",
    Productos: [
      {
        id: 1,
        nombre: "Plato de pollo",
        precioAntes: "10.00",
        precioVenta: "4.80",
        cantidadDisponible: "2",
        diaRetiro: "Hoy",
        horaRetiro: "06:30 - 10:59",
        descripcion:
          "2x1 en pollo a la brasa, acompañado de papas fritas y ensalada",
        categoria: ["Plato principal"],
      },
      {
        id: 2,
        nombre: "Caja sorpresa",
        precioAntes: "18.00",
        precioVenta: "9.00",
        cantidadDisponible: "1",
        diaRetiro: "Mañana",
        horaRetiro: "07:15 - 11:45",
        descripcion:
          "Caja sorpresa con 2 platos principales, 2 postres y 2 bebidas",
        categoria: ["Caja sorpresa"],
      },
    ],
    MetodosPago: ['cash', 'transferencia', 'pago móvil', 'tarjeta']
  },
  {
    id: 2,
    nombre: "Cocina Caraqueña",
    direccion: "Av. Libertador, Chacao, Caracas 1060, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL4",
    cocina: "Comida Rápida",
    categoria: [
      "Plato principal",
      "Postre",
      "Comida rápida",
      "Snacks y merienda",
    ],
    distancia: "2.5",
    calificaciones: [
      {
        calificacion: 4.3,
        comentario: "Rápido y delicioso, ideal para un almuerzo en la oficina.",
      },
    ],
    ordenesCantidad: "190",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 3,
        nombre: "Hamburguesa Especial",
        precioAntes: "8.00",
        precioVenta: "5.60",
        cantidadDisponible: "15",
        diaRetiro: "Mañana",
        horaRetiro: "08:00 - 12:30",
        descripcion:
          "Hamburguesa con doble carne, queso, y nuestras salsas secretas",
        categoria: ["Comida rápida"],
      },
      {
        id: 4,
        nombre: "Cheesecake de Fresa",
        precioAntes: "4.00",
        precioVenta: "2.80",
        cantidadDisponible: "20",
        diaRetiro: "Mañana",
        horaRetiro: "09:45 - 12:15",
        descripcion:
          "Cheesecake cremoso con una capa generosa de fresas frescas",
        categoria: ["Postre"],
      },
    ],
  },
  {
    id: 3,
    nombre: "Panadería del Este",
    direccion:
      "Av. Francisco de Miranda, Los Palos Grandes, Caracas 1070, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL5",
    cocina: "Panadería",
    categoria: ["Panadería", "Desayuno", "Postre", "Otros"],
    distancia: "1.0",
    calificaciones: [
      {
        calificacion: 4.9,
        comentario: "Los mejores croissants de Caracas, frescos cada día.",
      },
    ],
    ordenesCantidad: "300",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1580920460745-f06f9cb71d62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 5,
        nombre: "Croissant de Almendra",
        precioAntes: "3.00",
        precioVenta: "1.80",
        cantidadDisponible: "25",
        diaRetiro: "Hoy",
        horaRetiro: "10:30 - 15:00",
        descripcion:
          "Croissants recién horneados con relleno de crema de almendras",
        categoria: [ "Panadería"],
      },
      {
        id: 6,
        nombre: "Capuchino Clásico",
        precioAntes: "2.50",
        precioVenta: "1.50",
        cantidadDisponible: "30",
        diaRetiro: "Mañana",
        horaRetiro: "11:00 - 15:30",
        descripcion: "Capuchino con espuma perfecta y un toque de canela",
        categoria: ["Desayuno"],
      },
    ],
  },
  {
    id: 4,
    nombre: "Dulces Delicias",
    direccion: "Calle Paris, Las Mercedes, Caracas 1060, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL6",
    cocina: "Pastelería",
    categoria: ["Postre", "Panadería", "Desayuno", "Otros"],
    distancia: "3.2",
    calificaciones: [
      {
        calificacion: 4.6,
        comentario:
          "Postres divinos y atención de primera, totalmente recomendado.",
      },
    ],
    ordenesCantidad: "215",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 7,
        nombre: "Torta de Chocolate",
        precioAntes: "12.00",
        precioVenta: "8.00",
        cantidadDisponible: "10",
        diaRetiro: "Mañana",
        horaRetiro: "12:15 - 16:45",
        descripcion:
          "Torta de chocolate húmeda con capas de ganache y sprinkles de chocolate",
        categoria: ["Postre"],
      },
      {
        id: 8,
        nombre: "Croissant de Mantequilla",
        precioAntes: "2.00",
        precioVenta: "1.20",
        cantidadDisponible: "30",
        diaRetiro: "Mañana",
        horaRetiro: "14:00 - 18:30",
        descripcion:
          "Croissant francés tradicional, ligero y aireado con exterior crujiente",
        categoria: ["Panadería"],
      },
    ],
  },
  {
    id: 5,
    nombre: "Bocados Rápidos",
    direccion: "Av. Principal de Las Mercedes, Caracas 1080, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL7",
    cocina: "Snacks",
    categoria: ["Snacks y merienda", "Comida rápida", "Postre", "Otros"],
    distancia: "1.5",
    calificaciones: [
      {
        calificacion: 3.8,
        comentario: "Ideal para un snack rápido, precios accesibles.",
      },
    ],
    ordenesCantidad: "180",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 9,
        nombre: "Emparedado de Pollo",
        precioAntes: "6.00",
        precioVenta: "3.60",
        cantidadDisponible: "20",
        diaRetiro: "Hoy",
        horaRetiro: "15:25 - 19:55",
        descripcion:
          "Emparedado de pollo grillado con lechuga, tomate y mayonesa en pan artesanal",
        categoria: ["Comida rápida", 'Caja sorpresa'],
      },
      {
        id: 10,
        nombre: "Batido de Frutas",
        precioAntes: "4.00",
        precioVenta: "2.40",
        cantidadDisponible: "25",
        diaRetiro: "Hoy",
        horaRetiro: "16:10 - 20:40",
        descripcion:
          "Batido de frutas naturales, selección del día según disponibilidad",
        categoria: ["Snacks y merienda"],
      },
    ],
  },
  {
    id: 6,
    nombre: "Desayunos del Valle",
    direccion: "Boulevard de Sabana Grande, Caracas 1050, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL8",
    cocina: "Desayunos",
    categoria: ["Desayuno", "Panadería", "Plato principal", "Postre"],
    distancia: "0.8",
    calificaciones: [
      {
        calificacion: 4.8,
        comentario:
          "Desayunos completos y deliciosos, un must para empezar el día.",
      },
    ],
    ordenesCantidad: "305",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 11,
        nombre: "Arepa Rellena",
        precioAntes: "4.00",
        precioVenta: "2.50",
        cantidadDisponible: "1",
        diaRetiro: "Hoy",
        horaRetiro: "06:00 - 10:00",
        descripcion:
          "Arepa rellena de queso de mano y pernil, acompañada de café con leche",
        categoria: ["Desayuno"],
      },
      {
        id: 12,
        nombre: "Pan de Jamón",
        precioAntes: "3.00",
        precioVenta: "2.00",
        cantidadDisponible: "20",
        diaRetiro: "Hoy",
        horaRetiro: "07:00 - 11:00",
        descripcion:
          "Pan de jamón tradicional, relleno de jamón ahumado, pasas y aceitunas",
        categoria: ["Panadería"],
      },
    ],
  },
  {
    id: 7,
    nombre: "Sazón Urbano",
    direccion:
      "Av. Rómulo Gallegos, Santa Eduvigis, Caracas 1071, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL9",
    cocina: "Fusión Internacional",
    categoria: ["Plato principal", "Desayuno", "Comida rápida", "Postre"],
    distancia: "4.0",
    calificaciones: [
      {
        calificacion: 4.4,
        comentario: "Variedad increíble y cada plato es una experiencia única.",
      },
    ],
    ordenesCantidad: "250",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 13,
        nombre: "Bowl de Quinoa y Pollo",
        precioAntes: "12.00",
        precioVenta: "7.20",
        cantidadDisponible: "1",
        diaRetiro: "Hoy",
        horaRetiro: "11:00 - 17:00",
        descripcion:
          "Bowl nutritivo de quinoa con pollo grillado, aguacate y salsa de yogur",
        categoria: ["Plato principal"],
      },
      {
        id: 14,
        nombre: "Mousse de Mango",
        precioAntes: "6.00",
        precioVenta: "3.60",
        cantidadDisponible: "20",
        diaRetiro: "Hoy",
        horaRetiro: "12:00 - 14:00",
        descripcion:
          "Mousse ligero de mango con un toque de jengibre fresco y menta",
        categoria: ["Postre"],
      },
    ],
  },
  {
    id: 8,
    nombre: "Punto Criollo",
    direccion: "Calle Mohedano, El Rosal, Caracas 1060, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL10",
    cocina: "Comida Criolla",
    categoria: ["Plato principal", "Postre", "Snacks y merienda", "Otros"],
    distancia: "2.2",
    calificaciones: [
      {
        calificacion: 4.1,
        comentario: "Comida casera con sabor auténtico, como hecha en casa.",
      },
    ],
    ordenesCantidad: "170",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 15,
        nombre: "Pabellón Criollo",
        precioAntes: "10.00",
        precioVenta: "6.00",
        cantidadDisponible: "10",
        diaRetiro: "Hoy",
        horaRetiro: "12:00 - 04:00",
        descripcion:
          "Plato tradicional venezolano con arroz, carne mechada, plátano y frijoles",
        categoria: ["Plato principal"],
      },
      {
        id: 16,
        nombre: "Tequeños",
        precioAntes: "3.00",
        precioVenta: "1.80",
        cantidadDisponible: "3",
        diaRetiro: "Hoy",
        horaRetiro: "12:00 - 15:00",
        descripcion:
          "Deditos de queso envueltos en masa dorada y crujiente, acompañados de salsa tártara",
        categoria: ["Snacks y merienda"],
      },
    ],
  },
  {
    id: 9,
    nombre: "El Rinconcito",
    direccion: "Boulevard de Sabana Grande, Caracas 1050, Distrito Capital",
    UrlDireccion: "https://maps.app.goo.gl/sampleURL11",
    cocina: "Comida Rápida",
    categoria: ["Comida rápida", "Snacks y merienda", "Desayuno", "Otros"],
    distancia: "0.5",
    calificaciones: [
      {
        calificacion: 3.9,
        comentario: "Buen lugar para comer algo rápido y seguir tu camino.",
      },
    ],
    ordenesCantidad: "195",
    urlImagenLogo:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1556742522-0f4f5e8eb228?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 17,
        nombre: "Hot Dog Especial",
        precioAntes: "4.00",
        precioVenta: "2.40",
        cantidadDisponible: "2",
        diaRetiro: "Hoy",
        horaRetiro: "10:00 - 14:00",
        descripcion:
          "Hot dog con salchicha de res, cebolla caramelizada, queso cheddar y salsa especial",
        categoria: ["Comida rápida"],
      },
      {
        id: 18,
        nombre: "Empanada de Carne",
        precioAntes: "2.00",
        precioVenta: "1.20",
        cantidadDisponible: "40",
        diaRetiro: "Hoy",
        horaRetiro: "08:00 - 11:00",
        descripcion:
          "Empanada de masa crujiente rellena de carne picada y especias",
        categoria: ["Desayuno"],
      },
    ],
  },
];

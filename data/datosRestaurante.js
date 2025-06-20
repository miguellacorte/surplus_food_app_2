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
        Fecha: "2024-05-01",
        Nombre: "Juan Pérez",
      },
      {
        calificacion: 4,
        comentario: "La comida es buena, pero el servicio es lento",
        Fecha: "2024-05-02",
        Nombre: "María López",
      },
      {
        calificacion: 1,
        comentario: "La comida es deliciosa y el servicio es excelente",
        Fecha: "2024-05-03",
        Nombre: "Carlos Martínez",
      },
      {
        calificacion: 2,
        comentario: "El ambiente es agradable y la comida es sabrosa",
        Fecha: "2024-05-04",
        Nombre: "Ana González",
      },
      {
        calificacion: 3,
        comentario: "El servicio podría ser mejor, pero la comida es buena",
        Fecha: "2024-05-05",
        Nombre: "Luis Ramírez",
      },
      {
        calificacion: 4,
        comentario: "Me encanta la variedad del menú",
        Fecha: "2024-05-06",
        Nombre: "Sofía Torres",
      },
      {
        calificacion: 5,
        comentario: "Los precios son razonables para la calidad de la comida",
        Fecha: "2024-05-07",
        Nombre: "Miguel Sánchez",
      },
      {
        calificacion: 2,
        comentario: "La comida es buena, pero el lugar es un poco ruidoso",
        Fecha: "2024-05-08",
        Nombre: "Isabel Fernández",
      },
      {
        calificacion: 3,
        comentario: "El personal es amable y la comida es excelente",
        Fecha: "2024-05-09",
        Nombre: "José García",
      },
      {
        calificacion: 4,
        comentario: "La comida es promedio, pero el servicio es rápido",
        Fecha: "2024-05-10",
        Nombre: "Patricia Rodríguez",
      },
      {
        calificacion: 1,
        comentario: "El lugar es limpio y la comida es deliciosa",
        Fecha: "2024-05-11",
        Nombre: "Roberto Hernández",
      },
      {
        calificacion: 2,
        comentario: "La comida es buena, pero el lugar es un poco pequeño",
        Fecha: "2024-05-12",
        Nombre: "Daniela Castro",
      },
      {
        calificacion: 3,
        comentario: "El servicio es excelente y la comida es sabrosa",
        Fecha: "2024-05-13",
        Nombre: "Raúl Morales",
      },
      {
        calificacion: 4,
        comentario: "La comida es deliciosa, pero el servicio podría ser mejor",
        Fecha: "2024-05-14",
        Nombre: "Lucía Ruiz",
      },
      {
        calificacion: 5,
        comentario: "El lugar es agradable y la comida es buena",
        Fecha: "2024-05-15",
        Nombre: "Javier Ortiz",
      },
      {
        calificacion: 1,
        comentario: "El servicio es rápido y la comida es sabrosa",
        Fecha: "2024-05-16",
        Nombre: "Laura Muñoz",
      },
      {
        calificacion: 2,
        comentario: "La comida es promedio, pero el lugar es agradable",
        Fecha: "2024-05-17",
        Nombre: "Francisco Díaz",
      },
      {
        calificacion: 3,
        comentario: "El servicio es lento, pero la comida es buena",
        Fecha: "2024-05-18",
        Nombre: "Marta Jiménez",
      },
      {
        calificacion: 4,
        comentario: "La comida es deliciosa y el lugar es limpio",
        Fecha: "2024-05-19",
        Nombre: "Pedro Medina",
      },
      {
        calificacion: 5,
        comentario: "El servicio es excelente, pero la comida es promedio",
        Fecha: "2024-05-20",
        Nombre: "Gloria Chávez",
      },
      {
        calificacion: 1,
        comentario: "La comida es sabrosa y los precios son razonables",
        Fecha: "2024-05-21",
        Nombre: "Adriana Romero",
      },
      {
        calificacion: 2,
        comentario: "El lugar es ruidoso, pero la comida es buena",
        Fecha: "2024-05-22",
        Nombre: "Fernando Vargas",
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
        nombre: "Plato de pollo", // MAX 27 CHARACHETERS  
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
    MetodosPago: ["cash", "transferencia", "pago móvil", "tarjeta"],
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
        calificacion: 4.5,
        comentario: "Excelente servicio, la comida es deliciosa",
        Fecha: "2024-05-01",
        Nombre: "Juan Pérez",
      },
    ],
    ordenesCantidad: "190",
    urlImagenLogo:
      "https://i.imgur.com/e1O8gVl.jpeg",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 3,
        nombre: "Hamburguesa Especial",
        precioAntes: "8.00",
        precioVenta: "5.60",
        cantidadDisponible: "5",
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
        Fecha: "2024-05-03",
        Nombre: "Carlos Martínez",
      },
    ],
    ordenesCantidad: "300",
    urlImagenLogo:
      "https://i.imgur.com/uzJ5Bts.png",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 5,
        nombre: "Croissant de Almendra",
        precioAntes: "3.00",
        precioVenta: "1.80",
        cantidadDisponible: "5",
        diaRetiro: "Hoy",
        horaRetiro: "10:30 - 15:00",
        descripcion:
          "Croissants recién horneados con relleno de crema de almendras",
        categoria: ["Panadería"],
      },
      {
        id: 6,
        nombre: "Capuchino Clásico",
        precioAntes: "2.50",
        precioVenta: "1.50",
        cantidadDisponible: "3",
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
        Fecha: "2024-05-02",
        Nombre: "María López",
      },
    ],
    ordenesCantidad: "215",
    urlImagenLogo:
      'https://i.imgur.com/fbY1m1T.png',
    urlImagenPortada:
      "https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 7,
        nombre: "Torta de Chocolate",
        precioAntes: "12.00",
        precioVenta: "8.00",
        cantidadDisponible: "4",
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
        cantidadDisponible: "3",
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
        Fecha: "2024-05-04",
        Nombre: "Ana González",
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
        cantidadDisponible: "2",
        diaRetiro: "Hoy",
        horaRetiro: "15:25 - 19:55",
        descripcion:
          "Emparedado de pollo grillado con lechuga, tomate y mayonesa en pan artesanal",
        categoria: ["Comida rápida", "Caja sorpresa"],
      },
      {
        id: 10,
        nombre: "Batido de Frutas",
        precioAntes: "4.00",
        precioVenta: "2.40",
        cantidadDisponible: "5",
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
        Fecha: "2024-05-05",
        Nombre: "Luis Ramírez",
      },
    ],
    ordenesCantidad: "305",
    urlImagenLogo:
      "https://i.imgur.com/eLmDidn.jpeg",
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
        cantidadDisponible: "2",
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
        Fecha: "2024-05-04",
        Nombre: "Tomás Pérez",
      },
    ],
    ordenesCantidad: "250",
    urlImagenLogo:
      "https://i.imgur.com/WrKMtS8.png",
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
        cantidadDisponible: "2",
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
        Fecha: "2024-05-04",
        Nombre: "Tomás Pérez",
      },
    ],
    ordenesCantidad: "170",
    urlImagenLogo:
      "https://i.imgur.com/Re0qssc.png",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Productos: [
      {
        id: 15,
        nombre: "Pabellón Criollo",
        precioAntes: "10.00",
        precioVenta: "6.00",
        cantidadDisponible: "1",
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
        Fecha: "2024-05-06",
        Nombre: "Sofía Torres",
      },
    ],
    ordenesCantidad: "195",
    urlImagenLogo:
      "https://i.imgur.com/SzSeEM4.png",
    urlImagenPortada:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        cantidadDisponible: "4",
        diaRetiro: "Hoy",
        horaRetiro: "08:00 - 11:00",
        descripcion:
          "Empanada de masa crujiente rellena de carne picada y especias",
        categoria: ["Desayuno"],
      },
    ],
  },
];

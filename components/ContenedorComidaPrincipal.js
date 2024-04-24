import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import TagDisponibilidadProducto from "./TagDisponibilidadProducto";
import BotonFavoritos from "./BotonFavoritos";

const { width } = Dimensions.get("window");
const anchoTarjeta = width * 0.65; //dimensionsAPI: cambiar dependiendo a tamano de pantalla

const InformacionRestaurante = ({
  nombre,
  cocina,
  distancia,
  calificacion,
  cantidadRevisiones,
  horario,
  precioAntes,
  precioDespues,
  urlImagenLogo,
  urlImagenPortada,
}) => (
  <View style={estilos.contenedorTarjeta}>
    <ImageBackground
      resizeMode="cover"
      source={{ uri: urlImagenPortada }}
      style={estilos.imagenRestaurante}
    >
      <View style={estilos.contenedorTope}>
        <TagDisponibilidadProducto />
        <View style={{ bottom: 3 }}>
          <BotonFavoritos />
        </View>
      </View>

      <View style={estilos.detallesRestaurante}>
        <Image
          resizeMode="cover"
          source={{ uri: urlImagenLogo }}
          style={estilos.miniaturaRestaurante}
        />
        <View style={estilos.contenedorNombreRestaurante}>
          <Text style={estilos.nombreRestaurante}>
            {nombre}- <Text style={estilos.cocinaTexto}>{cocina}</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>

    <View style={estilos.detallesProducto}>
      <Text style={estilos.nombrePlato}>Plato de pollo</Text>

      <View style={estilos.contenedorInfoProducto}>
        <View>
          <View style={estilos.contenedorHorario}>
            <Text style={estilos.horario}>{horario}</Text>
          </View>
          <View style={estilos.contenedorDistanciaCalificacion}>
            <Text style={estilos.distancia}>{distancia} km</Text>
            <Text style={estilos.separador}>|</Text>
            <View style={estilos.contenedorCalificacion}>
              <FontAwesome
                name="star"
                size={12}
                color="#F6D348"
                style={{ margin: 3 }}
              />
              <Text style={estilos.calificacion}>{calificacion}</Text>
              <Text style={estilos.cantidadRevisiones}>
                {" "}
                ({cantidadRevisiones})
              </Text>
            </View>
          </View>
        </View>

        <View style={estilos.contenedorPrecio}>
          <Text style={estilos.precioAntes}>{precioAntes}</Text>
          <Text style={estilos.precioDespues}>{precioDespues}</Text>
        </View>
      </View>
    </View>
  </View>
);

const estilos = StyleSheet.create({
  contenedorTarjeta: {
    width: anchoTarjeta,
    alignSelf: "center",
    alignItems: "stretch",
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 10,
    overflow: "hidden",
  },
  imagenRestaurante: {
    width: "100%",
    height: 120,
    minHeight: 110, //dimensionsAPI (?): cambiar dependiendo a tamano de pantalla
  },
  contenedorTope: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  detallesRestaurante: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15, //dimensionsAPI : conectar con height de imagenRestaurante
    paddingHorizontal: 5,
    maxWidth: 190,
    minWidth: 150, //dimensionsAPI (?): cambiar dependiendo a tamano de pantalla
  },
  miniaturaRestaurante: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contenedorNombreRestaurante: {
    marginLeft: 10,
  },
  nombreRestaurante: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  cocinaTexto: {
    fontSize: 16,
    fontWeight: "bold", //cambiar Font (?)
  },
  detallesProducto: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nombrePlato: {
    fontWeight: "600",
    fontSize: 16,
  },
  contenedorInfoProducto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 5,
    marginBottom: 0,
  },
  contenedorHorario: {
    maxWidth: 160,
    minWidth: 100, //dimensionsAPI : cambiar dependiendo a tamano de pantalla
  },
  horario: {
    fontSize: 14,
    color: "#78828A",
  },
  contenedorDistanciaCalificacion: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "baseline",
  },
  distancia: {
    fontSize: 14,
  },
  separador: {
    marginHorizontal: 5,
  },
  contenedorCalificacion: {
    flexDirection: "row",
    alignItems: "center",
  },
  calificacion: {
    fontSize: 14,
  },
  cantidadRevisiones: {
    fontSize: 12,
    marginLeft: 2,
  },
  contenedorPrecio: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  precioAntes: {
    textDecorationLine: "line-through",
    fontSize: 14,
  },
  precioDespues: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E35940",
    top: 3,
  },
});

export default function ContenedorPrincipalComida() {
  const datosRestaurante = [
    {
      nombre: "El Coyuco",
      cocina: "Pollo en brasa y parrilla",
      distancia: "1.5",
      calificacion: "4.8",
      cantidadRevisiones: "121",
      horario: "Retira hoy entre las 3:30 pm - 5:59PM",
      precioAntes: "$ 10,00",
      precioDespues: "$ 4,80",
      urlImagenLogo:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d49a502485ec5cfa23e5bb59bc169df6a240c31ae56c86b3ad9ef8f1e5bb28ba?apiKey=64cf540a2469411fb888e6001ea1b7f2&",
      urlImagenPortada:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/164d420ddd7ad34c6edf2890f7912b900b98b29f58d00cd7cb13fba47b580fcb?apiKey=64cf540a2469411fb888e6001ea1b7f2&",
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {datosRestaurante.map((restaurante, indice) => (
        <InformacionRestaurante key={indice} {...restaurante} />
      ))}
    </View>
  );
}

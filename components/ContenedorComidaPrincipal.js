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
import { Colors } from "../constants/Colors";
import TagDisponibilidadProducto from "./UI/TagDisponibilidadProducto";
import BotonFavoritos from "./BotonFavoritos";

const { width, height } = Dimensions.get("window");
console.log(width, height);

const widthBreakpoint = 392;
const heightBreakpoint = 667;

const TagSize = width < widthBreakpoint ? "small" : "medium";
const BotonFavoritosSize = width < widthBreakpoint ? "small" : "medium";

const anchoTarjeta = width < widthBreakpoint ? width * 0.6 : width * 0.65;
const imagenRestauranteHeight = height < heightBreakpoint ? 100 : 120;
const detallesRestauranteWidth = width < widthBreakpoint ? 140 : 190;
const contenedorHorarioWidth = width < widthBreakpoint ? 155 : 190;
const logoStyleWidth = width < widthBreakpoint ? 40 : 50;
const resautantTitleTop = width < widthBreakpoint ? 8 : 0;

const marginTopDetallesRestaurante = height < heightBreakpoint ? "5%" : "7%";
const fontSizeNombreRestaurante = height < heightBreakpoint ? 16 : 18;
const fontSizePrecioAntes = width < widthBreakpoint ? 12 : 14;
const fontSizePrecioDespues = width < widthBreakpoint ? 16 : 18;
const topPrecioDespues = height < heightBreakpoint ? "0%" : "2%";
const contenedorPrecioDerecha = width < widthBreakpoint ? 0 : 10;

const horarioFontSize = width < widthBreakpoint ? 12 : 14;
const contenedorInfoProductoHeight = width < widthBreakpoint ? 50 : 60;

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
        <TagDisponibilidadProducto size={TagSize} />
        <View style={{ bottom: 3 }}>
          <BotonFavoritos size={BotonFavoritosSize} />
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
            {nombre} - <Text style={estilos.cocinaTexto}>{cocina}</Text>
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
                color={Colors.Amarillo}
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
    height: imagenRestauranteHeight,
    minHeight: 90,
  },
  contenedorTope: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  detallesRestaurante: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: marginTopDetallesRestaurante,
    paddingHorizontal: 5,
    maxWidth: detallesRestauranteWidth,
    minWidth: 150,
    top: resautantTitleTop,
  },
  miniaturaRestaurante: {
    width: logoStyleWidth,
    height: logoStyleWidth,
    borderRadius: logoStyleWidth / 2,
  },
  contenedorNombreRestaurante: {
    marginLeft: 5,
    width: "100%",
  },
  nombreRestaurante: {
    fontSize: fontSizeNombreRestaurante,
    fontWeight: "bold",
    color: "#FFF",
  },
  cocinaTexto: {
    fontSize: fontSizeNombreRestaurante - 2,
  },
  detallesProducto: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nombrePlato: {
    fontWeight: "600",
    fontSize: 16,
    bottom: 5,
  },
  contenedorInfoProducto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 5,
    marginBottom: 0,
    height: contenedorInfoProductoHeight,
  },
  contenedorHorario: {
    maxWidth: contenedorHorarioWidth,
    minWidth: 100,
  },
  horario: {
    fontSize: horarioFontSize,
    color: "#78828A",
  },
  contenedorDistanciaCalificacion: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "baseline",
  },
  distancia: {
    fontSize: horarioFontSize,
  },
  separador: {
    marginHorizontal: 5,
  },
  contenedorCalificacion: {
    flexDirection: "row",
    alignItems: "center",
  },
  calificacion: {
    fontSize: horarioFontSize,
  },
  cantidadRevisiones: {
    fontSize: 12,
    marginLeft: 2,
  },
  contenedorPrecio: {
    flexDirection: "column",
    alignItems: "flex-end",
    right: contenedorPrecioDerecha,
  },
  precioAntes: {
    textDecorationLine: "line-through",
    fontSize: fontSizePrecioAntes,
    marginBottom: "2%",
  },
  precioDespues: {
    fontSize: fontSizePrecioDespues,
    fontWeight: "bold",
    fontWeight:'800',
    color: 'black',
    top: topPrecioDespues,
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
      horario: "Retira hoy entre las 10:30pm - 11:59pm",
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

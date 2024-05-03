import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Text,
    Dimensions,
  } from "react-native";
  
  import TagDisponibilidadProducto from "./TagDisponibilidadProducto";
  import TiempoDeRetiro from "./tiempodeRetiro";
  import CalificacionesMiniatura from "./calificacionesMiniatura";
  import BotonFavoritos from "../BotonFavoritos";
  
  const { width, height } = Dimensions.get("window");
  
  const widthBreakpoint = 392;
  const heightBreakpoint = 667;
  
  const TagSize = width < widthBreakpoint ? "small" : "medium";
  const BotonFavoritosSize = width < widthBreakpoint ? "small" : "medium";
  
  const anchoTarjeta = width < widthBreakpoint ? width * 0.6 : width * 0.65;
  const imagenRestauranteHeight = height < heightBreakpoint ? 100 : 120;
  const detallesRestauranteWidth = width < widthBreakpoint ? 140 : 190;
  const contenedorHorarioWidth = width < widthBreakpoint ? 155 : 190;
  const logoStyleWidth = width < widthBreakpoint ? 40 : 50;
  
  const marginTopDetallesRestaurante = height < heightBreakpoint ? "5%" : "7%";
  const fontSizeNombreRestaurante = height < heightBreakpoint ? 15 : 18;
  const fontSizePrecioAntes = width < widthBreakpoint ? 12 : 14;
  const fontSizePrecioDespues = width < widthBreakpoint ? 16 : 18;
  const topPrecioDespues = height < heightBreakpoint ? "0%" : "2%";
  const contenedorPrecioDerecha = width < widthBreakpoint ? 0 : 10;
  const bottomContenedorHorario = width < widthBreakpoint ? 0 : 3;
  
  const horarioFontSize = width < widthBreakpoint ? 12 : 14;
  const contenedorInfoProductoHeight = width < widthBreakpoint ? 50 : 60;
  
  
  function ContenedorComidaFavoritos({
    restaurant
  }) {
    console.log(restaurant);
    return (
    <View style={estilos.contenedorTarjeta}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: urlImagenPortada }}
        style={estilos.imagenRestaurante}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(120,120,120,0.5)",
          }}
        />
        <View style={estilos.contenedorTope}>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <TagDisponibilidadProducto
              size={TagSize}
              cantidadDisponible={Productos[0].cantidadDisponible}
            />
          </View>
  
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
            <Text style={estilos.nombreRestaurante}>{nombre}</Text>
          </View>
        </View>
      </ImageBackground>
  
      <View style={estilos.detallesProducto}>
        <Text style={estilos.nombrePlato}>{Productos[0].nombre}</Text>
  
        <View style={estilos.contenedorInfoProducto}>
          <View>
            <View style={estilos.contenedorHorario}>
              <TiempoDeRetiro
                dia={Productos[0].diaRetiro}
                hora={Productos[0].horaRetiro}
                textSize={horarioFontSize}
                containerSize={"100%"}
              />
            </View>
            <View style={estilos.contenedorDistanciaCalificacion}>
              <Text style={estilos.distancia}>{distancia} km</Text>
              <Text style={estilos.separador}>|</Text>
              <CalificacionesMiniatura calificaciones={calificaciones} />
            </View>
          </View>
          <View style={estilos.contenedorPrecio}>
            <Text style={estilos.precioAntes}>{Productos[0].precioAntes}</Text>
            <Text style={estilos.precioDespues}>{Productos[0].precioVenta}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  }
  
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
      flexDirection: "row",
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
      top: 0,
      bottom: 2,
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
      bottom: bottomContenedorHorario,
    },
    horario: {
      fontSize: horarioFontSize,
      color: "#78828A",
      fontSize: 12,
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
      fontWeight: "800",
      color: "black",
      top: topPrecioDespues,
    },
  });
  
  export default ContenedorComidaFavoritos;
  
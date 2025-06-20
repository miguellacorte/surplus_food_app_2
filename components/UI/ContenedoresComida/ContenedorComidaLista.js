import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Text,
    Dimensions,
  } from "react-native";
  
  import TagDisponibilidadProducto from "./TagDisponibilidadProducto";
  import TiempoDeRetiro from "./TiempoDeRetiro";
  import CalificacionesMiniatura from "./CalificacionesMiniatura";
  import BotonFavoritos from "./BotonFavoritos";
  
  const { width, height } = Dimensions.get("window");
  const widthBreakpoint = 392;
  const heightBreakpoint = 667;
  const TagSize = width < widthBreakpoint ? "medium" : "large";
  const BotonFavoritosSize = width < widthBreakpoint ? "small" : "medium";
  const horarioFontSize = width < widthBreakpoint ? 12 : 14;
  
  export default function ContenedorComidaLista({
    nombre, // Product name
    distancia,
    calificaciones, 
    urlImagenLogo,
    urlImagenPortada,
    precioAntes, // Directly passed as a prop
    precioVenta, // Directly passed as a prop
    cantidadDisponible,
    diaRetiro,
    horaRetiro,
    restaurantId,
    restaurantName
  }) {

    const estilos = getStyles(width, height);
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const formattedPrecioAntes = formatter.format(precioAntes);
    const formattedPrecioVenta = formatter.format(precioVenta);
  
    return (
      <View style={estilos.shadow}>
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
                  cantidadDisponible={cantidadDisponible}
                />
              </View>
              <View style={{ bottom: 3 }}>
                <BotonFavoritos size={BotonFavoritosSize} restaurantId={restaurantId} />
              </View>
            </View>
  
            <View style={estilos.detallesRestaurante}>
              <Image
                resizeMode="cover"
                source={{ uri: urlImagenLogo }}
                style={estilos.miniaturaRestaurante}
              />
              <View style={estilos.contenedorNombreRestaurante}>
                <Text style={estilos.nombreRestaurante}>{restaurantName}</Text>
              </View>
            </View>
          </ImageBackground>
  
          <View style={estilos.detallesProducto}>
            <Text style={estilos.nombrePlato}>{nombre}</Text>
  
            <View style={estilos.contenedorInfoProducto}>
              <View>
                <View style={estilos.contenedorHorario}>
                  <TiempoDeRetiro
                    dia={diaRetiro}
                    hora={horaRetiro}
                    textSize={horarioFontSize}
                    containerSize="100%"
                  />
                </View>
                <View style={estilos.contenedorDistanciaCalificacion}>
                  <Text style={estilos.distancia}>{distancia} km</Text>
                  <Text style={estilos.separador}>|</Text>
                  <CalificacionesMiniatura calificaciones={calificaciones} />
                </View>
              </View>
              <View style={estilos.contenedorPrecio}>
                <Text style={estilos.precioAntes}>{formattedPrecioAntes}</Text>
                <Text style={estilos.precioDespues}>{formattedPrecioVenta}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const getStyles = (width, height) => {
    const widthBreakpoint = 392;
    const heightBreakpoint = 667;
  
    const imagenRestauranteHeight = height < heightBreakpoint ? 100 : 120;
    const detallesRestauranteWidth = width < widthBreakpoint ? 140 : 190;
    const contenedorHorarioWidth = width < widthBreakpoint ? 150 : 180;
    const logoStyleWidth = width < widthBreakpoint ? 40 : 50;
  
    const fontSizeNombreRestaurante = height < heightBreakpoint ? 18 : 21;
    const fontSizePrecioAntes = width < widthBreakpoint ? 12 : 14;
    const fontSizePrecioDespues = width < widthBreakpoint ? 16 : 18;
    const topPrecioDespues = height < heightBreakpoint ? "0%" : "2%";
    const contenedorPrecioDerecha = width < widthBreakpoint ? 1 : 3;
    const bottomContenedorHorario = width < widthBreakpoint ? 0 : 3;
  
    const contenedorInfoProductoHeight = width < widthBreakpoint ? 50 : 60;
  
    const estilos = StyleSheet.create({
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.12,
        shadowRadius: 3.84,
        elevation: 5,
      },
      contenedorTarjeta: {
        width: "90%",
        alignSelf: "center",
        alignItems: "stretch",
        borderRadius: 15,
        backgroundColor: "#FFF",
        marginBottom: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(120,120,120,0.5)",
      },
      tagContainer: {
        marginTop: 10,
        marginLeft: 10,
      },
      botonFavoritosContainer: {
        bottom: 3,
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
        marginTop: "3%",
        paddingHorizontal: 5,
        maxWidth: detallesRestauranteWidth,
        minWidth: 150,
        top: 0,
        bottom: 2,
      },
      miniaturaRestaurante: {
        width: logoStyleWidth,
        height: logoStyleWidth,
        borderRadius: logoStyleWidth * 0.5,
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
        fontWeight: "800",
        color: "black",
        top: topPrecioDespues,
      },
    });
    return estilos;
  };
  
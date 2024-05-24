import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
  Pressable,
  Modal,
  Dimensions,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { datosRestaurante } from "../../data/datosRestaurante";
import ContenedorComidaLista from "../../components/UI/ContenedoresComida/ContenedorComidaLista";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import Ubicacion from "../../components/UI/Ubicacion";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ToggleSwitch from "../../components/UI/FiltrosBusqueda/ToggleSwitch";
import CategoriesContainer from "../../components/UI/FiltrosBusqueda/CategoriesContainer";
import PaymentContainers from "../../components/UI/FiltrosBusqueda/PaymentContainers";
import SortSearch from "../../components/UI/FiltrosBusqueda/SortSearch";
import BotonesDiaRetiro from "../../components/UI/FiltrosBusqueda/BotonesDiaRetiro";
import { StatusBar } from 'react-native';

const sliderStyle = Platform.OS === "ios" ? { color: "green" } : {};
const CustomMarker = () => <View style={styles.customMarker} />;
const ITEMS_PER_PAGE = 10;

const FilterButton = ({ toggleModal }) => (
  <View style={{ right: "50%" }}>
    <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
      <FontAwesome
        name="sliders"
        size={20}
        color={Colors.VerdeOscuro}
        style={styles.icon}
      />
      <Text style={{ color: Colors.VerdeOscuro }}>Flitrar</Text>
    </TouchableOpacity>
  </View>
);

const ModalHeader = ({ setModalVisible, modalVisible }) => (
  <View style={styles.modalHeader}>
    <Text style={styles.modalHeaderText}>Filtro de búsqueda</Text>
    <TouchableOpacity
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Ionicons name="close" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

function Lista({ data, handleSortOptionChange, sortOption, searchTerm }) {
  const [page, setPage] = useState(1);
  const [sortedData, setSortedData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    //Check if the data is available
    if (!data || !debouncedSearchTerm) {
      setFilteredData(data || []);
      return;
    }

    // Flatten the data so that each product has a reference to its parent restaurant
    let filtered = data.flatMap((restaurant) =>
      restaurant.Productos.map((product) => ({
        ...product,
        restaurantId: restaurant.id, // clearly naming restaurant ID
        restaurantName: restaurant.nombre,
        distancia: restaurant.distancia,
        urlImagenLogo: restaurant.urlImagenLogo,
        urlImagenPortada: restaurant.urlImagenPortada,
        calificaciones: restaurant.calificaciones,
        cocina: restaurant.cocina,
        categoria: restaurant.categoria,
      }))
    );

    // filter the data by the search term
    filtered = filtered.filter(
      (item) =>
        item.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        item.cocina.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        item.categoria.some((cat) =>
          cat.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        ) ||
        item.restaurantName
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        item.descripcion
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  }, [data, debouncedSearchTerm]);

  useEffect(() => {
    if (!filteredData) {
      return; // If 'data' is undefined, exit the useEffect hook early
    }

    let flattenedProducts;

    // Check if the data needs to be flattened(since if you searhc for a product, the data is already flattened)
    if (filteredData[0] && filteredData[0].Productos) {
      flattenedProducts = filteredData.flatMap((restaurant) =>
        (restaurant.Productos || []).map((product) => ({
          ...product,
          restaurantId: restaurant.id, // clearly naming restaurant ID
          restaurantName: restaurant.nombre,
          distancia: restaurant.distancia,
          urlImagenLogo: restaurant.urlImagenLogo,
          urlImagenPortada: restaurant.urlImagenPortada,
          calificaciones: restaurant.calificaciones,
        }))
      );
    } else {
      // If the data is already flattened, use it as is
      flattenedProducts = filteredData;
    }

    switch (sortOption) {
      case "Relevancia":
        flattenedProducts = flattenedProducts
          .filter((product) => Number(product.distancia) <= 2)
          .filter((product) => {
            const avgRating =
              product.calificaciones.reduce(
                (acc, curr) => acc + curr.calificacion,
                0
              ) / product.calificaciones.length;
            return avgRating >= 3.5;
          })
          .sort(
            (a, b) =>
              Number(b.precioAntes) -
              Number(b.precioVenta) -
              (Number(a.precioAntes) - Number(a.precioVenta))
          );
        break;
      case "Distancia":
        flattenedProducts.sort(
          (a, b) => Number(a.distancia) - Number(b.distancia)
        );
        break;
      case "Precio":
        flattenedProducts.sort(
          (a, b) => Number(a.precioVenta) - Number(b.precioVenta)
        );
        break;
      case "Calificación":
        flattenedProducts.sort((a, b) => {
          const avgA =
            a.calificaciones.reduce((acc, curr) => acc + curr.calificacion, 0) /
            a.calificaciones.length;
          const avgB =
            b.calificaciones.reduce((acc, curr) => acc + curr.calificacion, 0) /
            b.calificaciones.length;
          return avgB - avgA;
        });
        break;
      default:
        // default sort
        break;
    }
    setSortedData(flattenedProducts);

    const newItems = flattenedProducts.slice(0, page * ITEMS_PER_PAGE);
    setSortedData(newItems);
  }, [sortOption, page, filteredData]);

  const handleLoadMore = () => {
    setPage(page + 1); // Increase the page count by 1 when the end is reached
  };

  return (
    <>
      <View>
        <SortSearch
          onSortOptionChange={handleSortOptionChange}
          style={{ marginBottom: 5 }}
        />
      </View>
      <FlatList
        data={debouncedSearchTerm ? filteredData : sortedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ width: "100%" }}>
            <Pressable
              key={index}
              style={styles.restaurant}
              onPress={() =>
                router.push({
                  pathname: "/Restaurants/[id]",
                  params: { id: item.restaurantId },
                })
              }
            >
              <ContenedorComidaLista
                nombre={item.nombre}
                restaurantName={item.restaurantName}
                distancia={item.distancia}
                calificaciones={item.calificaciones}
                urlImagenLogo={item.urlImagenLogo}
                urlImagenPortada={item.urlImagenPortada}
                precioAntes={item.precioAntes}
                precioVenta={item.precioVenta}
                cantidadDisponible={item.cantidadDisponible}
                diaRetiro={item.diaRetiro}
                horaRetiro={item.horaRetiro}
                restaurantId={item.restaurantId}
              />
            </Pressable>
          </View>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </>
  );
}

function Ordena({ initialSortOption }) {
  const [active, setActive] = useState("Lista");
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValues, setSliderValues] = useState([0, 24]); // 0 represents 12:00 AM and 24 represents 12:00 PM
  const [filteredData, setFilteredData] = useState(datosRestaurante);
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeDay, setActiveDay] = useState("hoy");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState(
    initialSortOption || "Relevancia"
  );
  const route = useRoute();

  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchTerm(route.params?.searchTerm || "");
  }, [route.params?.searchTerm]);

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };

  const daySwitchAnim = useRef(new Animated.Value(0)).current;

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const handleDayPress = (newActiveDay) => {
    setActiveDay(newActiveDay);
    setSelectedDay(
      newActiveDay === "Hoy" || newActiveDay === "Mañana" ? newActiveDay : null
    );

    Animated.timing(daySwitchAnim, {
      toValue: newActiveDay === "Hoy" ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const convertToTime = (value) => {
    const hours = Math.floor(value);
    const minutes = Math.floor((value - hours) * 60);
    const ampm = hours >= 12 ? "PM" : "AM";
    const twelveHourFormat = hours % 12 || 12;
    return `${twelveHourFormat}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm}`;
  };

  const onSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const applyFilters = () => {
    const [startHour, endHour] = sliderValues;

    const filteredData = datosRestaurante
      .map((restaurant) => {
        const filteredProducts = restaurant.Productos.filter((product) => {
          const productHour = parseInt(product.horaRetiro.split(":")[0], 10);

          const isWithinTimeRange =
            productHour >= startHour && productHour <= endHour;
          const isDayMatched = selectedDay
            ? product.diaRetiro === selectedDay
            : true;
          const isCategoryMatched =
            selectedCategories.length > 0
              ? product.categoria
                ? product.categoria.some((category) =>
                    selectedCategories.includes(category)
                  )
                : false
              : true;
          // console.log(productHour, startHour, endHour, selectedDay,selectedCategories, product.diaRetiro, product.categoria)
          return isWithinTimeRange && isDayMatched && isCategoryMatched;
        });

        // console.log(filteredProducts)

        return { ...restaurant, Productos: filteredProducts };
      })
      .filter((restaurant) => restaurant.Productos.length > 0);

    setFilteredData(filteredData);

    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
     <StatusBar backgroundColor="#E0E0E0" barStyle="auto" />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "87%",
            right: "10%",
            marginBottom: 10,
          }}
        >
          <Ubicacion />
          <FilterButton toggleModal={() => setModalVisible(!modalVisible)} />
        </View>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome
              name="search"
              size={20}
              color={Colors.VerdeOscuro}
              style={{ marginTop: 7, marginLeft: 10, marginRight: 9 }}
            />
            <TextInput
              style={styles.searchButton}
              placeholder="Que te provoca comer hoy?"
              onChangeText={handleInputChange}
              value={searchTerm}
            />
          </View>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <SafeAreaView style={styles.centeredView}>
              <View style={styles.modalView}>
                <ModalHeader
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <View>
                  <View>
                    <View style={styles.modalCategoryContainer}>
                      <Text style={styles.titleModaltext}>Día de retiro</Text>
                      <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <BotonesDiaRetiro
                          activeDay={activeDay}
                          handleDayPress={handleDayPress}
                        />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.titleModaltext}>Hora de retiro</Text>

                      <MultiSlider
                        values={sliderValues}
                        sliderLength={Dimensions.get("window").width - 40} // Adjust this value to fit the slider to your modal width
                        onValuesChange={(values) => setSliderValues(values)}
                        min={0}
                        max={24}
                        step={0.5}
                        allowOverlap={false}
                        snapped
                        customMarker={CustomMarker}
                        selectedStyle={{
                          backgroundColor: Colors.VerdeOscuro, // color for the selected part
                        }}
                        unselectedStyle={{
                          backgroundColor: "gray", // color for the unselected part
                        }}
                        style={sliderStyle}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{convertToTime(sliderValues[0])}</Text>
                      <Text>{convertToTime(sliderValues[1])}</Text>
                    </View>
                  </View>

                  <View style={{ marginTop: 30, marginBottom: 40 }}>
                    <View>
                      <Text style={styles.titleModaltext}>
                        Categorías de productos:
                      </Text>
                    </View>
                    <CategoriesContainer
                      selectedCategories={selectedCategories}
                      onSelectCategory={onSelectCategory}
                    />
                  </View>
                  <View>
                    <Text style={styles.titleModaltext}>Métodos de pago</Text>
                    <View>
                      <PaymentContainers />
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.pagarButton}
                  onPress={applyFilters}
                >
                  <Text
                    style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}
                  >
                    Aplicar Cambios
                  </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
        <View>
          <ToggleSwitch
            active={active}
            options={["Lista", "Mapa"]}
            onToggle={setActive}
          />
        </View>
      </View>

      <View style={styles.content}>
        {active === "Lista" ? (
          <Lista
            data={filteredData}
            handleSortOptionChange={handleSortOptionChange}
            sortOption={sortOption}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchTerm={searchTerm}
          />
        ) : (
          <Text>Content for Mapa</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    justifyContent: "flex-end",
    alignItems: "stretch",
    borderTopEndRadius: 0,
    borderBottomEndRadius: 23,
    backgroundColor: "#E0E0E0",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    paddingTop: 23,
    paddingHorizontal: 13,
  },
  header: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 29,
  },
  filterButton: {
    alignItems: "center",
    borderRadius: 32,
    borderColor: "rgba(95, 158, 94, 0.2)",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "rgba(95, 158, 94, 0.20)",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchButton: {
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    borderRadius: 32,
    borderColor: "rgba(95, 158, 94, 0.2)",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "rgba(95, 158, 94, 0.20)",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  content: {
    width: "100%",
  },
  restaurant: {
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    marginTop: "15%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#E0E0E0",
    borderTopEndRadius: 0,
    borderBottomEndRadius: 23,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalCategoryContainer: {
    marginVertical: 20,
  },
  titleModaltext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pagarButton: {
    width: "100%",
    backgroundColor: Colors.VerdeOscuro,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 30,
  },
  customMarker: {
    backgroundColor: Colors.VerdeOscuro,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

export default Ordena;

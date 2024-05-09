import React, { useState, useRef } from "react";
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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { datosRestaurante } from "../../data/datosRestaurante";
import ContenedorComidaOrdena from "../../components/UI/ContenedoresComida/ContenedorComidaOrdena";
import { router } from "expo-router";
import Ubicacion from "../../components/UI/Ubicacion";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ToggleSwitch from "../../components/UI/FiltrosBusqueda/ToggleSwitch";
import CategoriesContainer from "../../components/UI/FiltrosBusqueda/CategoriesContainer";
import PaymentContainers from "../../components/UI/FiltrosBusqueda/PaymentContainers";
import SortSearch from "../../components/UI/FiltrosBusqueda/SortSearch";
import BotonesDiaRetiro from "../../components/UI/FiltrosBusqueda/BotonesDiaRetiro";

const sliderStyle = Platform.OS === "ios" ? { color: "green" } : {};

const CustomMarker = () => <View style={styles.customMarker} />;

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

const SearchButton = () => (
  <TouchableOpacity style={styles.searchButton}>
    <FontAwesome name="search" size={20} color={Colors.VerdeOscuro} />
    <Text style={{ color: Colors.VerdeOscuro }}>
      {" "}
      Que te provoca comer hoy?{" "}
    </Text>
  </TouchableOpacity>
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

const Lista = ({ data }) => (
  <>
    <SortSearch />
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={{ width: "100%" }}>
          <Pressable
            key={index}
            style={styles.restaurant}
            onPress={() =>
              router.push({
                pathname: "/Restaurants/[id]",
                params: { id: item.id },
              })
            }
          >
            <ContenedorComidaOrdena
              id={item.id}
              nombre={item.nombre}
              distancia={item.distancia}
              calificaciones={item.calificaciones}
              urlImagenLogo={item.urlImagenLogo}
              urlImagenPortada={item.urlImagenPortada}
              Productos={item.Productos}
            />
          </Pressable>
        </View>
      )}
    />
  </>
);

function Ordena() {
  const [active, setActive] = useState("Lista");
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValues, setSliderValues] = useState([0, 24]); // 0 represents 12:00 AM and 24 represents 12:00 PM
  const [filteredData, setFilteredData] = useState(datosRestaurante);
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeDay, setActiveDay] = useState("hoy");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const daySwitchAnim = useRef(new Animated.Value(0)).current;

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
    // console.log(selectedCategories);
  };

  const applyFilters = () => {
    const [startHour, endHour] = sliderValues;

    const filteredData = datosRestaurante
      .map((restaurant) => {
        const filteredProducts = restaurant.Productos.filter((product) => {
          const productHour = parseInt(product.horaRetiro.split(":")[0]);

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
          <SearchButton />
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
          <Lista data={filteredData} />
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
    width: "100%",
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

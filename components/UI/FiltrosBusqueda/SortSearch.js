import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Modal, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";

const SortSearch = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState("Relevancia");
  

  const options = ["Relevancia", "Distancia", "Precio", "Calificación"];

const handleSortOptionChange = (option) => {
  setSortOption(option);
  setModalVisible(false);
  props.onSortOptionChange(option); // call the prop function
};

  const CloseButton = () => (
    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => setModalVisible(false)}
    >
      <MaterialIcons name="close" size={24} color={Colors.VerdeOscuro} />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Ordernar por:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>{sortOption}</Text>
          <MaterialIcons
            name="expand-more"
            size={24}
            color={Colors.VerdeOscuro}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <CloseButton />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent:'center', borderBottomWidth:1, marginBottom: 5}}>
              <Text style={styles.modalText}>Ordenar por:</Text>
            </View>

            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleSortOptionChange(option)}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons name={sortOption === option ? "radio-button-checked" : "radio-button-unchecked"} size={24} color={Colors.VerdeOscuro} />
                  <Text style={[styles.optionText, sortOption === option && {fontWeight: 'bold'}]}>{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  optionButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    
  },
  optionText: {
    fontSize: 16,
    color: Colors.VerdeOscuro,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.VerdeOscuro,
  },
  centeredView: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16, fontWeight: 'bold'
  },
});

export default SortSearch;

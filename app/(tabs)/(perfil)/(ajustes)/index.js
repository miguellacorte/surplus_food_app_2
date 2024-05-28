import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../constants/Colors';

const Ajustes = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => navigateToScreen('InformacionPersonal')}
      >
        <Text style={styles.rowText}>Información Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => navigateToScreen('MisUbicaciones')}
      >
        <Text style={styles.rowText}>Mis Ubicaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => navigateToScreen('Notificaciones')}
      >
        <Text style={styles.rowText}>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => navigateToScreen('Informacionlegal')}
      >
        <Text style={styles.rowText}>Información legal</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => {/* Add your logout logic here */}}
      >
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  row: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: Colors.VerdeOscuro,
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
   
    fontSize: 16,
  },
});

export default Ajustes;

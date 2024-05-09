import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

const BotonesDiaRetiro = ({ activeDay, handleDayPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, activeDay === 'Hoy' && styles.activeButton]}
        onPress={() => handleDayPress('Hoy')}
      >
        <Text style={[styles.text, activeDay === 'Hoy' && styles.activeText]}>Hoy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeDay === 'Mañana' && styles.activeButton]}
        onPress={() => handleDayPress('Mañana')}
      >
        <Text style={[styles.text, activeDay === 'Mañana' && styles.activeText]}>Mañana</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 8,
    backgroundColor: 'rgba(95, 158, 94, 0.10)',
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: Colors.VerdeOscuro,
  },
  text: {
    color: '#4F4F4F',
  },
  activeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default BotonesDiaRetiro;
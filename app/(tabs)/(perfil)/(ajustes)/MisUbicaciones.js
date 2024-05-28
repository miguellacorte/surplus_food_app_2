import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MisUbicaciones = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Editar Información Personal</Text>
            {/* Add your content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MisUbicaciones;
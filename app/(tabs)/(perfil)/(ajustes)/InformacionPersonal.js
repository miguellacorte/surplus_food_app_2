import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformacionPersonal = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Personal Information</Text>
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

export default InformacionPersonal;
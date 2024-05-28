import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformacionLegal = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Información Legal</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default InformacionLegal;
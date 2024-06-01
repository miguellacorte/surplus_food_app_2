import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserOrders from '../../../components/UI/Perfil/UserOrders';

const TusPedidos = () => {
    return (
        <View style={styles.container}>
            <UserOrders displayStyle='fullDisplay' />
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

export default TusPedidos;
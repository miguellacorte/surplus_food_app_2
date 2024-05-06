// cart.js
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import {CartContext} from "../../store/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
    const { cart } = useContext(CartContext);

    console.log('cart:',cart);

    return (
        <SafeAreaView>
            <Text>Cart</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.nombre}</Text>
                        <Text>{item.precioVenta}</Text>
                        {/* Render more item properties if needed */}
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Cart;
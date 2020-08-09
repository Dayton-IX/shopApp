import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

function ProductsNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName='ProductsOverview'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
            }}
        >
            <Stack.Screen name='ProductsOverview' component={ProductsOverviewScreen} options={{headerTitle: 'All Products'}} />
        </Stack.Navigator>
    );
}

// const ProductsNavigator = createStackNavigator({
//     ProductsOverviewScreen: ProductsOverviewScreen
// }, {
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//         },
//         headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
// });

export default ProductsNavigator;
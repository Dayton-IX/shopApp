import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';

const rootReducer = combineReducers({
	products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  	return (
		<Provider store={store} >
			<NavigationContainer>
				<ShopNavigator />
			</NavigationContainer>
		</Provider>
  	);
}

const styles = StyleSheet.create({
	
});

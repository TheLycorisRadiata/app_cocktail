import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons';
import RandomCocktail from './views/RandomCocktail';
import YourCocktails from './views/YourCocktails';

const Tabs = createBottomTabNavigator();

function App()
{
	return (
		<NavigationContainer>
			<Tabs.Navigator lazy={false} tabBarOptions={{ activeTintColor: '#E5778E', inactiveTintColor: '#000', 
					activeBackgroundColor: '#EFD777', inactiveBackgroundColor: '#EFD777' }}>

				<Tabs.Screen name="random" component={RandomCocktail} 
					options={{ 
					tabBarLabel: 'Random Cocktail', 
					tabBarIcon: ({ color, size }) => <FontAwesome5 name={'cocktail'} color={color} size={size} /> }} 
				/>

				<Tabs.Screen name="cocktails" component={YourCocktails} 
					options={{ 
					tabBarLabel: 'Your Cocktails', 
					tabBarIcon: ({ color, size }) => <FontAwesome5 name={'glass-cheers'} color={color} size={size} /> }} 
				/>

			</Tabs.Navigator>
		</NavigationContainer>
	);
}

export default App;


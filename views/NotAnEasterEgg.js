import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import style from '../assets/style/General.style';

const NotAnEasterEgg = () => 
{
	const [is_easter_egg_found, set_is_easter_egg_found] = useState(false);
	const [data, set_data] = useState({ x: 0, y: 0, z: 0 });

	const cocktail = 
	{
		strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg',
		strDrink: 'Vodka Martini',
		strGlass: 'Cocktail glass',
		ingredients: 
			[
				'1 1/2 oz Vodka',
				'3/4 oz Dry Vermouth',
				'1 Olive'
			],
		strInstructions: 'Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.'
	};

	useEffect(() => 
	{
		Accelerometer.addListener(accelerometer_data => 
		{
        		set_data(accelerometer_data);
	      	});

		Accelerometer.setUpdateInterval(1000);
	}, []);

	useEffect(() => 
	{
		if (data.x >= 0.7 || data.x >= -0.7)
			set_is_easter_egg_found(true);
	}, [data]);

	return (
		<View style={{ flex: 1, backgroundColor: '#F4A261', padding: 50 }}>
			<ScrollView style={style.cocktail_container}>
				<Text>x: {data.x}</Text>
				<Text>y: {data.y}</Text>
				<Text>z: {data.z}</Text>
				{!is_easter_egg_found ? <Text>I told you there's no easter egg.</Text> :

				<View style={style.cocktail_content}>
					<Image style={style.img} source={{ uri: cocktail.strDrinkThumb }} />
					<Text style={[style.cocktail_name, style.cocktail_detail1]}>{cocktail.strDrink}</Text>
					<Text style={style.cocktail_detail1}>Glass: {cocktail.strGlass}</Text>
					{cocktail.ingredients.map((element, index) => <Text key={index}>{element}</Text>)}
					<Text style={style.cocktail_detail2}>{cocktail.strInstructions}</Text>
				</View>}
			</ScrollView>
		</View>
	);
};

export default NotAnEasterEgg;


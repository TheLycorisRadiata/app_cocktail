import React, {useState, useEffect} from 'react';
import {Alert, View, ScrollView, Text, Image} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import style from '../assets/style/General.style';

const THRESHOLD = 500;

class ShakeEventExpo
{
	static addListener(handler)
	{
		let last_x, last_y, last_z;
		let last_update = 0;

		Accelerometer.addListener(accelerometer_data => 
		{
			let { x, y, z } = accelerometer_data;
			let curr_time = Date.now();

			if ((curr_time - last_update) > 100)
			{
				let diff_time = (curr_time - last_update);
				last_update = curr_time;
				let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diff_time * 10000;

				if (speed > THRESHOLD)
				{
					handler();
				}

				last_x = x;
				last_y = y;
				last_z = z;
			}
		});
	}

	static removeListener()
	{
		Accelerometer.removeAllListeners()
	}
};

const NotAnEasterEgg = () => 
{
	const [is_easter_egg_found, set_is_easter_egg_found] = useState(false);

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
		ShakeEventExpo.addListener(() => 
		{
			Alert.alert('Shaken,', 'Not stirred.');
			set_is_easter_egg_found(true);
			ShakeEventExpo.removeListener();
		});
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: '#000', padding: 50 }}>
			<ScrollView style={style.cocktail_container}>
				{!is_easter_egg_found ? <Text style={style.white_txt}>I told you there's no easter egg.</Text> :

				<View style={style.cocktail_content}>
					<Image style={style.img} source={{ uri: cocktail.strDrinkThumb }} />
					<Text style={[style.cocktail_name, style.cocktail_detail1, style.white_txt]}>{cocktail.strDrink}</Text>
					<Text style={[style.cocktail_detail1, style.white_txt]}>Glass: {cocktail.strGlass}</Text>
					{cocktail.ingredients.map((element, index) => <Text key={index} style={style.white_txt}>{element}</Text>)}
					<Text style={[style.cocktail_detail2, style.white_txt]}>{cocktail.strInstructions}</Text>
				</View>}
			</ScrollView>
		</View>
	);
};

export default NotAnEasterEgg;


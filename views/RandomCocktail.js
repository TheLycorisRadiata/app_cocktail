import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import style from '../assets/style/General.style';

const RandomCocktail = () => 
{
    const [cocktail, set_cocktail] = useState(null);
    const [ingredients, set_ingredients] = useState([]);

    const initialize_ingredients = (cocktail_data) => 
    {
        const list_ingredients = [];

        if (cocktail_data.strMeasure1 !== null)
            list_ingredients.push(cocktail_data.strMeasure1 + cocktail_data.strIngredient1);
        if (cocktail_data.strMeasure2 !== null)
            list_ingredients.push(cocktail_data.strMeasure2 + cocktail_data.strIngredient2);
        if (cocktail_data.strMeasure3 !== null)
            list_ingredients.push(cocktail_data.strMeasure3 + cocktail_data.strIngredient3);
        if (cocktail_data.strMeasure4 !== null)
            list_ingredients.push(cocktail_data.strMeasure4 + cocktail_data.strIngredient4);
        if (cocktail_data.strMeasure5 !== null)
            list_ingredients.push(cocktail_data.strMeasure5 + cocktail_data.strIngredient5);
        if (cocktail_data.strMeasure6 !== null)
            list_ingredients.push(cocktail_data.strMeasure6 + cocktail_data.strIngredient6);
        if (cocktail_data.strMeasure7 !== null)
            list_ingredients.push(cocktail_data.strMeasure7 + cocktail_data.strIngredient7);
        if (cocktail_data.strMeasure8 !== null)
            list_ingredients.push(cocktail_data.strMeasure8 + cocktail_data.strIngredient8);
        if (cocktail_data.strMeasure9 !== null)
            list_ingredients.push(cocktail_data.strMeasure9 + cocktail_data.strIngredient9);
        if (cocktail_data.strMeasure10 !== null)
            list_ingredients.push(cocktail_data.strMeasure10 + cocktail_data.strIngredient10);
        if (cocktail_data.strMeasure11 !== null)
            list_ingredients.push(cocktail_data.strMeasure11 + cocktail_data.strIngredient11);
        if (cocktail_data.strMeasure12 !== null)
            list_ingredients.push(cocktail_data.strMeasure12 + cocktail_data.strIngredient12);
        if (cocktail_data.strMeasure13 !== null)
            list_ingredients.push(cocktail_data.strMeasure13 + cocktail_data.strIngredient13);
        if (cocktail_data.strMeasure14 !== null)
            list_ingredients.push(cocktail_data.strMeasure14 + cocktail_data.strIngredient14);
        if (cocktail_data.strMeasure15 !== null)
            list_ingredients.push(cocktail_data.strMeasure15 + cocktail_data.strIngredient15);

        return list_ingredients;
    };

    async function handle_press()
    {
        await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(json =>
        {
            const cocktail_data = json.drinks[0];
            set_cocktail(cocktail_data);
            set_ingredients(initialize_ingredients(cocktail_data));
        });
    }

    return (
        <View style={style.main_container}>
            <TouchableOpacity style={style.btn} onPress={handle_press}>
                <Text style={style.btn_txt}>Randomize</Text>
            </TouchableOpacity>

            <ScrollView style={style.cocktail_container}>
                {cocktail === null ? <Text>No cocktail.</Text> :

                <View style={style.cocktail_content}>
                    <Image style={style.img} source={{ uri: cocktail.strDrinkThumb }} />
                    <Text style={[style.cocktail_name, style.cocktail_detail1]}>{cocktail.strDrink}</Text>
                    <Text style={style.cocktail_detail1}>Glass: {cocktail.strGlass}</Text>
                    {ingredients.map((element, index) => <Text key={index}>{element}</Text>)}
                    <Text style={style.cocktail_detail2}>{cocktail.strInstructions}</Text>
                </View>}
            </ScrollView>
        </View>
    );
};

export default RandomCocktail;


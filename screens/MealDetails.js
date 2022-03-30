import { View, Text, Image, StyleSheet } from "react-native";
import MealDetails from "../component/MealDetails";
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({ route }) {

    const mealId = route.params.mealId;



    //هنا منكتبش اقواس اوبجيكت عشان عيب 
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);


    console.log(selectedMeal.id);
    return (
        <View>

            <View>
                <Image source={{ uri: selectedMeal.imageUrl }} />
                <Text>{selectedMeal.title}</Text>
            </View>

            {/* <Text style={style.textStyle}>Meal Details-{mealId}</Text> */}
            <View >
                <MealDetails
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    duration={selectedMeal.duration}
                />
                <Text style={style.textStyle}>Ingredients</Text>
                {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient} style={style.textStyle}>{ingredient}</Text>))}
                <Text style={style.textStyle}>Steps</Text>
                {selectedMeal.steps.map((step) => (<Text key={step} style={style.textStyle}>{step}</Text>))}
            </View>
        </View>

    );
}

export default MealDetailsScreen;

const style = StyleSheet.create({
    textStyle: {
        color: 'white',
    },
});
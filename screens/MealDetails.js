import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import ListDetailsItem from "../component/ListDetailsItem";
import MealDetails from "../component/MealDetails";
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({ route }) {

    const mealId = route.params.mealId;



    //هنا منكتبش اقواس اوبجيكت عشان عيب 
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);


    console.log(selectedMeal.id);
    return (
        <ScrollView>
            <View>

                <View>
                    <View style={style.imageContainer}>
                        <Image style={style.image} source={{ uri: selectedMeal.imageUrl }} />

                    </View>
                    <Text style={style.title}>{selectedMeal.title}</Text>
                </View>

                {/* <Text style={style.textStyle}>Meal Details-{mealId}</Text> */}
                <View >
                    <MealDetails
                        complexity={selectedMeal.complexity}
                        affordability={selectedMeal.affordability}
                        duration={selectedMeal.duration}
                    />
                    <Text style={style.bodyText}>Ingredients</Text>
                    <ListDetailsItem data={selectedMeal.ingredients} />
                    {/* {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient} style={style.textStyle}>{ingredient}</Text>))} */}
                    <Text style={style.bodyText}>Steps</Text>
                    {/* {selectedMeal.steps.map((step) => (<Text key={step} style={style.textStyle}>{step}</Text>))} */}
                    <ListDetailsItem data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>


    );
}

export default MealDetailsScreen;

const style = StyleSheet.create({

    imageContainer: {
        width: '100%',
        height: Dimensions.get('window').height / 2,
        marginBottom: 6,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },
    subTitle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',

    },
    bodyText: {
        // marginHorizontal: 16,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginBottom: 4,
    },
    textStyle: {
        color: 'white',
    },
});
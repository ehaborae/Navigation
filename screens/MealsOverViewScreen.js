import { View, Text, StyleSheet, FlatList } from 'react-native';
import Meal from '../component/MealComponent';
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';

function MealsOverViewScreens({ route }) {
    const catId = route.params.categoryId;
    const catTitle = route.params.categoryTitle;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        return (
            <Meal title={itemData.item.title} />
        );
    }

    return (
        <View style={
            style.container
        }>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}

            />
        </View>
    );
}

export default MealsOverViewScreens;

const style = StyleSheet.create({

    container: {

        flex: 1,
        padding: 16,
    },
});
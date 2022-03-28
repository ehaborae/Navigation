import { View, Text, StyleSheet, FlatList } from 'react-native';
import Meal from '../component/MealComponent';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';


function MealsOverViewScreens({ route, navigation }) {
    const catId = route.params.categoryId;
    const catTitle = route.params.categoryTitle;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(
        () => {
            const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

            navigation.setOptions({
                title: categoryTitle,
            });
        },
        [catId, navigation]
    );



    function renderMealItem(itemData) {

        const item = itemData.item;

        const mealItemProps = {
            id:item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        return (
            <Meal
                {...mealItemProps}
            />
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
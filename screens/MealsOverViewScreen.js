import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function MealsOverViewScreens({ route }) {
    const catId = route.params.categoryId;
    const catTitle = route.params.categoryTitle;

    return (
        <View style={
            style.container
        }>
            <Text> {catTitle} Meals OverView Screens {catId} </Text>
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
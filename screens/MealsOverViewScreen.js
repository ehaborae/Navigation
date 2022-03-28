import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function MealsOverViewScreens() {

    return (
        <View style={
            style.container
        }>
            <Text> Meals OverView Screens</Text>
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
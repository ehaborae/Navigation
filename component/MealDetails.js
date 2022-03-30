import { View, Text, StyleSheet } from 'react-native';


function MealDetails({ duration, complexity, affordability }) {
    return (
        <View style={style.details}>
            <Text style={style.detailItem} >{duration} : m</Text>
            <Text style={style.detailItem} >{complexity.toUpperCase()}</Text>
            <Text style={style.detailItem} >{affordability.toUpperCase()}</Text>

        </View>
    );
}

export default MealDetails;


const style = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        color: 'white',
        marginHorizontal: 4,
        fontSize: 12,
    }
});
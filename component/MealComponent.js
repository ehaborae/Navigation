import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Meal({ id, title, imageUrl, duration, complexity, affordability }) {
    //ليه ده لو جوا الدوسة مبيشتغلش
    const navigation = useNavigation();

    function mealPressedHandler() {

        navigation.navigate('MealDetail', {
            mealId: id,
        });
    }

    return (
        <View style={style.meal}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={mealPressedHandler}
            >
                <View >
                    <Image style={style.image} source={{ uri: imageUrl }} />
                    <Text style={style.title} >{title}</Text>
                </View>
                <View style={style.details}>
                    <Text style={style.detailItem} >{duration} : m</Text>
                    <Text style={style.detailItem} >{complexity.toUpperCase()}</Text>
                    <Text style={style.detailItem} >{affordability.toUpperCase()}</Text>

                </View>
            </Pressable>
        </View>
    );
}


export default Meal;


const style = StyleSheet.create({
    meal: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 1,
    },
    image: {
        width: '100%',
        height: 200,


    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
});
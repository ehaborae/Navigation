import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={
            style.gridItem
        }>
            <Pressable
                style={
                    [style.button,
                    { backgroundColor: color }]
                }
                android_ripple={{ color: '#ccc' }}
                onPress={onPress}
            >
                <View style={
                    style.innerContainer
                }>
                    <Text style={style.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;


const style = StyleSheet.create({
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 1,
        overflow: 'hidden',
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 16,
        // marginHorizontal: 16,
        // height: 150,
        // borderRadius: 8,
        // elevation: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

import { FlatList, StyleSheet, View } from 'react-native';
import CategoryGridTile from '../component/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


function renderCategoryItem(itemData) {
    return (

        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
        />
    );
}


function CategoriesScreen() {
    return (
        <View style={
            style.screenStyle
        }>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>

    );

}
export default CategoriesScreen;

const style = StyleSheet.create({
    screenStyle: {
        flex: 1,
    },
});
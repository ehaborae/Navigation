import { Text, View, StyleSheet } from 'react-native';

function ListDetailsItem({ data }) {
    return (
        data.map((dataPoint) => (
            <View style={style.listItem}>
                <Text key={dataPoint} style={style.textStyle}>{dataPoint}</Text>
            </View>
        ))
    );
}

export default ListDetailsItem;

const style = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    textStyle: {
        color: '#351401',
        textAlign:'center',
    },
});
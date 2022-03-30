import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ onPress }) {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: 'grey' }}
            style={style.pressable}
        >
            <Ionicons name='heart' style={style.icon} size={16} />
        </Pressable>
    );
}

export default IconButton;


const style = StyleSheet.create({

    icon: {
        color: '#ccc',
    },
    pressable: {
        padding: 4,
        borderRadius: 8,
        overflow: 'hidden',
        color: 'red'

    },
});
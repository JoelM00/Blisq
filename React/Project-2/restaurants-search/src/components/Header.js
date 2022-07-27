
import {Text, View, StyleSheet} from 'react-native'

export default function Header() {
    return (
        <View>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldHeader}>Delicious meal!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lightHeader: {
        fontSize: 35,
        marginTop: 60,
        marginHorizontal: 25,
    },
    boldHeader: {
        fontSize: 40,
        marginHorizontal: 25,
        fontWeight: 400,
    }
})
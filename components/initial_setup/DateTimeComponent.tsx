import { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <View style={styles.mid}>
            <Text style={styles.text}>{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
            <Text style={styles.text}>{date.toLocaleDateString([], {month: 'short', year:'numeric'})}</Text>
        </View>
    )
}

export default DateTime

const styles = StyleSheet.create({
    mid: {
        alignItems: 'center',
        height: '100%',
        fontSize: 100
    },
    text: {
        color: 'white',
        fontSize: 30
    }
})


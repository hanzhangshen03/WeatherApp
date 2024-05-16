import { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <ThemedView style={styles.mid}>
            <ThemedText>{date.toLocaleTimeString()}</ThemedText>
            <ThemedText>{date.toLocaleDateString()}</ThemedText>
        </ThemedView>
    )
}

export default DateTime

const styles = StyleSheet.create({
    mid: {
        alignItems: 'center'
    }
})


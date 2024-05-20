import { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

interface myProps {
    textColor: string;
}

export const DateTime: React.FC<myProps> = ({textColor}) => {
    var [date, setDate] = useState(new Date());

    const myTextColor: StyleProp<TextStyle> = {
        color: textColor
    }

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <View style={styles.mid}>
            <Text style={[styles.text, myTextColor]}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            <Text style={[styles.text, myTextColor]}>{date.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric'})}</Text>
        </View>
    )
}

export default DateTime

const styles = StyleSheet.create({
    mid: {
        alignItems: 'center',
        height: '100%',
        fontSize: 100,
        verticalAlign: 'middle'
    },
    text: {
        fontSize: 30
    }
})

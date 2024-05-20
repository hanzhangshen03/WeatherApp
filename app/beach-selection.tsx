import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Card, CardContent, Typography, CardActions, Button as MButton } from '@mui/material';
import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

const handleSubmit = () => {
    // go to beach page
    router.push('/beachpage');
}

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Recommended beach:
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.primary">
                Southwold Beach
            </Typography>
            <Typography variant="body2">
                Rating: 4.8
                <StarRateIcon fontSize="small" />
            </Typography>
        </CardContent>
        <CardActions>
            <MButton size="small" onClick={handleSubmit}>View weather</MButton>
        </CardActions>
    </React.Fragment>
);

export default function SearchBar() {
    const [text, setText] = useState('');

    const handleInputChange = (input: React.SetStateAction<string>) => {
        // get the text from the search bar
        setText(input);
    }

    return (
        <View style={styles.page}>
            {/* search bar */}
            <div style={styles.division}>
                <TextInput
                    style={{ height: 40, borderColor: 'grey', borderWidth: 1, color: 'white' }}
                    onChangeText={handleInputChange}
                    value={text}
                />

                <Button
                    title="Submit"
                    onPress={handleSubmit}
                />
            </div>

            {/* recommended beach */}
            <View style={styles.recommendation}>
                <Card variant="outlined">{card}</Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    division: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10
    },
    page: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    recommendation: {
        width: '100%',
        height: '40%',
        paddingTop: 10
    }
})
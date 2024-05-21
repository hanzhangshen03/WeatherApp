import { Image, View, StyleSheet, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateTime from "@/components/initial_setup/DateTimeComponent";
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Divider } from "react-native-elements";
import { IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import background from "@/assets/images/main_page_back.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { router } from "expo-router";
import FrogIcon from '@/components/initial_setup/FrogIcon';

import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const handleClick = () => {
    // go to main page
    router.push('/beachpage');
}

const handleChangeLocation = () => {
    // go to location selection page
    router.push('/location_selection');
}

export default function MainPage() {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event, value) => {
      setInputValue(value.toString().toLowerCase());
    };

    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.page}>
                {/* Rest of your content here */}
                <View style={styles.container}>
                    {/* Autocomplete component */}
                    <Autocomplete
                    freeSolo
                    options={['Cambridge']}
                    value={inputValue}
                    onInputChange={handleInputChange}
                    filterOptions={(options, state) => 
                        state.inputValue.toLowerCase().startsWith('c') ? options : []
                    }
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Cambridge" 
                            variant="standard" 
                            autoFocus  // Add autoFocus prop here
                        />
                    )}
                    style={styles.searchBar}
                />

                </View>

                {/* Frog icon */}
                <View style={styles.frogIcon}>
                    <FrogIcon />
                </View>

                <View style={styles.content}>
                    <View style={styles.info}>
                        {/* date and time */}
                        <View style={styles.dateTime}>
                            <DateTime textColor="black" />
                        </View>
                        {/* weather, temperature */}
                        <View style={styles.wt}>

                            {/* weather icon */}
                            <View style={styles.weather}>
                                <WbCloudyIcon fontSize="large" />
                            </View>

                            <Divider orientation="vertical" />
                            {/* temperature */}
                            <View style={styles.temperature_block}>
                                <Text style={styles.temperature}>21°C</Text>
                                <Text style={styles.high_low_temp}>23°C/14°C</Text>
                            </View>

                        </View>

                        {/* precipitation and wind */}
                        <View style={styles.prec_wind}>
                            <View style={styles.precipitation}>
                                <Text>2% chance of precipitation</Text>
                            </View>
                            <View style={styles.wind}>
                                <Text>14 MPH</Text>
                                <Text>NW</Text>
                            </View>

                            {/* button to go to beach page */}
                            <View style={styles.arrowContainer}>
                                <IconButton onClick={handleClick}>
                                    <ArrowForwardIosIcon fontSize="small" />
                                </IconButton>
                            </View>
                        </View>

                        {/* sun rise and sun set */}
                        <View style={styles.sun}>
                            {/* sun rise */}
                            <View style={styles.sun_rise_set}>
                                <Text>SUNRISE</Text>
                                <Text>04:57</Text>
                            </View>

                            {/* sun set */}
                            <View style={styles.sun_rise_set}>
                                <Text>SUNSET</Text>
                                <Text>20:56</Text>
                            </View>
                        </View>

                        {/* weather forecast */}
                        <View style={styles.forecast}>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Mon</TableCell>
                                            <TableCell size="small"> <WbCloudyIcon /> </TableCell>
                                            <TableCell size="small" align="right">25%</TableCell>
                                            <TableCell size="small" align="right">16°C</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Tue</TableCell>
                                            <TableCell size="small"> <WbSunnyIcon /> </TableCell>
                                            <TableCell size="small" align="right">3%</TableCell>
                                            <TableCell size="small" align="right">20°C</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Wed</TableCell>
                                            <TableCell size="small"> <ThunderstormIcon /> </TableCell>
                                            <TableCell size="small" align="right">100%</TableCell>
                                            <TableCell size="small" align="right">18°C</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Thu</TableCell>
                                            <TableCell size="small"> <AirIcon /> </TableCell>
                                            <TableCell size="small" align="right">45%</TableCell>
                                            <TableCell size="small" align="right">14°C</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Fri</TableCell>
                                            <TableCell size="small"> <WbCloudyIcon /> </TableCell>
                                            <TableCell size="small" align="right">15%</TableCell>
                                            <TableCell size="small" align="right">16°C</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    top_bar: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        display: 'flex'
    },
    location: {
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    searchBar: {
        width: '80%',
    },
    frogIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    content: {
        height: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    info: {
        width: '90%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    dateTime: {
        height: '15%',
        alignItems: 'center'
    },
    wt: {
        // style for weather, temperature
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    weather: {
        height: '100%',
        width: '50%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    temperature_block: {
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    },
    temperature: {
        height: '50%',
        fontSize: 30,
        alignContent: 'flex-end',
        textAlign: 'center'
    },
    high_low_temp: {
        height: '30%',
        fontSize: 15,
        alignContent: 'flex-start',
        textAlign: 'center'
    },
    prec_wind: {
        height: '15%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', // Center the child elements horizontally
        alignItems: 'center', // Center the child elements vertically
    },
    precipitation: {
        width: '50%', // Adjust the width as needed
        textAlign: 'center',
    },
    wind: {
        width: '50%', // Adjust the width as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowContainer: {
        width: '20%', // Adjust the width as needed
        textAlign: 'center',
    },
    sun: {
        height: '5%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    sun_rise_set: {
        height: '100%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forecast: {
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});

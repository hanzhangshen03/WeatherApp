import { Image, View, StyleSheet, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateTime from "@/components/initial_setup/DateTimeComponent";
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Divider } from "react-native-elements";
import { CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import waveImage from "@/assets/images/wave.png";
import background from "@/assets/images/wave_back.jpg";
import littleFriend from '@/assets/images/Frog.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { router } from "expo-router";

const handleClick = () => {
    // go to main page
    router.push('/mainpage');
}

const handleChangeLocation = () => {
    // go to beach selection page
    router.push('/beach-selection');
}

export default function BeachPage() {
    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.page}>

                <View style={styles.top_bar}>
                    {/* location */}
                    
                    <View style={styles.location}>
                        {/* location icon and text */}
                        <IconButton onClick={handleChangeLocation}>
                            <LocationOnIcon />
                        </IconButton>
                        <Text>Southwold Beach</Text>
                    </View>

                    {/* little friend */}
                    <Image
                        source={littleFriend}
                        style={styles.littleFriend}
                        resizeMode='contain'></Image>
                </View>
        
                <View style={styles.content}>
                    {/* tide bar */}
                    <View style={styles.tide}>
                        <Text style={styles.tide_text}>High tide: 13:20</Text>
                        <hr style={{ width: 1, height: '90%' }} />
                        <Text style={styles.tide_text}>Low tide: 19:18</Text>
                    </View>

                    {/* information on the right hand side */}
                    <View style={styles.info}>
                        {/* date and time */}
                        <View style={styles.dateTime}>
                            <DateTime textColor="black" />
                        </View>

                        {/* weather, temperature, and chance of precipitation */}
                        <View style={styles.wtp}>
                            <View style={styles.weather}>
                                <WbCloudyIcon />
                            </View>

                            <Divider orientation="vertical"></Divider>

                            {/* temperature */}
                            <View style={styles.temperature_block}>
                                <Text style={styles.temperature}>21°C</Text>
                                <Text style={styles.high_low_temp}>23°C/14°C</Text>
                            </View>

                            <Divider orientation="vertical"></Divider>

                            {/* precipitation */}
                            <Text style={styles.precipitation}>
                                2% chance of precipitation
                            </Text>
                        </View>

                        {/* UV index and the waves */}
                        <View style={styles.uv_and_waves}>
                            {/* UV index */}
                            <View style={styles.uv}>
                                <CircularProgress variant="determinate" value={40} />
                                <Text>
                                    UV index: 2
                                </Text>
                            </View>

                            {/* Waves */}
                            <div style={styles.waves}>
                                <Image source={waveImage} resizeMode="contain" style={styles.waveimage} />
                            </div>
                        </View>

                        {/* wind direction, water temperature, and wave type */}
                        <View style={styles.www}>
                            {/* wind direction */}
                            <View style={styles.wind_direction}>
                                <Text>NW</Text>
                            </View>

                            {/* water temperature */}
                            <View style={styles.water_temp}>
                                <Text>17°C</Text>
                            </View>

                            {/* wave type */}
                            <View style={styles.wave_type}>
                                <Text>Medium Wave</Text>
                            </View>
                        </View>

                        {/* beach weather forecast */}
                        <View style={styles.forecast}>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Mon</TableCell>
                                            <TableCell size="small"> <WbCloudyIcon /> </TableCell>
                                            <TableCell size="small" align="right">16°C</TableCell>
                                            <TableCell size="small" align="right" sx={{ fontSize: '0.5rem' }}>Medium Wave</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Tue</TableCell>
                                            <TableCell size="small"> <WbSunnyIcon /> </TableCell>
                                            <TableCell size="small" align="right">20°C</TableCell>
                                            <TableCell size="small" align="right" sx={{ fontSize: '0.6rem' }}>Low Wave</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Wed</TableCell>
                                            <TableCell size="small"> <ThunderstormIcon /> </TableCell>
                                            <TableCell size="small" align="right">18°C</TableCell>
                                            <TableCell size="small" align="right" sx={{ fontSize: '0.6rem' }}>High Wave</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ height: '20%' }}>
                                            <TableCell size="small" component="th" scope="row">Thu</TableCell>
                                            <TableCell size="small"> <AirIcon /> </TableCell>
                                            <TableCell size="small" align="right">14°C</TableCell>
                                            <TableCell size="small" align="right" sx={{ fontSize: '0.6rem' }}>High Wave</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </View>
                    </View>
                </View>

                {/* back button */}
                <View style={styles.backButton}>
                    <IconButton onClick={handleClick}>
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
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
        width: '65%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    littleFriend: {
        width: '30%',
        height: '100%'
    },
    content: {
        height: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    tide: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    tide_text: {
        textAlign: 'center'
    },
    info: {
        width: '80%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
    },
    dateTime: {
        height: '15%',
        alignItems: 'center'
    },
    wtp: {
        // style for weather, temperature, precipitation secion
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    weather: {
        height: '100%',
        width: '30%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    temperature_block: {
        height: '100%',
        width: '30%',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    temperature: {
        height: '40%',
        fontSize: 30,
        alignContent: 'flex-end',
        textAlign: 'center'
    },
    high_low_temp: {
        height: '40%',
        fontSize: 15,
        alignContent: 'flex-start',
        textAlign: 'center'
    },
    precipitation: {
        height: '100%',
        width: '30%',
        alignContent: 'center',
        fontSize: 13,
        textAlign: 'center'
    },
    uv_and_waves: {
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    uv: {
        height: '100%',
        width: '30%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    waves: {
        height: '100%',
        width: '70%',
        display: 'flex',
        justifyContent: 'center'
    },
    waveimage: {
        backgroundColor: 'transparent',
        height: '80%',
    },
    www: {
        // style for wind_direction, water temperature, and wave type
        height: '5%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    wind_direction: {
        height: '100%',
        width: '30%',
        alignItems: 'center'
    },
    water_temp: {
        height: '100%',
        width: '30%',
        alignItems: 'center'
    },
    wave_type: {
        height: '100%',
        width: '30%',
        alignItems: 'center'
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
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    backButton: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        height: '10%',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
});
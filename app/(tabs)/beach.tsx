import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import pin from '@/assets/images/location_pin.png';
import waveImage from '@/assets/images/wave.png';


var currentTemperature:number = 21;
var highTemp:number = 23;
var lowTemp:number = 14;
var location:string = "Cambridge";
var timeToFromHigh:number = 50;
var highTime:string = "13:20"
var timeToFromLow:number = 100;
var lowTime:string = "19:18"
var precipChance:number = 2;
var UV:number = 2;
var seaTemp:number = 17;
var wave:string = "Medium";
var windDir:string = "NW";
var time:string = "14:26";
var date:string = "7th May";
var current:boolean = true;

const styles = StyleSheet.create({
    top : {
        alignContent: 'center',
        top : Dimensions.get('window').height*0.1,
        width : 100,
        flexDirection: 'row',
        alignItems:'center',
    },
    left_bar: {

    },
    center_left: {
      top: Dimensions.get('window').height*0.35,
    },
    center: {
        alignContent:'center',
        top: Dimensions.get('window').height*0.35,
        alignItems:'center'
    },
    center_right: {
        left: Dimensions.get('window').width*0.65,
        top: Dimensions.get('window').height*0.35,
    },
    important: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    important_smaller: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    standard: {
        fontSize: 15,
        fontWeight: 'normal',
    },
    bottom_right: {
        fontSize: 25,
        fontWeight: 'bold',
        left: Dimensions.get('window').width*0.75,
        top: Dimensions.get('window').height*0.85
    }
});


export default function Beach(){
    return (
        <View>

            <View style={[{zIndex:3,position:'absolute'}]}>
                { current && <Text style={[styles.bottom_right]}>WARNING!<br/>STRONG CURRENT</Text>}
            </View>

            <View style = {[{zIndex:3,flexDirection:'column',width : Dimensions.get('window').width, height : Dimensions.get('window').height}]}>
                <View style = {[{flex:1}]}/>
                <Text style = {[{left:Dimensions.get('window').width*1/11}]}>High tide:{highTime}</Text>
                <View style = {[{flex:18,flexDirection:'row'}]}>
                    <View style = {[{flex:10}]}/>
                    <View style = {[{flex:0.3,backgroundColor:'black'}]}/>
                    <View style = {[{flex:100}]}/>
                </View>
                <Text style = {[{left:Dimensions.get('window').width*1/11}]}>Low tide:{lowTime}</Text>
                <View style = {[{flex:2}]}/>
            </View>

            <View style = {[{zIndex:2,width : Dimensions.get('window').width, height : Dimensions.get('window').height,backgroundColor: 'transparent',flexDirection:'column',position:'absolute'}]}>
                    <View style = {[{flex:1,backgroundColor:'transparent', alignItems:'center',flexDirection:'row',alignSelf:'center'}]}>
                        <Image style = {[{backgroundColor : 'transparent', height:50,width:30}]} source={pin} height={50} width={30}></Image>
                        <Text style={[styles.important_smaller]}>  {location}</Text>
                    </View>

                    <View style={[{flex:1,alignItems:'center',alignContent:'center'}]}>
                        <Text style = {[styles.important_smaller]}>{date}</Text><Text style= {[styles.important_smaller]}>{time}</Text>
                    </View>

                    <View style = {[{flex:1,flexDirection:'row'}]}>
                        <View style= {[{flex:1}]}/>
                        <View style= {[{flex:1,alignSelf:'center',alignItems:'center'}]}>
                            Weather
                        </View>
                        <View style={[{flex:0.01,backgroundColor:'black'}]}/>
                        <View style= {[{flex:1,alignSelf:'center',alignItems:'center'}]}>
                            <Text style={styles.important}>{currentTemperature}°</Text>
                            <Text style={styles.standard}>{highTemp}°/{lowTemp}°</Text>
                        </View>
                        <View style={[{flex:0.01,backgroundColor:'black'}]}/>
                        <View style= {[{flex:1,alignSelf:'center',alignItems:'center'}]}>
                            <Text style = {styles.standard}>{precipChance}% chance of <br/>precipitation</Text>
                        </View>
                        <View style= {[{flex:1}]}/>
                    </View>

                    <View style = {[{flex:1,flexDirection:'row'}]}>
                        <View style= {[{flex:1}]}/>
                        <View style= {[{flex:1,alignSelf:'center',alignItems:'center'}]}>
                            UV {UV}
                        </View>
                        <View style= {[{flex:2,alignSelf:'center',alignItems:'center'}]}>
                            <Image style = {[{backgroundColor : 'transparent', resizeMode:'stretch' ,height:0.2*Dimensions.get('window').height,width:0.4*Dimensions.get('window').width}]} source={waveImage} height={50} width={30}></Image>
                        </View>
                        <View style= {[{flex:1}]}/>
                    </View>

                    <View style = {[{flex:1,flexDirection:'row'}]}>
                        <View style= {[{flex:1}]}/>
                        <View style= {[{flex:1,alignItems:'center'}]}>
                            ({windDir})
                        </View>
                        <View style= {[{flex:1,alignItems:'center'}]}>
                            {seaTemp}°
                        </View>
                        <View style= {[{flex:1,alignItems:'center'}]}>
                            {wave} waves
                        </View>
                        <View style= {[{flex:1}]}/>
                    </View>

                    <View style = {[{flex:2}]}>

                    </View>

            </View>
            
            <View style = {[{zIndex:1,width : Dimensions.get('window').width, height : Dimensions.get('window').height,position:'absolute'}]}>
                <View style = {[{flex:timeToFromHigh,backgroundColor: 'skyblue'}]}></View>
                <View style = {[{flex:timeToFromLow,backgroundColor: 'steelblue'}]}></View>
            </View>
        </View>
    )
}
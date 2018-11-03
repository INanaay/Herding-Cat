import React from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, NativeEventEmitter, NativeAppEventEmitter, NativeModules} from 'react-native'
import ProfilePicture from './ProfilePicture'
import globalStyle from '../../styles'
import BasicInfo from "./BasicInfo";
import BasicMap from "./BasicMap";
import {createStackNavigator} from 'react-navigation'
import tempView from "../tempView";
import BasicActivity from "./BasicActivity";
import BasicMeetings from './BasicMeetings'
import BasicWeight from "./BasicWeight";
import BasicSpeed from "./BasicSpeed";
import BasicSleep from "./BasicSleep";
import MeetingsActivity from '../Activities/Meetings/MeetingsActivity'
import MapActivity from "../Activities/Map/MapActivity"
import BleManager from 'react-native-ble-manager';
import SleepActivity from "../Activities/Sleep/SleepActivity";
import ActivityActivity from "../Activities/Activity/ActivityActivity";
import RoundMenu from './RoundMenu/RoundMenu'
import Tips from "./RoundMenu/Tips";
import { stringToBytes } from 'convert-string';
import Buffer from 'buffer'
import Social from "./RoundMenu/Social";
import Challenges from "./RoundMenu/Challenges";
import { bytesToString } from 'convert-string';
import Popup from "./Popup/Popup";
import PawMenu from "./PawMenu/PawMenu";
import Journal from "./PawMenu/Journal";
import SpeedActivity from "../Activities/Speed/SpeedActivity";
import HistoricActivity from "../Activities/Activity/HistoricActivity";
var TimerMixin = require('react-timer-mixin');

const serviceUUID= '80dc4c84-831a-4937-9058-2cf0bf28b8c8'
const characteristicUUID='4d8b9541-0159-4b4c-801a-03ec5520bd8a'
const catName='Hector'
const id="30:AE:A4:03:BA:46"
const id2="30:AE:A4:1B:9F:76"


const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);



class DashboardView extends React.Component {

    readingThread()
    {
        if (!this.state.isPopupVisible) {
            BleManager.read(id, serviceUUID, characteristicUUID)
                .then((readData) => {
                    const data = bytesToString(readData)
                    console.log(data)

                    if (data === "CHOC")
                    {
                        console.log("Le chat s'est pris une voiture")
                        this.setState({
                            isPopupVisible: true
                        })
                    }

                })
                .catch((error) => {
                    console.log("Reading thread : " + error)
                })
        }
    }

    readBluetoothData()
    {
        BleManager.read(id, serviceUUID, characteristicUUID)
            .then((readData) => {
                // Success code
                const data = bytesToString(readData)
                console.log("READ " + data)
                this.setState({
                    distance: data,
                    isInfoLoaded: true,
                    interval: TimerMixin.setInterval(this.readingThread.bind(this), 1000)
                })

            })
            .catch((error) => {
                // Failure code
                console.log("Readi ng data : " + error);
            });
    }

    async getCollarInfos()
    {

        TimerMixin.clearInterval(this.state.interval)

        this.setState({
            isInfoLoaded: false,

        })

        const key = stringToBytes("DIST");

        BleManager.write(id, serviceUUID, characteristicUUID, key)
            .then(() => {
                this.readBluetoothData()
            })
            .catch((error) => {
                console.log(error);
            })
    }



/*Mettre le constructeur en async et mettre await devant .start */

    constructor(props) {
        super(props)
        this.state = {
            isInfoLoaded: false,
            distance: 0,
            isPopupVisible: false,
            interval: undefined
        };



        this.getCollarInfos = this.getCollarInfos.bind(this)
        this.hidePopup = this.hidePopup.bind(this)
        this.showPopup = this.showPopup.bind(this)





        BleManager.start({showAlert: false})
            .then(() => {
                console.log('Module initialized');
                BleManager.connect(id)
                    .then(() => {
                        console.log("Connected");
                        BleManager.retrieveServices(id)
                            .then((peripheralInfo) => {
                                console.log(peripheralInfo)
                                this.getCollarInfos()
                            }).catch((error) => {
                            console.log(error);
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }).catch((error) => {
            console.log(error);
        });
    }



    hidePopup()
    {
        console.log("hiding Popup")
        this.setState({
            isPopupVisible: false,
        })
    }

    showPopup()
    {
        this.setState({
            isPopupVisible: true,
        })
    }

    showRoundMenuOrPopup()
    {
        if (!this.state.isPopupVisible)
            return (
                <RoundMenu navigation={this.props.navigation}/>
            )
        else
            return (
            <Popup onPress={this.hidePopup}/>
            )
    }

    render() {
            return (
                <View>

                    <ScrollView style={{backgroundColor: globalStyle.backgroundColor}}>

                        <ProfilePicture state={this.state} onPress={this.getCollarInfos} showPopup={this.showPopup}/>
                        <BasicInfo navigation={this.props.navigation} loaded={this.state.isInfoLoaded} distance={this.state.distance}/>

                        <BasicMap name={catName} navigation={this.props.navigation}/>

                        <BasicActivity name={catName} navigation={this.props.navigation}/>

                        <BasicMeetings name={catName} navigation={this.props.navigation}/>

                        <BasicSleep name={catName} navigation={this.props.navigation}/>

                        <BasicSpeed name={catName} navigation={this.props.navigation}/>

                        <BasicWeight name={catName} weight={"54"}
                                navigation={this.props.navigation}/>

                </ScrollView>
                    <PawMenu navigation={this.props.navigation}/>
                    {this.showRoundMenuOrPopup()}
                </View>
            )
    }
}


//TODO Create stack navigator for each activity

export default Dashboard = createStackNavigator ({


    Dashboard: {
        screen: DashboardView,
        navigationOptions: globalStyle.navigationOptions
    },
    SpeedActivity: {
        screen: SpeedActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    ActivityActivity: {
        screen: ActivityActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    HistoricActivity: {
        screen: HistoricActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    MapActivity: {
        screen: MapActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    MeetingsActivity: {
        screen: MeetingsActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    SleepActivity: {
        screen: SleepActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    tempView: {
        screen: tempView
    },
    Tips: {
        screen: Tips,
        navigationOptions: globalStyle.navigationOptions
    },
    Social: {
        screen: Social,
        navigationOptions: globalStyle.navigationOptions
    },
    Challenges: {
        screen: Challenges,
        navigationOptions: globalStyle.navigationOptions
    },
    Journal: {
        screen: Journal,
        navigationOptions: globalStyle.navigationOptions
    },
})

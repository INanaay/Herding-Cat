import React from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native'
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

const catName='Hector'
const id="88:3F:4A:DF:B4:81"

class DashboardView extends React.Component {

    constructor(props) {
        super(props)


        BleManager.start({showAlert: false})
            .then(() => {
                // Success code
                console.log('Module initialized');
                BleManager.connect(id)
                    .then(() => {
                        BleManager.retrieveServices(id)
                            .then((peripheralInfo) => {
                                // Success code
                                console.log('Peripheral info:', peripheralInfo);
                                const data = stringToBytes("Yo");
                                BleManager.write(id, 'FFE0', 'FFE1', data)
                                    .then(() => {
                                        // Success code
                                        console.log('Write: ' + data);
                                        BleManager.read(id, 'FFE0', 'FFE1')
                                            .then((readData) => {
                                                // Success code
                                                console.log('Read: ' + readData);

                                                const buffer = Buffer.Buffer.from(readData);    //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
                                            })
                                            .catch((error) => {
                                                // Failure code
                                                console.log(error);
                                            });
                                    })
                                    .catch((error) => {
                                        // Failure code
                                        console.log(error);
                                    });

                            }).catch((error) => {
                            // Failure code
                            console.log(error);
                        });
                    })
                    .catch((error) => {
                        // Failure code
                        console.log(error);
                    });

            });


            /*
        this.manager = new BleManager();

        console.log("Lol")

        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error)
                return
            }

            console.log(`name = ${device.name}`)

            if (device.name === 'RenaudBlue') {
                this.manager.stopDeviceScan();
                device.connect()
                    .then((device) => {
                        console.log("Discovering services and characteristics")
                        return device.discoverAllServicesAndCharacteristics()
                    })
                    .then((device) => {
                        console.log("Setting notifications")
                        console.log(`id = ${device.id}`)


                        var utf8 = require('utf8');
                        var binaryToBase64 = require('binaryToBase64');

                        var text = 'ptdr\r\n';
                        var bytes = utf8.encode(text);
                        var encoded = binaryToBase64(bytes);

                        return device.writeCharacteristicWithResponseForService(device.id, null, encoded)
                    })
                    .then(() => {
                        console.log("Listening...")
                    }).catch((error) => {
                    console.log(`Error : ${error}`)
                    // Handle errors
                })

            }
        });
        */
    }



    render() {
            return (
                <View>

                    <ScrollView style={{backgroundColor: globalStyle.backgroundColor}}>
                    <ProfilePicture/>
                    <BasicInfo/>

                    <BasicMap name={catName} header={`Day`}
                              detailedActivity={'MapActivity'} navigation={this.props.navigation}
                    />

                    <BasicActivity name={catName} header={`Activity`}
                                   detailedActivity={'ActivityActivity'} navigation={this.props.navigation}/>

                    <BasicMeetings name={catName} header={`Meetings`}
                                   detailedActivity={'MeetingsActivity'} navigation={this.props.navigation}/>

                    <BasicSleep name={catName} header={`Sleep`}
                                detailedActivity={'SleepActivity'} navigation={this.props.navigation}/>

                    <BasicSpeed name={catName} header={`Speed`}
                                detailedActivity={'tempView'} navigation={this.props.navigation}/>

                    <BasicWeight name={catName} header={`Weight`} weight={"54"}
                                 detailedActivity={'tempView'} navigation={this.props.navigation}/>

                </ScrollView>
                    <RoundMenu navigation={this.props.navigation}/>
                </View>
            )
    }
}

export default Dashboard = createStackNavigator ({
    Dashboard: {
        screen: DashboardView,
        navigationOptions: globalStyle.navigationOptions
    },
    ActivityActivity: {
        screen: ActivityActivity,
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
})

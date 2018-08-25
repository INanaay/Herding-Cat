import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import DashboardComponentHeader from './DashboardComponentHeader'
import globalStyle from '../../styles'

export default class BasicWeight extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            weight: '5,4',
        }
        this.setFocus = this.setFocus.bind(this)
    }


    setFocus() {
        this.textInput.focus()
    }

    changeText (text) {
        this.setState({
            weight: text,
        });
    }

    render() {
        return (
            <View style={globalStyle.dashboardBorder}>
                <DashboardComponentHeader name={this.props.name} text={this.props.header} navigation={this.props.navigation}
                                          detailedActivity={this.props.detailedActivity}/>

                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center',}}>
                    <TextInput ref={(ref)=>{this.textInput = ref}}
                               style={style.weightText}
                               value={this.state.weight}
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this.changeText(text)}
                               maxLength={4}
                    />
                    <Text style={style.weightText}>kg</Text>
                </View>

                <TouchableOpacity style={{marginBottom:40}} onPress={this.setFocus}>
                    <Text style={style.buttonText}>Update Weight</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    weightText: {
        fontSize:45 ,
        color: globalStyle.fontColor,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 12,
        color: globalStyle.secondaryColor,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})
import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation'
import globalStyle from '../../../styles'
import Graphs from './IconsSource'


const clickedColor = globalStyle.secondaryColor
const unClickedColor = '#525152'


export default class GraphTab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstButtonColor: clickedColor,
            secondButtonColor: unClickedColor,
            thirdButtonColor: unClickedColor,
            displayedGraph: Graphs.graphs.chart1
        }
        this.onFirstButtonPress = this.onFirstButtonPress.bind(this)
        this.onSecondButtonPress = this.onSecondButtonPress.bind(this)
        this.onThirdButtonPress = this.onThirdButtonPress.bind(this)
    }

    onFirstButtonPress() {
        this.setState({
            firstButtonColor: clickedColor,
            secondButtonColor: unClickedColor,
            thirdButtonColor: unClickedColor,
            displayedGraph: Graphs.graphs.chart1

        })

        this.props.callback(1)

    }

    onSecondButtonPress() {
        this.setState({
            firstButtonColor: unClickedColor,
            secondButtonColor: clickedColor,
            thirdButtonColor: unClickedColor,
            displayedGraph: Graphs.graphs.chart2
        })
        this.props.callback(2)
    }

    onThirdButtonPress() {
        this.setState({
            firstButtonColor: unClickedColor,
            secondButtonColor: unClickedColor,
            thirdButtonColor: clickedColor,
            displayedGraph: Graphs.graphs.chart3
        })
        this.props.callback(3)

    }

    //IMPLEMENT FUNCTION TO RENDER BUTTON


    renderText(text) {
        return (
        <Text style={style.tabTitle}>{text}</Text>
        )
    }


    render () {
        return (
            <View style={style.view}>

               <View style={style.container}>
                   <View style={{flexDirection: 'row'}}>
                       <TouchableOpacity style={[style.button, style.leftButton,
                           {backgroundColor: this.state.firstButtonColor}]}
                                         onPress={this.onFirstButtonPress}
                       >
                           {this.renderText("Per Day")}
                       </TouchableOpacity>

                       <TouchableOpacity style={[style.button,
                           {backgroundColor: this.state.secondButtonColor}]}
                                         onPress={this.onSecondButtonPress}
                       >
                           {this.renderText("Per Week")}
                       </TouchableOpacity>

                       <TouchableOpacity style={[style.button, style.rightButton,
                           {backgroundColor: this.state.thirdButtonColor}]}
                                         onPress={this.onThirdButtonPress}
                       >
                           {this.renderText("Per Month")}
                       </TouchableOpacity>

                   </View>
                       <Image style={{flex: 1, height: null, width: '100%'}}
                           source={this.state.displayedGraph}/>

               </View>

            </View>
        )
    }
}

const style= StyleSheet.create ({
    view: {
        height: 200,
        alignItems: 'center',
        margin:10,
    },
    container: {
        backgroundColor: globalStyle.backgroundColor,
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10

    },
    graphContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#2afcff'
    },
    button: {
        flex:1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftButton: {
        borderTopLeftRadius: 10
    },
    rightButton: {
        borderTopRightRadius: 10
    },
    tabTitle: {
        color: globalStyle.fontColor
    }
})

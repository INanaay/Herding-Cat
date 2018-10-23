import React from 'react'
import {View, Dimensions, StyleSheet, Text} from 'react-native'
import ProgressBar from 'react-native-progress/Bar'
import ComponentHeader from "../ComponentHeader";
import globalStyle from '../../../styles'


export default class DayAllocation extends React.PureComponent {

    drawLegend(color, title, time) {
        return (
        <View style={styles.legendContainer}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={[styles.circle, {backgroundColor: color}]}/>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <Text style={styles.timeText}>{time}</Text>
        </View>
        )
    }

    render() {

        const progressBarWidth = Dimensions.get('window').width - 20;

        return (
            <View style={globalStyle.dashboardBorder}>
                <ComponentHeader title={"Day Allocation"} detailedActivity={this.props.detailedActivity}
                                 navigation={this.props.navigation}/>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ProgressBar progress={0.3} width={progressBarWidth} height={40}
                             color={globalStyle.secondaryColor}
                unfilledColor={'#baffee'}
                borderWidth={0}
                borderRadius={30}/>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 20, padding: 10}}>
                    {this.drawLegend(globalStyle.secondaryColor, "active", "5h22")}
                    {this.drawLegend('#baffee', "passive", "7h18")}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
     circle: {
         width: 10,
         height: 10,
         borderRadius: 10/2,
         backgroundColor: '#FFF'
     },
    legendContainer: {
        justifyContent: 'center',
        padding: 10
    },
    titleText: {
         marginLeft: 5,
         color: '#959595'
    },
    timeText: {
         color: globalStyle.fontColor,
        marginLeft: 15
    }
})



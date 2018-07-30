import React from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import globalStyle from "../../../styles";
import ComponentHeader from "../ComponentHeader";
import ProgressBar from 'react-native-progress/Bar'


class Inactivity extends React.PureComponent {

    calculateProgressBarSize() {
        const screenWidth = Dimensions.get('window').width;
        const size = screenWidth - ((0.9 - (this.props.progress / 2)) * screenWidth)

        return (size)
    }

    render()
    {
        return (
            <View style={{padding: 10, flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <ProgressBar progress={1} width={this.calculateProgressBarSize()} height={40}
                             color={this.props.color}
                             borderWidth={0}
                             borderRadius={30}/>
                <View style={{marginLeft: 6}}>
                    <Text style={styles.timeText}>{this.props.time}</Text>
                    <Text style={styles.periodText}>from 6h31 to 9h58</Text>
                </View>
            </View>
        )
    }
}

export default class Stationary extends React.Component {
    render() {

        return (
            <View style={globalStyle.dashboardBorder}>
                <ComponentHeader title={"longest stationary period"}/>
                <Inactivity time={"3h27"} progress={0.5} color={globalStyle.secondaryColor}/>
                <Inactivity time={"4h56"} progress={0.8} color={'#baffee'}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    timeText: {
        color: globalStyle.fontColor,
        fontWeight: 'bold',
    },
    periodText: {
        color: '#bfbfbf',
        fontSize: 10

    }
})



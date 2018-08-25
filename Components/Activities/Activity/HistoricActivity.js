import React from 'react'
import {ListView, View, Text, StyleSheet} from 'react-native'
import ActivityHeader from '../ActivityHeader'
import Row from './Row'
import globalStyle from '../../../styles'
import GraphTab from './GraphTab'


export default class HistoricActivity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '4h36', date: 'November, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
                {time: '6h04', date: 'October, 2018'},
            ],
        }
    }

    render() {

       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <View style={{backgroundColor: globalStyle.backgroundColor, height: '100%'}}>
            <ActivityHeader title={"activity"} navigation={this.props.navigation}/>
                <View >
                    <GraphTab/>
                </View>
                <View>
                <View style={style.border}>
                    <Text style={style.title}>HISTORIC</Text>
                </View>
                <ListView
                    style={{height:'50%'}}
                    dataSource={ds.cloneWithRows(this.state.list)}
                    renderRow={(row, j, k) => <Row info={row} index={parseInt(k, 10)}/>}
                />
                </View>
            </View>

        )

    }
}

const style = StyleSheet.create({
    border: {
        height: 60,
        borderBottomWidth: 0.6,
        borderBottomColor: globalStyle.fontColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        color: globalStyle.fontColor
    }
})
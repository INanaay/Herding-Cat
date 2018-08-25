import React from 'react'
import {View, Image} from 'react-native'
import ActivityHeader from '../ActivityHeader'

export default class MapActivity extends React.Component {

    render()
    {
        return (
            <View>
                <ActivityHeader title={"journey"} navigation={this.props.navigation}/>
                <Image
                    source={require('/home/NANAA/Missions/Herding/Resources/Images/Activities/map.png')}/>
            </View>
        )
    }
}

import { View, Text } from 'react-native'
import React from 'react'

const About = ({ details }) => {
    return (
        <View style={{
            padding: 20,
            backgroundColor: '#fff',
            height:100,
        }}>
            <Text
                style={{
                    fontFamily: 'outfitB',
                    fontSize: 20,
                }}
            >About</Text>
            <Text
                style={{
                    fontFamily: 'outfitR',
                    lineHeight: 25
                }}
            >{details.about}</Text>
        </View>
    )
}

export default About
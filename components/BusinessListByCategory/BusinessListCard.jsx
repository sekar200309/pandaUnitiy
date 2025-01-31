import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessListCard = ({ business }) => {

    const router = useRouter();

    return (

        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 15, padding: 10, margin: 10, borderRadius: 15, backgroundColor: '#fff' }}
            onPress={() => router.push('/businessDetails/' + business.id)}
        >
            <Image source={{ uri: business.imageUrl }} style={{ width: 120, height: 120, borderRadius: 15, }} />
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'outfitB', marginTop: 5, fontSize: 20 }}>{business.name}</Text>
                <Text style={{ color: Colors.GRAY }}>{business.about}</Text>
                {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginTop: 5 }}>
                    <Image source={require('./../../assets/images/star.png')} style={{ width: 15, height: 15 }} />
                    <Text style={{ fontFamily: 'outfitR' }}>4.5</Text>
                </View> */}
            </View>
        </TouchableOpacity>

    )
}

export default BusinessListCard
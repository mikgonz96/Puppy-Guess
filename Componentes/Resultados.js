import React from 'react';
import { View, Text } from 'react-native';

export default ({resultados=[]}) => (
    <View>
        {resultados.map((data, index) => (
            <View key={index}>
                <Text numberOfLines={1}>♥ {data.description} </Text>
            </View>
        ))}
    </View>
);

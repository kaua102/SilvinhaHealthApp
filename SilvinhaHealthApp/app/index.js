import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const menuData = [
    {
        id: '1',
        title: 'Calculadora de IMC',
        router: '/imc',
        color: '#FF6B6B',
        
    }
]
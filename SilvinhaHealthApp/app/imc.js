import { useState } from "react";
import { Alert } from "react-native";

const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [resultado, setResultado] = useState(null);

const handleCalcular = () => {
    if (!peso || !altura) {
        Alert.alert('Erro', 'Preencha todos os campos!');
        return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(peso.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
        Alert.alert('Erro', 'Digite valores válidos (maiores doque zero).');
        return;
    }

    const resultadoIMC = calcularIMC(pesoNum, alturaNum);
    setResultado(resultadoIMC);
};


import React, { useState } from "react";
import{
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, Alert, ScrollView,
} from 'react-native';
import { SafeAreaViewBase } from "react-native-safe-area-context";
import { calcularIMC } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';

export default function ImcScreen() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleCalcular = () => {
        if (!peso || !altura) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }
            const pesoNum = parseFloat(peso.replace(',', '.'));
            const alturaNum = parseFloat(altura.replace(',', '.'));
            if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum
            <= 0) {
                Alert.alert('Erro', 'Digite valores válidos (maiores quezero).');
            return;
        }
        const resultadoIMC = calcularIMC(pesoNum, alturaNum);
        setResultado(resultadoIMC);
    };
}
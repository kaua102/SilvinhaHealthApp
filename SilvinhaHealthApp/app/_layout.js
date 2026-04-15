import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
        <>
            <StatusBar style='dark' />
            <Stack
                ScreenOptions={{
                    HeadersStyle: {
                        backgroundColor: '#f9f9f9',
                    },
                    HeaderTintColor: '#333',
                    HeaderTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        title: 'Silvinha Health App',
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="imc"
                    options={{
                        title: 'Calculadora de IMC',
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="peso-ideal"
                    options={{
                        title: 'Peso Ideal',
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="agua"
                    options={{
                        title: 'Água Diária',
                        headerShown: true
                    }}
                />
            </Stack>
            <Stack.Screen
                name="tmb"
                options={{
                    title: 'Taxa Metabólica Basal',
                    headerShown: true
                }}
            />
        </>
    )
}
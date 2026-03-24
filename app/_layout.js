import React from 'react';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

export default function _layout() {
  return (
    <>
      <StatusBar style='dark'/>
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
        </Stack>
    </>
  )
}
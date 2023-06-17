import React, {useState} from 'react';
import {StatusBar, TouchableOpacity, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from './src/constants/Colors';
import HomeScreen from './src/screens/home';
import Remove from './src/icons/Delete';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/screens/loading';

const Stack = createNativeStackNavigator();

function App(props: {incomingPhoneNumber: string}) {
  const [isDeleteInProgress, setIsDeleteInProgress] = useState(false);
  const deleteChats = () => {
    AsyncStorage.removeItem('@WAKnown/Chats');
    setIsDeleteInProgress(true);
    const timeout = setTimeout(() => {
      setIsDeleteInProgress(false);
      clearTimeout(timeout);
    }, 250);
  };
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={COLORS[useColorScheme() || 'light'].primary}
      />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS[useColorScheme() || 'light'].primary,
            },
            headerTintColor: COLORS[useColorScheme() || 'light'].header,
            headerTitleStyle: {
              fontWeight: '500',
              color: 'white',
            },
            title: 'WAKnown',
            headerRight: () => (
              <TouchableOpacity onPress={deleteChats}>
                <Remove />
              </TouchableOpacity>
            ),
          }}>
          {!isDeleteInProgress ? (
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{initialPhoneNumber: props.incomingPhoneNumber}}
            />
          ) : (
            <Stack.Screen
              name="Home"
              component={LoadingScreen}
              initialParams={{initialPhoneNumber: props.incomingPhoneNumber}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

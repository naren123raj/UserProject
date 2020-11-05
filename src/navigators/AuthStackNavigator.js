import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import DetailsScreen from '../screens/DetailsScreen';

const AuthStack = createStackNavigator();

const LoginStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator mode={'modal'} screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{headerShown: false}}>
            <LoginStack.Screen name={'Login'} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={'Regitration'} component={RegistrationScreen} />
      <AuthStack.Screen name={'Details'} component={DetailsScreen} />
    </AuthStack.Navigator>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {AuthContext} from './contexts/AuthContext';
import axios from 'axios';
import {BASE_URL} from './config';

const RootStack = createStackNavigator();

export default function App() {
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        console.log(
          'login ==> email:' + email + ' ==> password ==> ' + password,
        );
      },
      logout: async () => {
        console.log('logout');
      },
      register: async (email, password) => {
        axios({
          method: 'POST',
          url: 'http://localhost:8080/auth/local',
        })
          .then((response) => {
            console.log(response.data.email);
            console.log(response.data.password);
            const user = {
              email: response.data.email,
              password: response.data.originator.name,
            };

            console.log('****' + user.email);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(
          'register ==> email:' + email + ' ==> password ==> ' + password,
        );
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

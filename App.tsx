import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateScreen from './screens/CreateScreen';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default () => (
  <SafeAreaView style={styles.container}>
    <StatusBar animated={true} backgroundColor="#008080" />
    <PaperProvider theme={MD3DarkTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
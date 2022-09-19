import { StatusBar } from 'react-native';
import { useRef, useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

import { Subscription } from 'expo-modules-core';

import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getNotificationListenner = useRef<Subscription>();
  const responseNotificationListenner = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });
  useEffect(() => {
    getNotificationListenner.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
    });

    responseNotificationListenner.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      if (getNotificationListenner.current && responseNotificationListenner.current) {
        Notifications.removeNotificationSubscription(getNotificationListenner.current);
        Notifications.removeNotificationSubscription(responseNotificationListenner.current);
      }
    };
  }, []);

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsloaded ? <Routes /> : <Loading />}
    </Background>
  );
}

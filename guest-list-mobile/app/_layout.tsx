import { Slot, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';

import Header from '../components/Header';
import { colors } from '../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 40,
  },
  slot: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

function routeMapping(pathname: string) {
  switch (pathname) {
    case '/':
      return 'Guest List';
    case '/new-guest':
      return 'New Guest';
    default:
      return '';
  }
}

export default function HomeLayout() {
  const pathname = usePathname();

  const label = routeMapping(pathname);
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header label={label} />
      <StatusBar style="auto" /> {/* eslint-disable-line*/}
      <View style={styles.slot}>
        <Slot />
      </View>
    </View>
  );
}

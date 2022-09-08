import { StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorModeValue, Center } from 'native-base';
import { Text } from './components/Text';

import Home from './screens';

import i18n from './i18n';

const App = () => {
  const backgroundColor = useColorModeValue('white', 'black');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollView} >
        <Center marginBottom={4} marginTop={2}>
          <Text variant='heading'>{i18n.t('conversor')}</Text>
        </Center>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { padding: 10 },
});

export default App;

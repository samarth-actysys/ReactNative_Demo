import React from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';  // Detects the system color scheme (dark/light mode)
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',  // Change background based on theme
  };

  return (
    /*<QRCodeScanner
        onRead={({data}) => Alert(data)}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />*/
      <View>
        <Text>Hello</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default App;
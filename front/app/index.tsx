import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Platform, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  const webviewRef = useRef<WebView>(null);

  const handleMessage = (event: any) => {
    event.preventDefault();
    const { data } = event.nativeEvent;
    alert(`Received from Web: ${data}`);
  };

  // const sendMessageToWeb = () => {
  //   if (webviewRef.current) {
  //     const message = JSON.stringify({
  //       type: 'GREETING',
  //       payload: 'Hello Web!',
  //     });
  //     webviewRef.current.postMessage(message); // WebView로 데이터 전송
  //   } else {
  //     console.error('WebView is not initialized yet.');
  //   }
  // };

  if (Platform.OS === 'web') {
    return <Text>WebView is not supported on the web platform.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="Send to Web" onPress={sendMessageToWeb} /> */}
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://front1-git-dev-taekyus-projects.vercel.app/' }}
        onMessage={handleMessage} // 웹에서 보낸 데이터를 수신
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadEnd={() => alert('WebView Loaded')}
        originWhitelist={['*']}
        onError={e => alert(`WebView Error : ${e.nativeEvent}`)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

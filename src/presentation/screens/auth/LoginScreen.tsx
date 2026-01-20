import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const LoginScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text>LoginScreen</Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

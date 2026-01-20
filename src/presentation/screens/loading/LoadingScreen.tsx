import React from 'react';
import {Text, View} from 'react-native';
import {Button, Icon} from '@ui-kitten/components';

const FacebookIcon = props => <Icon name="facebook" {...props} />;
export const LoadingScreen = () => {
  return (
    <View>
      <Text>LoadingScreen</Text>
      <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
    </View>
  );
};

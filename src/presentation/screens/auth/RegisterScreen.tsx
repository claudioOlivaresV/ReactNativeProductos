import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomIcon} from '../../components/ui/CustomIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear Cuenta</Text>
          <Text category="p2">Porfavor, crea una cuenta para continuar</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre completo"
            accessoryLeft={<CustomIcon name="person-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<CustomIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>

        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            accessoryLeft={<CustomIcon name="lock-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>
        <Layout style={{marginTop: 20}} />
        <Layout style={{marginTop: 20}}>
          <Button
            onPress={() => {}}
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}>
            Crear
          </Button>
        </Layout>
        <Layout style={{marginTop: 50}} />
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿Ya tienes una cuenta?</Text>
          <Text status="primary" category="s1" onPress={() => navigation.pop()}>
            Ingresar
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomIcon} from '../../components/ui/CustomIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {API_URL} from '@env';
import {useAuthStore} from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const {login} = useAuthStore();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isPosting, setIsPosting] = useState(false);
  const {height} = useWindowDimensions();
  console.log(API_URL);
  const onLogin = async () => {
    setIsPosting(true);
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    const isOk = await login(form.email, form.password);
    console.log(isOk);

    setIsPosting(false);
    if (isOk) return;
    Alert.alert('Error', 'Usuario o password incorrectos');
  };
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Porfavor, ingrese para continuar</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            accessoryLeft={<CustomIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>

        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            value={form.password}
            onChangeText={password => setForm({...form, password})}
            accessoryLeft={<CustomIcon name="lock-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>
        <Layout style={{marginTop: 20}} />
        <Layout style={{marginTop: 20}}>
          <Button
            disabled={isPosting}
            onPress={onLogin}
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}>
            Ingresar
          </Button>
        </Layout>
        <Layout style={{marginTop: 50}} />
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿No tienes cuenta?</Text>
          <Text status="primary" category="s1">
            Crea una
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

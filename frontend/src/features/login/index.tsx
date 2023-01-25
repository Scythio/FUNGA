import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {styles} from './styles';
import {Avatar, Button, Text, TextInput} from 'react-native-paper';
import {LoginForm} from './models/login-form.model';
import {useAppDispatch} from '../../store';
import {loginUser} from '../../store/slices/user/user.slice';

interface LoginScreenProps {}
const LoginScreen: FC<LoginScreenProps> = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: '',
  });

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}></View>
      <View
        style={{
          width: '100%',
        }}>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
          <Text
            style={{
              marginLeft: 10,
            }}>
            Username
          </Text>
          <TextInput
            value={loginForm.username}
            onChangeText={text => {
              setLoginForm({
                ...loginForm,
                username: text,
              });
            }}
          />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
          <Text
            style={{
              marginLeft: 10,
            }}>
            Haslo
          </Text>
          <TextInput
            value={loginForm.password}
            onChangeText={text => {
              setLoginForm({
                ...loginForm,
                password: text,
              });
            }}
            secureTextEntry
          />
        </View>
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <Button
          style={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderRadius: 15,
          }}
          onPress={() => {
            dispatch(
              loginUser({
                username: loginForm.username,
                password: loginForm.password,
              }),
            );
          }}>
          Zaloguj
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

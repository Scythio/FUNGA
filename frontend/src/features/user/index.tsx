import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {styles} from './styles';
import InfoField from './components/info-field';
import {Avatar, Button, Text} from 'react-native-paper';
import {useAppSelector} from '../../store';
import {selectCurrentUser} from '../../store/slices/user/user.slice';

interface UserScreenProps {}
const UserScreen: FC<UserScreenProps> = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <Avatar.Image
            size={64}
            source={{
              uri: 'https://randomuser.me/api/portraits/men/36.jpg',
            }}
          />
        </View>
        <Text>{user && user.username}</Text>
      </View>
      <View
        style={{
          width: '100%',
        }}>
        <InfoField title={'Name'} value={'Robert'} />
        <InfoField title={'Surname'} value={'Lewandowski'} />
        <InfoField title={'Email'} value={user ? user.email : ''} />
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
          onPress={() => {}}>
          Zmien
        </Button>
      </View>
    </View>
  );
};

export default UserScreen;

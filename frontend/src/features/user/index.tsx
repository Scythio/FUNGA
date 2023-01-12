import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {styles} from './styles';
import InfoField from './components/info-field';
import {Avatar, Button, Text} from 'react-native-paper';

interface UserScreenProps {}
const UserScreen: FC<UserScreenProps> = () => {
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
        <Text>NickName</Text>
      </View>
      <View
        style={{
          width: '100%',
        }}>
        <InfoField title={'Name'} value={'Robert'} />
        <InfoField title={'Surname'} value={'Lewandowski'} />
        <InfoField title={'Email'} value={'robert9Goal@gmail.com'} />
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

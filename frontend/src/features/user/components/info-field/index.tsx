import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

interface InfoFieldProps {
  title: string;
  value: string;
}
const InfoField: FC<InfoFieldProps> = ({title, value}) => {
  return (
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
        {title}
      </Text>
      <TextInput value={value} disabled />
    </View>
  );
};

export default InfoField;

import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Text, Input} from '@rneui/themed';

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
        }}
        h4>
        {title}
      </Text>
      <Input value={value} disabled />
    </View>
  );
};

export default InfoField;

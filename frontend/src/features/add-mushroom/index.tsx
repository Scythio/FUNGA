import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {styles} from './styles';
import {Button, Text} from '@rneui/themed';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import useCamera from '../../shared/hooks/camera';

let dataSet: Array<abc> = [
  {id: '1', title: 'Alpha'},
  {id: '2', title: 'Beta'},
  {id: '3', title: 'Gamma'},
];

interface abc {
  id: string;
  title: string;
}

interface AddMushroomScreenProps {}
const AddMushroomScreen: FC<AddMushroomScreenProps> = () => {
  const [selectedItem, setSelectedItem] = useState<abc>(dataSet[0]);

  const {startCamera} = useCamera();

  return (
    <View style={styles.container}>
      <View style={{width: '80%', padding: 10}}>
        <Text style={styles.subHeader}>Gatunek grzyba</Text>
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          initialValue={dataSet[0]}
          onSelectItem={item => {
            setSelectedItem(item);
          }}
          dataSet={dataSet}
        />
      </View>

      <Button title="Dodaj" onPress={() => startCamera()} />
      <Button
        title="Dodaj2"
        // onPress={() => }
      />
    </View>
  );
};

export default AddMushroomScreen;

import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {styles} from './styles';
import {Button, Text, Slider, Image} from '@rneui/themed';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import useCamera from '../../shared/hooks/camera';
import {MushroomSpecies} from '../../shared/models/mushroom-species.model';

let dataSet: Array<MushroomSpecies> = [
  {id: 1, name: 'Borowik'},
  {id: 2, name: 'Beta'},
  {id: 3, name: 'Gamma'},
];

interface AddMushroomScreenProps {}
const AddMushroomScreen: FC<AddMushroomScreenProps> = () => {
  const [selectedItem, setSelectedItem] = useState<MushroomSpecies | null>(
    dataSet[0],
  );
  const [numberOfMushrooms, setNumberOfMushrooms] = useState<number>(0);

  const {startCamera, photo, removePhoto} = useCamera();

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={{width: '80%', padding: 10}}>
          <Text style={styles.subHeader}>Gatunek grzyba</Text>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={selectedItem ? `${selectedItem.id}` : undefined}
            onSelectItem={item => {
              item
                ? setSelectedItem({
                    id: parseInt(item.id),
                    name: item.title!,
                  })
                : setSelectedItem(null);
            }}
            dataSet={dataSet.map(value => ({
              id: `${value.id}`,
              title: value.name,
            }))}
          />
        </View>
        <View style={{padding: 10, marginTop: 20}}>
          <Text style={styles.subHeader}>Liczba grzybów w ciągu 1h</Text>
          <Slider
            value={numberOfMushrooms}
            onValueChange={setNumberOfMushrooms}
            maximumValue={100}
            minimumValue={0}
            step={10}
            thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
          />
        </View>
        <View style={{padding: 10, marginTop: 20}}>
          <Text style={styles.subHeader}>Załącz zdjęcie</Text>
          {!photo?.uri ? (
            <View>
              <Button title="Dodaj" onPress={() => startCamera()} />
            </View>
          ) : (
            <View>
              <View
                style={{
                  margin: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Button
                  title="Usun"
                  onPress={() => {
                    removePhoto();
                  }}
                />
                <Button title="Zmien" onPress={() => startCamera()} />
              </View>
              <Image
                source={{uri: photo?.uri}}
                style={{width: 200, height: 200, margin: 10}}
              />
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          margin: 10,
          marginBottom: 20,
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title={'Dodaj'} onPress={() => {}} />
        <Button title="Anunuj" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AddMushroomScreen;

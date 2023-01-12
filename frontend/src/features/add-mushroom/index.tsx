import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {styles} from './styles';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import useCamera from '../../shared/hooks/camera';
import {MushroomSpecies} from '../../shared/models/mushroom-species.model';
import LikeDislike, {
  LikeDislikeProps,
} from '../../shared/components/like-dislike';
import {LikeDislikeState} from '../../shared/constants/like-dislike-state.enum';
import {Button, Text} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {useAppDispatch, useAppSelector} from '../../store';
import {
  fetchBerries,
  selectBerries,
} from '../../store/slices/pokemon/pokemon.slice';

let dataSet: Array<MushroomSpecies> = [
  {id: 1, name: 'Borowik'},
  {id: 2, name: 'Beta'},
  {id: 3, name: 'Gamma'},
];

interface AddMushroomScreenProps {}
const AddMushroomScreen: FC<AddMushroomScreenProps> = () => {
  const dispatch = useAppDispatch();
  const berries = useAppSelector(selectBerries);
  const [selectedItem, setSelectedItem] = useState<MushroomSpecies | null>(
    dataSet[0],
  );
  const [numberOfMushrooms, setNumberOfMushrooms] = useState<number>(0);

  const {startCamera, photo, removePhoto} = useCamera();

  useEffect(() => {
    console.log(berries);
  }, [berries]);

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
          />
        </View>
        <View style={{padding: 10, marginTop: 20}}>
          <Text style={styles.subHeader}>Załącz zdjęcie</Text>
          {!photo?.uri ? (
            <View>
              <Button mode="contained" onPress={() => startCamera()}>
                Dodaj
              </Button>
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
                  mode="contained"
                  onPress={() => {
                    removePhoto();
                  }}>
                  Usun
                </Button>
                <Button mode="contained" onPress={() => startCamera()}>
                  Zmien
                </Button>
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
        <Button
          mode="contained"
          onPress={() => {
            dispatch(fetchBerries());
          }}>
          Dodaj
        </Button>
        <Button mode="contained" onPress={() => {}}>
          Usun
        </Button>
      </View>
    </View>
  );
};

export default AddMushroomScreen;

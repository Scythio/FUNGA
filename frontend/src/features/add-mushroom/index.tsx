import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {styles} from './styles';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import useCamera from '../../shared/hooks/camera';
import {Button, Text} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {useAppDispatch, useAppSelector} from '../../store';
import {
  fetchMushroomSpecies,
  selectMushroomSpecies,
  selectMushroomSpeciesStatus,
} from '../../store/slices/mushroom/mushroom.slice';
import {FetchingStatus} from '../../shared/constants/fetching-status.enum';
import {MUSHROOOM_QUANTITY_LIST} from './constant/mushroom-quantity.const';
import useGeolocation from '../../shared/hooks/geolocation';
import {selectCurrentUser} from '../../store/slices/user/user.slice';
import {addPost} from '../../store/slices/post/post.slice';

interface AddMushroomScreenProps {}

const AddMushroomScreen: FC<AddMushroomScreenProps> = () => {
  const dispatch = useAppDispatch();
  const mushroomSpecies = useAppSelector(selectMushroomSpecies);
  const mushroomSpeciesStatus = useAppSelector(selectMushroomSpeciesStatus);
  const currentUser = useAppSelector(selectCurrentUser);
  const [selectedMushroomSpecies, setSelectedMushroomSpecies] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [numberOfMushrooms, setNumberOfMushrooms] = useState<number>(0);

  const {startCamera, photo, removePhoto} = useCamera();

  const {currentPosition} = useGeolocation();

  useEffect(() => {
    mushroomSpeciesStatus == FetchingStatus.UNSET &&
      dispatch(fetchMushroomSpecies());
  }, [mushroomSpeciesStatus]);

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
            initialValue={
              selectedMushroomSpecies
                ? `${selectedMushroomSpecies.id}`
                : undefined
            }
            onSelectItem={item => {
              item
                ? setSelectedMushroomSpecies({
                    id: item.id,
                    title: item.title || '',
                  })
                : setSelectedMushroomSpecies(null);
            }}
            dataSet={mushroomSpecies.map(value => ({
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
            maximumValue={4}
            minimumValue={0}
            step={1}
          />
        </View>
        <Text>{MUSHROOOM_QUANTITY_LIST[numberOfMushrooms]}</Text>
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
            selectedMushroomSpecies &&
              numberOfMushrooms > 0 &&
              currentUser &&
              !!photo &&
              photo.base64 &&
              dispatch(
                addPost({
                  mushroomId: parseInt(selectedMushroomSpecies.id),
                  quantity: MUSHROOOM_QUANTITY_LIST[numberOfMushrooms],
                  latitude: currentPosition ? currentPosition.latitude : 52.21,
                  longitude: currentPosition
                    ? currentPosition.longitude
                    : 20.86,
                  userId: currentUser.id,
                  photoBase64: photo.base64,
                }),
              );
          }}>
          Dodaj
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            !!photo && removePhoto();
            setNumberOfMushrooms(0);
          }}>
          Anuluj
        </Button>
      </View>
    </View>
  );
};

export default AddMushroomScreen;

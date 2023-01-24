import React, {useCallback, useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';
import Coordinates from '../../models/coordinates.model';

const useGeolocation = () => {
  const [currentPosition, setCurrentPosition] = useState<
    Coordinates | undefined
  >();
  const [watchID, setWatchID] = useState<number | undefined>();

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            subscribeLocationLocation();
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      watchID && Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentPosition({
          latitude: parseFloat(currentLatitude),
          longitude: parseFloat(currentLongitude),
        });
      },
      error => {},
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    const id = Geolocation.watchPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentPosition({
          latitude: parseFloat(currentLatitude),
          longitude: parseFloat(currentLongitude),
        });
      },
      error => {},
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
    setWatchID(id);
  };

  return {
    currentPosition,
  };
};

export default useGeolocation;

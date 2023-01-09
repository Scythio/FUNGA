import React, {useCallback, useState} from 'react';

import {Asset, launchCamera} from 'react-native-image-picker';
import {
  CameraOptions,
  ImagePickerResponse,
} from 'react-native-image-picker/lib/typescript/types';
import {DEFAULT_CAMERA_OPTIONS} from './constants/default-camera-options.const';

const useCamera = () => {
  const [cameraOptions, setCameraOptions] = useState<CameraOptions>(
    DEFAULT_CAMERA_OPTIONS,
  );
  const [photo, setPhoto] = useState<Asset | undefined>();

  const startCamera = useCallback(() => {
    launchCamera(cameraOptions, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
        console.log('Message error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const photo = response.assets[response.assets.length - 1];
        setPhoto(photo);
      }
    });
  }, [cameraOptions]);

  const removePhoto = useCallback(() => {
    setPhoto(undefined);
  }, [setPhoto]);

  return {
    startCamera,
    photo,
    removePhoto,
  };
};

export default useCamera;

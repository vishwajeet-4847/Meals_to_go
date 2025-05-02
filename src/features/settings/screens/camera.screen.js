import React, { useState, useRef , useContext} from "react";
import styled from "styled-components/native";
import {CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../components/typography/typography.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(CameraView)`
  height: 100%;
  width: 100%;
`;

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CameraScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.5 });
      
      await AsyncStorage.setItem(`@photo-${user.uid}`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return (
      <CenterView>
        <Text>No camera permission granted.</Text>
      </CenterView>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <CenterView>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </CenterView>
    );
  }

  return (
    <TouchableOpacity onPress={snap} style={{ flex: 1 }}>
      <ProfileCamera  ref={cameraRef}  facing="front" />
    </TouchableOpacity>
  );
};

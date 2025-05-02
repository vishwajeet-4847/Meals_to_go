import React from "react";

import {   Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";



import { Text } from "../typography/typography.component";


const CompactImageView = styled.Image`
 width:120px;
 height:100px;
 border-radius:10px;

`;

const Item = styled.View`
    max-width:120px;
  
    padding:10px;
    align-items:center;
    flex:1;
`;

const CompactWebView = styled(WebView)`
    width:120px;
 height:100px;
 border-radius:10px;

`;

const isAndroid = Platform.OS === 'android';
export const CompactRestaurantInfoCard = ({restaurant , isMap})=>{
    const Image = (isAndroid && isMap) ? CompactWebView : CompactImageView;
    return <Item>
            <Image source={{uri:restaurant.photos[0]}}/>
            <Text variant="caption" center noOfLines={3}>{restaurant.name}</Text>

    </Item>

};
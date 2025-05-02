import React, { useContext, useState , useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { Ionicons } from "@expo/vector-icons";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 5%;
  width:100%;
  z-index:999;  
  
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);

  
  const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(
        () => {
          setSearchKeyword(keyword);
        },
        [keyword]
  
    );
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        elevation="5"
        icon={() => <Ionicons name="map-outline" size={24} color="black" />}
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

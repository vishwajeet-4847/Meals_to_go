import React, { useContext, useState , useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { Ionicons } from "@expo/vector-icons";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = ({setFavouritesToggled , isFavouritesToggled}) => {
  const { keyword, search } = useContext(LocationContext);

  
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        elevation="5"
        icon= {isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={setFavouritesToggled}
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

import React, { useContext , useState } from "react";
import styled from "styled-components/native";
import { FlatList , TouchableOpacity} from "react-native";


import { Search } from "../components/search.component";
import { RestrauntInfoCard } from "../components/restaurant-info-card.component";
import { SafeView } from "../../../components/utility/safearea.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestrauntsContext } from "../../../services/restaurant/restaurants.context";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourite.context";
import { FadeInView } from "../../../components/animation/fade.animation";


const RestrauntList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex:1;
`;
const ErrorView = styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;
`;
const ErrorText = styled.Text`
  color:red;
`
const LoadingView = styled.View`
     position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px; 
  margin-left: -25px; 
`;
export const RestrauntsScreen = ({navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestrauntsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled , setIsToggled] = useState(false);
  
  
  return (
    <SafeView>
      <Search  isFavouritesToggled={isToggled} setFavouritesToggled ={()=>setIsToggled(!isToggled)}/>
      {isLoading && (
        <LoadingView>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
        </LoadingView>
      )}
      {error && (

        <ErrorView>
          <ErrorText >{error}</ErrorText>
        </ErrorView>
      )}
      {
        isToggled && <FavouritesBar  favourites={favourites } navigation={navigation}/>
        
      }
      {!isLoading && !error && (


        
        <RestrauntList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <FadeInView>
            <TouchableOpacity onPress={()=>{navigation.navigate("RestaurantDetail",{restaurant:item})}}>
            <RestrauntInfoCard restraunt={item} />
            </TouchableOpacity>
            </FadeInView>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      
      )}
    </SafeView>
  );
};

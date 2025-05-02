import React , {useContext} from 'react';
import { FlatList , TouchableOpacity } from 'react-native';
import { Text } from '../../../components/typography/typography.component';
import { RestrauntInfoCard } from '../../restraunt/components/restaurant-info-card.component';
import { FavouritesContext } from '../../../services/favourites/favourite.context';
import styled from 'styled-components/native';
import { FadeInView } from '../../../components/animation/fade.animation';

const FavouritesRestrauntList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })`
    flex:1;
  `;

export const FavouritesScreen = ({navigation})=>{
    const { favourites } = useContext(FavouritesContext);
    if (!favourites) {
        return <Text variant="label" >No favourites restaurant </Text>
    }
    return (
            <FavouritesRestrauntList
              data={favourites}
              renderItem={({ item }) => {
                return (
                    <FadeInView>
                <TouchableOpacity onPress={()=>{navigation.navigate("Restraunts", {
                    screen: "RestaurantDetail",
                    params: { item }})}}>
                <RestrauntInfoCard restraunt={item} />
                </TouchableOpacity>
                </FadeInView>
                );
              }}
              keyExtractor={(item) => item.name}
            />);
};
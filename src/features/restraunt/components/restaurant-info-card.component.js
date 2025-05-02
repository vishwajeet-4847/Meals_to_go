import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { star } from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestrauntCard,
  RestrauntCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon
  
} from  "./restaurant-info-card.style"
import { Favourite } from "../../../components/favourite/favourite.component";




export const RestrauntInfoCard = ({ restraunt = {} }) => {
  const {
    name = "Some restraunt",
    icon = "https://picsum.photos/700",
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId
  } = restraunt;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestrauntCard elevation={5}>
      <View>
        <Favourite restaurant={restraunt}/>
      <RestrauntCardCover
        key={name}
        source={{ uri: photos[0] }}
      />
      </View>
      <Info>
        <Text  variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20}></SvgXml>
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">ClOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="small" />

            {isOpenNow && <SvgXml xml={open} width={20} height={20}></SvgXml>}
            <Spacer />
            <Spacer position="left" size="small" />
            <Icon source={{ uri: icon }}  />
            <Spacer />
          </SectionEnd>
        </Section>
        <Text>{address}</Text>
      </Info>
    </RestrauntCard>
  );
};

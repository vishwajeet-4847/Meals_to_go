import React, { useContext , useState ,  useCallback }  from "react";
import { SafeView } from "../../../components/utility/safearea.component";
import { Text } from "../../../components/typography/typography.component";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity  } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useFocusEffect } from "@react-navigation/native";

import { AuthContext } from "../../../services/authentication/authentication.context";


const AvatarConatiner = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[4]};
`;
const ListItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
  

`;
export const SettingsScreen = ({navigation}) => {
  const [ photo , setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthContext);
 
  useFocusEffect(
    useCallback(() => {
      const fetchPhoto = async () => {
        try {
          const pic = await AsyncStorage.getItem(`@photo-${user.uid}`);
          if (pic) {
            const sanitizedUri = pic.replace("file://", "");
            setPhoto(pic);
          }
        } catch (error) {
          console.error("Error retrieving photo:", error);
        }
      };

      fetchPhoto();

    }, [user]) 
  );
 
  return (
   
    
    <SafeView>
      <AvatarConatiner>
        <TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
         {
          photo? (
           
            <Avatar.Image size={150} source={{ uri: photo }} />
           
          ) : (
            <Avatar.Icon size={150} icon="human" />
          )
         }
        </TouchableOpacity>
        <Spacer />
        <Text variant="label">{user.email}</Text>
      </AvatarConatiner>
      <List.Section>
        <ListItem
          title="Favourites"
          description="Favourites restraunts here"
          left={() => <List.Icon icon="heart-outline" />}
          onPress={() =>navigation.navigate("Favourites")}
        />
        <ListItem
          title="Logout"
          left={() => <List.Icon  icon="logout" />}
          onPress={()=>onLogout()}
        />
      </List.Section>
    </SafeView>
  );
};

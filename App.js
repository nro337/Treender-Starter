import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  Button,
  TouchableOpacity
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { AntDesign } from '@expo/vector-icons';

const likedProfiles = [];

export default function App() {
  var profile = Profiles.random();
  
  console.log(likedProfiles)
  const [newProfile, setNewProfile] = useState(profile);

  const [prevProfile, setPrevProfile] = useState(profile);

  const getRandomProfile = () => {
    return likedProfiles.push(profile);
  }

  const goBack = () => {
    likedProfiles.pop()

  }
  

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <AntDesign name="setting" size={32} color="#C5C5C5" />
        </TouchableOpacity>
        <Image style={styles.logo} source={Images.logo} />
        <TouchableOpacity>
          <Image style={styles.navIcons} source={Images.chat} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <Image source={profile.image} style={styles.profilePicture} />
        <View style={styles.profileDetails}>
          <View style={styles.profileDetailsRow1}>
            <Text style={[{fontWeight: 'bold'}, {fontSize: 24}]}>{profile.name}, </Text>
            <Text style={{fontSize: 24}}>#{profile.id}</Text>
          </View>
          <Text style={[{fontSize: 16}, {color: '#C5C5C5'}]}>{profile.location}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButtonSmallContainer} onPress={() => {setNewProfile(goBack(newProfile))}}>
          <Image style={styles.actionItemSmall} source={Images.rewind} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonLargeContainer}>
          <Image style={styles.actionItemLarge} source={Images.nope} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonSmallContainer}>
          <Image style={styles.actionItemSmall} source={Images.boost} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonLargeContainer} onPress={() => {setNewProfile(getRandomProfile(newProfile))}}>
          <Image style={styles.actionItemLarge} source={Images.like} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonSmallContainer}>
          <Image style={styles.actionItemSmall} source={Images.superLike} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#E8E8E8"
  },
  navBar: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 44,
        marginTop: 50,
        
      },
      android: {
        height: 56,
        marginTop: 30
      },
      default: {
        paddingTop: "12%"
      }
    }),
    backgroundColor: "#E8E8E8",
    width: Dimensions.get("screen").width,
    borderBottomWidth: 2,
    borderColor: "#C5C5C5"
  },
  navIcons: {
    tintColor: '#C5C5C5',
    width: 32,
    height: 32

  },
  body: {
    //flex: 1,
    backgroundColor: "yellow",
  },
  logo: {
    padding: 20,
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  profileCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderColor: '#C5C5C5',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  profilePicture: {
    width: Dimensions.get("screen").width * 0.8,
    height: Dimensions.get("screen").width * 0.8,
  },
  profileDetails: {
    flexDirection: 'column',
    paddingLeft: '4%',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  profileDetailsRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'red',
    width: Dimensions.get("screen").width * 0.8,
    paddingBottom: '10%',

  },
  actionButtonSmallContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 19,
  },
  actionButtonLargeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },
  actionItemSmall: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  actionItemLarge: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  }
})
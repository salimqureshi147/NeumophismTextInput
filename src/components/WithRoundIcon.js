import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {React, useState} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
const Dwidth = Dimensions.get('window').width;
const percentWidth = Dimensions.get('window').width - 80;
const WithRoundIcon = ({
  LeftImage,
  Self,
  WidthSize,
  PlaceHolderText,
  InputTextColor,
  PlaceHolderTextColor,
  TextSize,
  xAxisPadding,
  yAxisPadding,
  RighIconTintColor,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Neomorph
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff"
        // inner
        // <-- This is important for the shadow to be inside the button
        style={{
          borderRadius: 35,
          width: Dwidth - 100,
          marginVertical: 15,
          height: 65,
          shadowRadius: 2,
          shadowOpacity: 2,
          shadowColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#e0dedf',
        }}>
        <TextInput
          placeholder={PlaceHolderText}
          placeholderTextColor={PlaceHolderTextColor}
          style={{
            width: LeftImage ? percentWidth : WidthSize,
            alignSelf: Self,
            fontSize: TextSize,
            color: InputTextColor,
            paddingVertical: yAxisPadding,
            paddingHorizontal: xAxisPadding,
            borderRadius: 25,
          }}
        />
      </Neomorph>
      <Neomorph
        // inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={{
          shadowRadius: 2,
          shadowOpacity: 2,
          borderRadius: 40,
          backgroundColor: '#e0dedf',
          width: 65,
          height: 65,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Image
          source={require('../assets/search.png')}
          style={{
            height: 25,
            width: 25,
            marginRight: 5,
            tintColor: RighIconTintColor,
          }}
          resizeMode={'contain'}
        />
      </Neomorph>
    </View>
  );
};

export default WithRoundIcon;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: 200,
    height: 50,
    paddingLeft: 10,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    backgroundColor: '#EDEDED',
  },
});

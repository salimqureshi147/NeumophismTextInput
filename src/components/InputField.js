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
const InputField = ({
  LeftImage,
  RightImage,
  Self,
  WidthSize,
  PlaceHolderText,
  InputTextColor,
  PlaceHolderTextColor,
  TextSize,
  xAxisPadding,
  yAxisPadding,
  LefImageTintColor,
  RightImageTintColor,
}) => {
  return (
    <View style={{alignItems: 'center', marginVertical: 20}}>
      <Neomorph
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff"
        // inner
        // <-- This is important for the shadow to be inside the button
        style={{
          borderRadius: 15,
          width: Dwidth - 10,
          height: 65,
          shadowRadius: 2,
          shadowOpacity: 2,
          paddingHorizontal: 20,
          justifyContent: 'space-around',
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
        <Image
          source={require('../assets/search.png')}
          style={{
            height: 25,
            width: 25,
            marginRight: 5,
            tintColor: RightImageTintColor,
          }}
          resizeMode={'contain'}
        />
      </Neomorph>
    </View>
  );
};

export default InputField;

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

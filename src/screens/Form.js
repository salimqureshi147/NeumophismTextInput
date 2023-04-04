import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import InputField from '../components/InputField';
import LITextInput from '../components/RITextInput';
import {Neomorph} from 'react-native-neomorph-shadows';
import RITextInput from '../components/RITextInput';
import WithRoundIcon from '../components/WithRoundIcon';
import SquareIconField from '../components/SquareIconField';
const Form = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e0dedf',
        paddingTop: 20,
      }}>
      <WithRoundIcon
        HeightSize={60}
        WidthSize={'100%'}
        Self={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        RighIconTintColor={'gray'}
        xAxisPadding={15}
        yAxisPadding={0}
      />
      <SquareIconField
        HeightSize={60}
        WidthSize={'100%'}
        Self={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        LeftImageTintcolor={'gray'}
        RightImageTintColor={'gray'}
        RightImage={require('../assets/search.png')}
        yAxisPadding={0}
      />
      <InputField
        HeightSize={60}
        WidthSize={'100%'}
        Self={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        LeftImageTintcolor={'gray'}
        RightImageTintColor={'gray'}
        yAxisPadding={0}
      />
      <RITextInput
        HeightSize={60}
        WidthSize={'100%'}
        Self={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        LeftImageTintcolor={'gray'}
        RightImageTintColor={'gray'}
        xAxisPadding={10}
        yAxisPadding={0}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});

import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes'
import {RoundedButton} from '../components/RoundedButton';

export const Focus=({addSubject})=>{
  const [subject,setSubject]=useState(null);
  return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} label="Focus Item" onChangeText={(text)=>{setSubject(text)}} placeholder="What would you like to Focus on?"/>
      <View style={styles.button}>
        <RoundedButton  title='+' size={50} onPress={()=>{addSubject(subject)}}/>
      </View>
    </View>
  </View>
)};

const styles=StyleSheet.create({
  container:{
    flex:0.2
  },
  inputContainer:{
    padding:spacing.lg,
    justifyContent:'center',
    flexDirection:'row'
  },
  textInput:{
    flex:1,
    color:colors.white,
    marginRight:spacing.sm
  },
  button:{
    justifyContent:'center'
  }
})
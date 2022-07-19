import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

import {colors} from '../utils/colors';
import {spacing,fontSizes} from '../utils/sizes';

export const FocusHistory=({history})=>{
  if (!history || !history.length) return (<Text style={styles.title}>We haven't focused on anything yet!</Text>);
  const renderItem=({item})=>(<Text style={styles.item}>- {item}</Text>);
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  
  title:{
    color:colors.white,
    fontSize:fontSizes.semilg,
    marginLeft:spacing.sm,
    fontWeight:'bold'
  },
  item:{
    color:colors.white,
    marginVertical: spacing.sm,
    fontSize:fontSizes.semilg,
    textAlign:'center'
  },
  container:{
    padding:spacing.md,
    flex:1
  }
})
import React,{useState} from 'react';
import {Text,View,StyleSheet,Vibration} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake'

import {Countdown} from '../components/CountDown'
import {RoundedButton} from '../components/RoundedButton';
import {Timing} from '../components/Timing';

import {spacing} from '../utils/sizes';
import {colors} from '../utils/colors'

const ONE_SEC_IN_MILLI=1000;
const PATTERN=[
  1*ONE_SEC_IN_MILLI,
  1*ONE_SEC_IN_MILLI,
  1*ONE_SEC_IN_MILLI,
  1*ONE_SEC_IN_MILLI,
  1*ONE_SEC_IN_MILLI,
  1*ONE_SEC_IN_MILLI
]
export const Timer = ({focusSubject,clearSubject,onTimerEnd})=>{
  useKeepAwake();
  const [isStarted,setIsStarted]=useState(false)
  const [progress,setProgress]=useState(1)
  const [minutes,setMinutes]=useState(0.1);
  const onEnd=(reset)=>{
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown minutes={minutes} isPaused={!isStarted} onProgress={(progress) => {setProgress(progress)}} onEnd={onEnd}/>
        <View style={{paddingTop:spacing.sm}}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{paddingTop:spacing.sm}}>
        <ProgressBar progress={progress} color={colors.progressBar} style={{height:10}}/>
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttonWrapper}>
        {
          isStarted?(
            <RoundedButton title='Pause' onPress={()=> setIsStarted(false)}/>
          ):
          <RoundedButton title='Start' onPress={()=> setIsStarted(true)}/>
        }
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton  title='-' size={75} onPress={clearSubject} />
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  countdown:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    padding:15,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color:colors.white,
    fontWeight:'bold',
    textAlign:'center'
  },
  task:{
    color:colors.white,
    textAlign:'center'
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  },
  timingWrapper:{
    flex:0.1,
    paddingTop:spacing.lg,
    flexDirection:'row',
  }
})
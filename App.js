import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  const [fm, setFm] = useState('D');
  const [ooad, setOoad] = useState('D');
  const [dm, setDm] = useState('D');
  const [ma, setMa] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 30;
  var totalGradeScores = 0;
  
  function clickMe(){
    alert("this is the click me button"); 
    Alert.alert("this is the click me button"); 

    totalGradeScores = totalGradeScores + gradePoints[sswd] * credits;
    totalGradeScores = totalGradeScores + gradePoints[ob] * credits;
    totalGradeScores = totalGradeScores + gradePoints[fm] * credits;
    totalGradeScores = totalGradeScores + gradePoints[ooad] * credits;
    totalGradeScores = totalGradeScores + gradePoints[dm] * credits;
    totalGradeScores = totalGradeScores + gradePoints[ma] * credits;

    gpa = totalGradeScores / totalPossibleCredits;

    alert("Your GPA is " + gpa);
    Alert.alert("Your GPA is " + gpa);
  }

  const styles = StyleSheet.create({
    container: {
      padding: "5%"
    },
    row: {
      flexDirection: "row",
      marginLeft: "2%",
      marginRight: "2%",
      padding: "2%"
    },
    label: {
      flex: 2
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: "gray",
      padding: "2%"
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Maths</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setSswd}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Financial Management</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setFm}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>OOAD</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOoad}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Digital Marketing</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setDm}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mobile Apps</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setMa}/>
      </View>

      <View style={styles.row}>
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}
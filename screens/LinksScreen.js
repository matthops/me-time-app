import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon, CheckBox } from 'react-native-elements'
import { DataTable } from 'react-native-paper';

export default function LinksScreen() {
  const [value, setValue ] = React.useState("")

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
     <Card title="Weekly Focus">
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder='What would you like to focus on this week?'
    // onChangeText={(text) => this.setState({text})}
    // value={this.state.text}
    />
        </Card>

        <Card title='Habits' > 
          <DataTable> 
          <DataTable.Header>
            <DataTable.Title style={{ minWidth: 100}}>Habit</DataTable.Title>
            <DataTable.Title>M</DataTable.Title>
            <DataTable.Title>T</DataTable.Title>
            <DataTable.Title>W</DataTable.Title>
            <DataTable.Title>Th</DataTable.Title>
            <DataTable.Title>F</DataTable.Title>
            <DataTable.Title>Sa</DataTable.Title>
            <DataTable.Title>Su</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={{ minWidth: 100}} >Habit One two one two </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> - </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> - </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> - </DataTable.Cell>
          <DataTable.Cell> - </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{ minWidth: 100}}>Habit Two</DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> X </DataTable.Cell>
          <DataTable.Cell> - </DataTable.Cell>
          <DataTable.Cell> - </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{ minWidth: 100}}> <Text style={{ color: 'grey'}}> Add Habit</Text> </DataTable.Cell>
        </DataTable.Row>
          </DataTable>
        </Card>
     
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

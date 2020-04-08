import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import ApiKeys from './../constants/ApiKeys'
import * as firebase from "firebase"
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    padding: 50px 0;
    justify-content: center;
    background-color: #f4f4f4;
    align-items: center`;

const Title = styled.Text`
font-size:20px;
text-align:center;
color: black;`

const Item = styled.View`
flex:1;
border:1px solid #ccc;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
width:80%;
padding:10px;` 

const InputField = styled.TextInput` 
height: 40; 
border-color: gray; 
border-width: 1;
`

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showLoading, setShowLoading] = React.useState(false);
  const [status, setStatus] = React.useState('YOU ARE NOT LOGGED IN');

  if(!firebase.apps.length) firebase.initializeApp(ApiKeys.FirebaseConfig)

  const login = async() => {
    firebase.auth().signInWithEmailAndPassword(email, password);
   console.log("HIT LOGIN FUNC")
    setShowLoading(true);
    try {
        const doLogin = await firebase.auth().signInWithEmailAndPassword(email, password);
       
        if(doLogin.user) {
            setShowLoading(false);
            console.log("HIT THE DOLOGIN CONDITIONL", doLogin.user)
          setStatus("YOU ARE LOGGED IN");
          props.setIsUserLoggedIn(true);
            /* navigation.navigate('Home'); */

        }
    } catch (e) {
        console.log(e.message);
        setShowLoading(false);
        setStatus(e.message);
    }
};

  return (
      <Container> 
      { !showLoading ? 
      <Item> 
          <Title>Login</Title>
          <InputField placeHolder='Username' value={email} onChangeText={text => setEmail(text)} />
          <InputField placeHolder='Password' value={password} onChangeText={text => setPassword(text)} />
          <Button title='Submit' onPress={() => login()}/> 
        </Item> : 
          <View> 
                    <ActivityIndicator animating={showLoading} size="large" />
          </View>
        }
     </Container> 
     
  );
}



import React, { Component } from 'react';
import { Button, View, Text, Image, AsyncStorage, Alert  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Data from './../components/data'
import Camera from './../components/camera'
import * as FileSystem from 'expo-file-system'
import api from '../api';

export default class Homescreen extends Component {
  
    constructor() {
        super()
        this.state = {
           lat: Data.lat,
           lon: Data.lon,
           image : '',
        }
     }

     componentDidMount() {
        this.load()
      }

      load = async () => {
        try {
          const image = await AsyncStorage.getItem('image')
          
          console.log('load image')
          console.log(image)

          if (image !== null) {
              Data.image.uri= image;
            this.setState({
                image: image

            })
          }
        } catch (e) {
          console.error('Failed to load .')
        }
      }   

     updateText = () => {
        this.setState({lat: Data.lat});
        this.setState({lon: Data.lon});
     }

     updateImage = () => {
        this.setState({image: Data.image.uri});
        
     }

     uploadToSocialMedia = async () => {

        Alert.alert(
            "Added to social media",
            "Done!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );

        const formData = new FormData();
        formData.append('image', {uri: Data.image.uri, name: 'image', type: 'image/jpg', location: { lat: Data.lat, lon: Data.lon } })
        const response = await api.post("/twitter/upload", formData, {headers: { 'Çontent-Type': 'multipart-form-data' }});
     }

     


    render() {
          
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <View style={{ marginVertical:50 }}>
            <View style={{ backgroundColor: 'rgba(56, 54, 51, 1)', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 20, width: 200, marginVertical:5}}>
                <Text style={{ color:'#fff' }} onPress = {this.updateText}>
                    Lat:{this.state.lat.toPrecision(6)}  Lon:{this.state.lon.toPrecision(6)}
                </Text>
            </View>

            <Button
            color = 'red'
            title="Update coordinates"
            onPress = {this.updateText}/>
        </View>

        <Image
            source={{
                isStatic: true,
                uri: Data.image.uri,
            }}
            style={{height: 200, width:200}}
        />
        <Button
                color='brown'
                title="Preview"
                onPress = {this.updateImage}/>
             

        <View style={{ marginVertical:50 }}>
            <Button
                color='grey'
                title="Take a picture"
                onPress={() => this.props.navigation.navigate('Camera')}
            />
        </View>

        <Button
          color = 'pink'
          title="Go to Storage"
          onPress={() => this.props.navigation.navigate('Storage')}/>

        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map')}/>

        <Button
          color = 'green'
          title="Upload to social media"
          onPress={this.uploadToSocialMedia}/>

      </View>

      
    )
  }
  
}



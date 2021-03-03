import React, { useState, useEffect, useRef } from 'react';
import { Text, View, AsyncStorage, Image } from 'react-native';
import Data from './data'

export default function storage() {
    


    load = async () => {
        try {
          const image = await AsyncStorage.getItem('image')
          
          console.log('load image')

          if (image !== null) {
            this.setState({
                image: image

            })
          }
        } catch (e) {
          console.error('Failed to load .')
        }
      }  

    
     
    
      
  return (


    <View style={{ flex: 1, width : '100%' }}>
       <Image
            source={{
                isStatic: true,
                uri: Data.image.uri,
            }}
            style={{height: 200, width:200}}
        />
        <Text >
                    Lat:{Data.lat.toPrecision(6)}  Lon:{Data.lon.toPrecision(6)}
        </Text> 
    </View>
  );
}

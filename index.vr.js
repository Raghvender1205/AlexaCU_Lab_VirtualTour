import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class AlexaCUVirtualTour extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('image.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('AlexaCUVirtualTour', () => AlexaCUVirtualTour);

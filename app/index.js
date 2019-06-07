import React from 'react';
import  Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet'


EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $border: '#E2E2E2',
    $white: '#FFFFFF',
    $inputText: '#797979',
    $lightGray: '#f0f0f0',
});

export default () => <Home />;
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native'
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({onPress}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image resizeMode="contain" style={styles.icon} source = {require("./images/gear.png")}/>
        </TouchableOpacity>
    </View>
);

Header.PropTypes = {
    onPress: PropTypes.func,
}

export default Header;
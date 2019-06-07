import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from "../components/Container"
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'


const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';


class Home extends Component {

    handlePressBaseCurrency = () =>{
        console.log("base press");
    }

    handlePressQuoteCurrency = () =>{
        console.log("quote press");
    }

    render() {
        return(
            <Container>
            <StatusBar translucent={false} barStyle="light-content"></StatusBar>
            <Logo />
            <InputWithButton
                onPress = {this.handlePressTempCurrency}
                buttonText = {TEMP_BASE_CURRENCY}
                defaultValue = {TEMP_BASE_PRICE}
                keyboardType="numeric"
            />
            <InputWithButton
                onPress = {this.handlePressQuoteCurrency}
                buttonText = {TEMP_QUOTE_CURRENCY}
                editable={false}
                value={TEMP_QUOTE_PRICE}
            />

        </Container>
        )

    }
}

export default Home;
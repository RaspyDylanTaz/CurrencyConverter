import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from "../components/Container";
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header';


const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = '6969.69';
const TEMP_CONVERSION_DATE = new Date();


class Home extends Component {

    handlePressBaseCurrency = () =>{
        console.log("base press");
    }

    handlePressQuoteCurrency = () =>{
        console.log("quote press");
    }

    handleSwapCurrency = () =>{
        console.log("swap Currency");
    }

    handleOptionsPress = () => {
        console.log("Option Press");
    }

    render() {
        return(
            <Container>
            <StatusBar translucent={false} barStyle="light-content"></StatusBar>
            <Header onPress = {this.handleOptionsPress} />
            <KeyboardAvoidingView behavior="padding">
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
            <LastConverted 
                base = {TEMP_BASE_CURRENCY}
                quote = {TEMP_QUOTE_CURRENCY}
                date = {TEMP_CONVERSION_DATE}
                conversionRate = {TEMP_CONVERSION_RATE}
            
            />
            <ClearButton 
            text="reverse Currencies" 
            onPress={this.handleSwapCurrency}
            />
            </KeyboardAvoidingView>
            

        </Container>
        )

    }
}

export default Home;
import { Component } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

export default class Counter extends Component {
    state = {
        count: 0,
        step: 0,
    };
    incrementar() {
        this.setState({ count: this.state.count + this.state.step });
    }
    decrementar() {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - this.state.step });
        } else {
            this.setState({ count: 0 });
        }
    }
    alteraStep(text) {
        this.setState({ step: parseInt(text) });
    }

    render() {
        return (
            <View style={styles.contador}>
                <TextInput 
                    value={ this.state.step.toString()}
                    onChangeText={(text) => this.alteraStep(text)}
                    inputMode="numeric"
                    keyboardType="numeric"
                    style={styles.input}
                 />
                <Text>Contador: {this.state.count}</Text>
                <Button onPress={() => this.incrementar()} title="+"/> 
                <Button onPress={() => this.decrementar()} title="-"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contador: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    input: {
        width: 100,
        height: 40,
        backgroundColor: 'grey',
        textAlign: 'center',
        borderRadius: '5',
    }
});
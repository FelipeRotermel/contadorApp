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
                <Text style={styles.box}>Contador: {this.state.count}</Text>
                <TextInput 
                    value={ this.state.step.toString()}
                    onChangeText={(text) => this.alteraStep(text)}
                    inputMode="numeric"
                    keyboardType="numeric"
                    style={styles.input}
                    max = {10}
                />
                <View style={styles.button}>
                    <Button style={styles.button1} onPress={() => this.incrementar()} title="+"/>
                    <Button style={styles.button2} onPress={() => this.decrementar()} title="-"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contador: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ADD8E6',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    input: {
        width: 100,
        height: 40,
        backgroundColor: 'grey',
        textAlign: 'center',
        borderRadius: 50,
    },
    box : {
        fontSize: 15,
        width: 100,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#93bac7',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button1: {
        padding: 10,
    },
});
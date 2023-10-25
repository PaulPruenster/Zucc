
import { useState } from "react";
import api from "../api/api";
import { Text, Button, TextInput } from "react-native-paper";
import { LoginProps } from "../App";
import { View } from "react-native";
import BaseView from "../components/BaseView";
import Header from "../components/Header";

export default function LoginScreen({ navigation }: LoginProps) {
    const [username, setUsername] = useState('penis');
    const [password, setPassword] = useState('ass');

    function doLogin() {
        navigation.replace('Home')
    }

    return (
        <BaseView>
            <Header style={{
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }}>
                <Text style={{ fontSize: 40, marginVertical: 80 }}>Zucc</Text>
            </Header>

            <View style={{ width: '100%', marginVertical: 50, alignItems: "center", justifyContent: "center", gap: 30 }}>
                <TextInput
                    mode="outlined"
                    style={{ width: '80%' }}
                    placeholder='Username'
                    value={username}
                    onChangeText={nextValue => setUsername(nextValue)} />

                <TextInput
                    mode="outlined"
                    style={{ width: '80%' }}
                    placeholder='Password'
                    value={password}
                    onChangeText={nextValue => setPassword(nextValue)} />


                <Button style={{ width: '80%' }} mode="contained" onPress={doLogin}>
                    Login
                </Button>
            </View>
        </BaseView>
    );
}

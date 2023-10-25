import { View, useColorScheme } from "react-native";
import { ProfileProps } from "../App";
import { Text } from 'react-native-paper'
import BaseView from "../components/BaseView";
import Header from "../components/Header";

export default function ProfileScreen({ navigation }: ProfileProps) {

    return (
        <BaseView>
            <Header>
                <Text style={{ fontSize: 30 }}>Zucc</Text>
            </Header>
        </BaseView>
    );
}

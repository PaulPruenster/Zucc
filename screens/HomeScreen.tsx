import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HomeProps } from "../App";
import { FlatList, RefreshControl, View } from "react-native";
import { Divider, Text, Button, Card, IconButton, Searchbar, AnimatedFAB, Dialog, Portal } from 'react-native-paper'
import BaseView from "../components/BaseView";
import Header from "../components/Header";
import GradeSlider, { GradeFilter } from "../components/GradeSLider";
import api from "../api/api";
import { Boulder } from "../api/responseTypes";
import { TickRequest } from "../api/requestTypes";
import gradeUtils from "../utils/gradeUtils";

export default function HomeScreen({ navigation }: HomeProps) {

    return (
        <BaseView>
            <Header>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: '100%' }}>
                    <IconButton
                        icon="logout"
                        size={30}
                        onPress={() => navigation.replace("Login")}
                    />
                    <Text style={{ fontSize: 30 }}>Zucc</Text>
                    <IconButton
                        icon="account"
                        size={30}
                        onPress={() => navigation.navigate('Profile')}
                    />
                </View>
            </Header>
        </BaseView >
    );
}

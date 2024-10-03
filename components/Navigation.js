import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings'
import ExcerciseList from './ExcerciseList';
import { MeasureVal, ModeVal, Themes } from './UseContexts';
import { useContext, useState } from 'react';
import { useTheme } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();



const SETTINGS = 'Settings';
const EXC_LIST = 'Excercises';



const icons = {
    [SETTINGS]: 'settings',
    [EXC_LIST]: 'running'
}

export default function BottomNav() {

    const theme = useTheme();
    const { modeval } = useContext(ModeVal);

    const themes = {
        background: theme.colors.background,
        text: theme.colors.onSurface,
        listview: theme.colors.surfaceVariant,
        iconColor: modeval ? "white" : "black",
        iconBackground: "rgba(115, 72, 196, 0.829)"
    }

    const [measureval, setMeasureval] = useState(false);

    return (
        <MeasureVal.Provider value={{ measureval, setMeasureval }}>
                <Themes.Provider value={themes}>
                    <NavigationContainer
                        theme={modeval ? DarkTheme : DefaultTheme}
                        >
                        <Tab.Navigator backBehavior='history'>
                            <Tab.Screen
                                name={SETTINGS}
                                component={Settings}
                                options={{ tabBarIcon: () => <SimpleLineIcons name={icons[SETTINGS]} size={24} color={themes.iconColor}/> }} />
                            <Tab.Screen
                                name={EXC_LIST}
                                component={ExcerciseList}
                                options={{ tabBarIcon: () => <FontAwesome5 name={icons[EXC_LIST]} size={24} color={themes.iconColor}/> }} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </Themes.Provider>
        </MeasureVal.Provider>
    );
}
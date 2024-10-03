import React, { useContext, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { PaperProvider, Switch, useTheme } from "react-native-paper";
import { MeasureVal, ModeVal, Themes } from "./UseContexts";

const Settings = () => {

    const themes = useContext(Themes);
    const { measureval, setMeasureval } = useContext(MeasureVal);
    const { modeval, setModeVal } = useContext(ModeVal);


    return (
        <PaperProvider>
            <View style={[styles.container, {backgroundColor: themes.background}]}>
                <View style={styles.buttonContainer}>
                    <View style={[styles.touchablebutton, { backgroundColor: themes.listview, alignItems: 'center' }]}>
                        <Text style={{ color: themes.text, fontSize: 17 }}>Measurement</Text>
                        <Switch
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                            value={measureval}
                            onValueChange={() => setMeasureval(!measureval)}
                        />

                        <Text style={{color: themes.text}}>Km/Mi</Text>
                    </View>

                    <View style={[styles.touchablebutton, { backgroundColor: themes.listview, alignItems: 'center' }]}>
                        <Text style={{ color: themes.text, fontSize: 17 }}>Dark mode</Text>
                        <Switch

                            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                            value={modeval}
                            onValueChange={() => setModeVal(!modeval)}

                        />{console.log(modeval)}

                        <Text style={{color: themes.text}}>On/Off</Text>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        margin: 20,
        padding: 10
    },
    touchablebutton: {
        flexDirection: "row",
        height: 50,
        width: 350,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: 10
    }
})
export default Settings;
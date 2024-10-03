import React, { useContext } from "react"
import { View, Text } from "react-native"
import { PaperProvider, RadioButton, Switch, useTheme } from "react-native-paper";
import { MeasureVal, ModeVal, Themes } from "./UseContexts";
import styles from "../styles/Styles"

const Settings = () => {

    const themes = useContext(Themes);
    const { measureval, setMeasureval } = useContext(MeasureVal);
    const { modeval, setModeVal } = useContext(ModeVal);


    return (
        <PaperProvider>
            <View style={[styles.container, { backgroundColor: themes.background }]}>
                <View style={styles.buttonContainer}>
                    <View style={[styles.measureradio, { backgroundColor: themes.listview}]}>
                        <Text style={{ color: themes.text, fontSize: 17 }}>Units</Text>

                        <View style={styles.radibuttongroup}>
                        <RadioButton.Group
                            onValueChange={(value) => {setMeasureval(value === 'false')}}
                            value={measureval ? 'false' : 'true'}
                        >
                            <View  style={{flexDirection: 'row', alignItems: 'center'}}>
                            <RadioButton
                                value="true"
                                uncheckedColor={themes.iconBackground}
                            /><Text style={{color: themes.text}}>Km</Text>

                            <RadioButton
                                value="false"
                                uncheckedColor={themes.iconBackground}
                            /><Text style={{color: themes.text}}>Mi</Text>
                            </View>
                        </RadioButton.Group>
                        </View>
                    </View>

                    <View style={[styles.themeswitch, { backgroundColor: themes.listview, alignItems: 'center' }]}>
                        <Text style={{ color: themes.text, fontSize: 17 }}>Dark mode</Text>
                        <Switch

                            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                            value={modeval}
                            onValueChange={() => setModeVal(!modeval)}

                        />{console.log(measureval)}

                        <Text style={{ color: themes.text }}>Off/On</Text>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )

}
export default Settings;
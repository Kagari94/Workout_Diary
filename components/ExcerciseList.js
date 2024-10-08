import React, { useContext, useEffect, useState } from "react"
import { View, StyleSheet, FlatList, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Modal, TextInput, Button, PaperProvider, Portal, Text, Icon, SegmentedButtons } from 'react-native-paper'
import { Calendar } from "react-native-calendars";
import { MeasureVal, Themes } from "./UseContexts";
import styles from "../styles/Styles";

const ExcerciseList = () => {

    const { measureval } = useContext(MeasureVal);
    const themes = useContext(Themes);


    const [excercises, setExcercise] = useState([
        { id: 1, distance: 20, time: 2.5, date: '19.9.2024', icon: 'run-fast' },
        { id: 2, distance: 123, time: 123, date: '4.9.2024', icon: 'swim' },
        { id: 3, distance: 22, time: 22, date: '22.9.2024', icon: 'bike-fast' },
        { id: 4, distance: 52, time: 11, date: '31.9.2024', icon: 'swim' },
        { id: 5, distance: 4, time: 55, date: '6.9.2024', icon: 'run-fast' },
        { id: 6, distance: 11, time: 22, date: '14.9.2024', icon: 'swim' },
        { id: 7, distance: 6, time: 11, date: '2.9.2024', icon: 'swim' }
    ]);
    const [runDistance, setRunDistance] = useState(0);
    const [swimDistance, setSwimDistance] = useState(0);
    const [bikeDistance, setBikeDistance] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);
    const [calendarVisible, setCaldendarVisible] = useState(false);
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);
    const [date, setDate] = useState(null);

    const [buttonState, setButtonState] = useState('run-fast');// iconien kanssa leikkimistä


    const Item = ({ excercise }) => {
        //Print out the items on a FlatList
        const distMode = measureval ? 'Mi' : 'Km';
        let distance = 0;
        if (measureval === true) {
            distance = Number(excercise.distance * 0.621371).toFixed(2);
        } else {
            distance = Number(excercise.distance).toFixed(2);
        }
        return (
            <View style={[styles.flatlistview, { backgroundColor: themes.listview }]}>
                <View>
                    <Text style={[styles.flatlisttext, { color: themes.text }]}>Distance: {distance}{distMode}</Text>
                    <Text style={[styles.flatlisttext, { color: themes.text }]}>Time: {excercise.time} min</Text>
                    <Text style={[styles.flatlisttext, { color: themes.text }]}>Date: {excercise.date}</Text>
                </View>
                <View style={styles.icon}>
                    <Icon source={excercise.icon} size={50} color={themes.iconColor} />
                </View>

            </View>

        );
    }

    const AddingDistance = () => {
        //zero the distances so it wont keep on adding on top of already done rounds
        setRunDistance(0)
        setBikeDistance(0)
        setSwimDistance(0)

        //Count the distances per exercise.
        //Also do the maths of converting km to miles
        for (let i = 0; i < excercises.length; i++) {
            if (excercises[i].icon === 'run-fast' && measureval === true) {
                setRunDistance(prev => prev + Number(excercises[i].distance) * 0.621371);
            } else if (excercises[i].icon === 'run-fast' && measureval === false) {
                setRunDistance(prev => prev + Number(excercises[i].distance));
            } else if (excercises[i].icon === 'swim' && measureval === true) {
                setSwimDistance(prev => prev + Number(excercises[i].distance) * 0.621371);
            } else if (excercises[i].icon === 'swim' && measureval === false) {
                setSwimDistance(prev => prev + Number(excercises[i].distance));
            } else if (excercises[i].icon === 'bike-fast' && measureval === true) {
                setBikeDistance(prev => prev + Number(excercises[i].distance) * 0.621371);
            } else if (excercises[i].icon === 'bike-fast' && measureval === false) {
                setBikeDistance(prev => prev + Number(excercises[i].distance));
            }
        }
    };

    useEffect(() => {
        //run the AddingDistance once when opening the app, and always when the state of excercises list changes.
        AddingDistance();
    }, [excercises, measureval])

    function AddExercise() {
        //Add items to the list of excercises.
        if (isNaN(distance) || distance < 0 || isNaN(time) || time < 0) {
            alert("antamasi arvo ei ole numero tai numero on negatiivinen.")
        } else if (date === null) {
            alert("Valitse päivämäärä")
        } else {
            if (measureval === true) {
                const exce = { id: excercises.length + 1, distance: distance * 1.609344, time, date, icon: buttonState };
                setExcercise([...excercises, exce]);
                AddingDistance();
            } else {
                const exce = { id: excercises.length + 1, distance: distance, time, date, icon: buttonState };
                setExcercise([...excercises, exce]);
                AddingDistance();
            }

        }
        setDate(null);
        setTime(null);
        setDistance(null);
    }
    const hideModal = () => setCaldendarVisible(false);

    function dateSelected(day) {
        //Set date and close the calendar
        setCaldendarVisible(false);
        setDate(day.dateString);
    }

    return (
        <PaperProvider>
            <View style={[styles.container, { backgroundColor: themes.background }]}>
                <Portal>
                    <Modal
                        visible={modalVisible}
                        transparent={true}
                        onDismiss={() => setModalVisible(!modalVisible)}
                        contentContainerStyle={styles.modal}
                    >
                        <KeyboardAvoidingView
                            style={styles.container}
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <ScrollView style={[styles.calendarView, { backgroundColor: themes.background }]}>

                                <View style={styles.buttongroup}>
                                    <SegmentedButtons
                                        onValueChange={buttonState => setButtonState(buttonState)}
                                        value={buttonState}
                                        buttons={[
                                            {
                                                value: 'run-fast',
                                                icon: 'run-fast',
                                                style: { backgroundColor: themes.iconBackground },
                                                checkedColor: 'white',
                                                showSelectedCheck: true
                                            },
                                            {
                                                value: 'swim',
                                                icon: 'swim',
                                                style: { backgroundColor: themes.iconBackground },
                                                checkedColor: 'white',
                                                showSelectedCheck: true
                                            },
                                            {
                                                value: 'bike-fast',
                                                icon: 'bike-fast',
                                                style: { backgroundColor: themes.iconBackground },
                                                checkedColor: 'white',
                                                showSelectedCheck: true
                                            }
                                        ]} />
                                </View>


                                <View style={styles.textview}>
                                    <TextInput label={measureval ? "miles" : "kilometers"} keyboardType='decimal-pad' style={styles.textinput} onChangeText={e => setDistance(e)} />

                                    <TextInput label="time(min)" keyboardType='decimal-pad' style={styles.textinput} onChangeText={e => setTime(e)} />
                                </View>

                                <View style={styles.addexercise}>
                                    <Text variant='bodyMedium' style={{ color: themes.text }}>{date ? date : 'Select date'}</Text>
                                    <Portal>
                                        <Modal
                                            visible={calendarVisible}
                                            transparent={true}
                                            dismissable={true}
                                            onDismiss={hideModal}
                                            contentContainerStyle={styles.calendarModal}
                                        >
                                            <Calendar onDayPress={dateSelected} />
                                        </Modal>
                                    </Portal>
                                </View>

                                <View style={styles.calendarButton}>
                                    <Button mode='contained' onPress={e => setCaldendarVisible(true)} >Select</Button>
                                </View>


                                <View style={styles.donebutton}>
                                    <Button mode='contained' onPress={() => { setModalVisible(false), AddExercise() }} >Add</Button>
                                </View>

                            </ScrollView>
                        </KeyboardAvoidingView>

                    </Modal>
                </Portal>

                <View style={styles.combined}>
                    <View style={[styles.combinedicons, { backgroundColor: themes.listview }]}>
                        <Icon source='run-fast' size={50} color={themes.iconColor} />
                        <Text style={{flex: 1, color: themes.text, fontSize: 12}}>{runDistance.toFixed(2)}{measureval ? 'Mi' : 'Km'}</Text>
                    </View>
                    <View style={[styles.combinedicons, { backgroundColor: themes.listview }]}>
                        <Icon source='swim' size={50} color={themes.iconColor} />
                        <Text style={{flex: 1, color: themes.text, fontSize: 12}}>{swimDistance.toFixed(2)}{measureval ? 'Mi' : 'Km'}</Text>
                    </View>
                    <View style={[styles.combinedicons, { backgroundColor: themes.listview }]}>
                        <Icon source='bike-fast' size={50} color={themes.iconColor} />
                        <Text style={{flex: 1, color: themes.text, fontSize: 12}}>{bikeDistance.toFixed(2)}{measureval ? 'Mi' : 'Km'}</Text>
                    </View>
                </View>

                <View style={styles.flatlistview}>
                    <FlatList
                        data={excercises}
                        extraData={measureval}
                        renderItem={({ item }) => <Item excercise={item} />}
                    />
                </View>

                <View style={styles.addexercisebutton}>
                    <Button mode='contained' onPress={() => setModalVisible(true)} >Add exercise</Button>
                </View>

            </View>
        </PaperProvider>
    );
}


export default ExcerciseList;
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        margin: 20,
        padding: 10
    },
    themeswitch: {
        flexDirection: "row",
        height: 50,
        width: width * 0.85, 
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: 10
    },
    measureradio: {
        flexDirection: "row",
        height: 50,
        width: width * 0.85, 
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: 10
    },
    radibuttongroup:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'flex-end'
    },
    modal: {
        marginTop: -200, // Modal ei siirry ylös justifyllä etc, tähän täytyy tyytyä.
        alignSelf: 'center',
        width: 340,
        height: 380
    },
    addexercise: {
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 17,
    },
    calendarView: {
        flex: 1
    },
    calendarModal: {
        flex: 1,
        marginTop: -200,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textview: {
        flex: 1,
        alignContent: 'flex-start',
        width: width * 0.9, 
        marginTop: 10,
        marginHorizontal: 10
    },
    textinput: {
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    calendarButton: {
        flex: 1,
        width: 100,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },
    addexercisebutton: {
        flex: 0.1,
        marginRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    donebutton: {
        flex: 1,
        marginTop: 30,
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    buttongroup: {
        justifyContent: 'center',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    flatlistview: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
    combined: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    combinedicons: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
        borderWidth: 2,
        borderRadius: 10
    },
    flatlisttext: {
        fontSize: 15,
        marginLeft: 20
    }
})

export default Styles;
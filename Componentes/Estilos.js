import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontSize: 48,
        color: "white",
    },
    button: {
        margin:75
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    topToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        top: 0,
    },
    captureBtn: {
        width: 70,
        height: 70,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
        marginBottom:40,
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    backColor:{
        backgroundColor: 'salmon',
    },
    resText:{
        color: 'black', 
        fontSize: 30, 
        fontWeight: 'bold',
        margin: 10,
        padding:30
        
    },    
    showImage: { 
        width: 250, 
        height: 350,
        margin: 20,
        padding:30
    },
    SpinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
import React, {Component} from 'react';
import { View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Text, Title} from 'native-base';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'

import styles from './Estilos';
import Herramientas from './IconosCamara';
import Resultados from './Resultados';

const endpoint = 'https://vision.googleapis.com/v1/images:annotate?key=';
const apiKey='AIzaSyBZk1Vsxcr-rfBSbPlxD13uuoZpAbzBY-c';

export default class Camara extends Component {
    camera = null;

    state = {
        hasCameraPermission: null,
        flashMode: Camera.Constants.FlashMode.off,
        loading: false,
        resultOk: false,
        resultados: [],
        imagen:null
        
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted' );

        this.setState({ hasCameraPermission });
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    
    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync({
            base64: true,
        }).then(data => {
            console.log("Cargando...");
            this.callApi(data.base64);
            this.setState({ loading: true, imagen:data });
            
        })   
        
                
    };

    callApi = async (b64) => {
        let result = await fetch(endpoint + apiKey, {
            method: 'POST',
            body: JSON.stringify({
                "requests": [
                    {
                        "image": {
                            "content": b64
                        },
                        "features": [
                            { 
                                "type": "LABEL_DETECTION"
                            }
                        ],
                    }
                ]
            })
        });
    
        await result.json()
        
            .then(result => {
                if (result) {
                    
                    this.setState(
                        {
                            loading: false,
                            resultOk:true,
                            resultados:result.responses[0].labelAnnotations
                        }
                    )
                    console.log('Acá está la respuesta nueva: \n', this.state.resultados);
                }
            }).catch((error) => { console.log(error) })
          
    }



    render() {

        const { hasCameraPermission, flashMode, resultados } = this.state;
        
        if (hasCameraPermission === null) {
            return <Text>...</Text> ;
        } else if (hasCameraPermission === false) {
            return <Text>El permiso para usar la cámara fue denegado, por favor otorgue permisos desde la configuración para continuar.</Text>;
        } 

        return (
            <React.Fragment>
                
            {!this.state.loading && !this.state.resultOk && 
                <React.Fragment>
                    <View>
                        <Camera
                            style={styles.preview}
                            flashMode={flashMode}
                            ref={camera => this.camera = camera}
                        />
                    </View>
                    
                    <Herramientas 
                        flashMode={flashMode}
                        setFlashMode={this.setFlashMode}
                        
                        onShortCapture={this.handleShortCapture}
                    />
                </React.Fragment>
                }
                

                {this.state.loading &&
                    <View style={styles.SpinnerStyle}>
                        <ActivityIndicator size='large' />
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Cargando...</Text>
                    </View>}

                {!this.state.loading && this.state.resultOk && 
                    <ScrollView style={styles.backColor}>
                        <Title syle={styles.resText}>
                        Estos son los resultados que pudimos 
                        </Title>
                        <Title syle={styles.resText}>
                        encontrar sobre tu foto ♥
                        </Title>
                        <Image source={this.state.imagen} style={styles.showImage} />   
                        <Resultados resultados={resultados} />

                    </ScrollView>
                }

            </React.Fragment>
            
        );
    }


}

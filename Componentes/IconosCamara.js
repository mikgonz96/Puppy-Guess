import React from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableOpacity } from 'react-native';

import styles from './Estilos';

const { FlashMode: CameraFlashModes } = Camera.Constants;

export default ({ 
    
    capturing = false, 
    
    flashMode = CameraFlashModes.off, 
    setFlashMode, onShortCapture,  
}) => (
    
    <Grid>
        <Row style={styles.topToolbar}>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setFlashMode( 
                    flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on 
                )}>
                    <Ionicons
                        name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                        color= {flashMode == CameraFlashModes.on ? "yellow" : 'white'}
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
            
            <Col/>
            <Col/>
        </Row>
        <Row style={styles.bottomToolbar}>
            
            <Col/>
            <Col size={2} style={styles.alignCenter}>
                <TouchableOpacity
                    
                    onPress={onShortCapture}>
                    <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal} />}
                    </View>
                </TouchableOpacity>
            </Col>
            <Col/>
        </Row>
    </Grid>
);
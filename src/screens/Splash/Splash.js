import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import navigationStrings from '../../Navigations/navigationStrings';

const Splash = () => {
    const navigation = useNavigation();
    React.useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace(navigationStrings.TAB_ROUTES);
        }, 2000);


        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={require('../../assets/images/whtsapp.gif')}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
    },
    image: {
        width: 150,
        height: 150, 
    },
});
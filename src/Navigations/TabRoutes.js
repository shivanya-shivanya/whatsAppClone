import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import navigationStrings from './navigationStrings';
import * as Screens from '../screens';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const bottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <bottomTab.Navigator
            // tabBar={(tabsProps) => {
            //     <>
            //         <BottomTabBar {...tabsProps} />
            //     </>
            // }}
            initialRouteName={navigationStrings.SPLASH}
            // screenOptions={{
            //     headerShown: false,
            //     tabBarActiveTintColor: colors.black,
            //     tabBarInactiveTintColor: colors.gray,
            //     style: styles.customBottomTabStyle
            // }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#4BA586',
                tabBarInactiveTintColor: 'gray',
                //Tab bar styles can be added here
                tabBarStyle: {
                   
                },
                tabBarLabelStyle: {
                    paddingBottom: 4,
                    fontSize:13
                },
            })}
        >

            <bottomTab.Screen name={navigationStrings.CHATS} component={Screens.Chats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.firstActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain',tintColor:'#4BA586' }} /> : <Image source={imagePath.firstInActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        );
                    }

                }}
            />

            <bottomTab.Screen name={navigationStrings.UPDATES} component={Screens.Updates}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.secondActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain',tintColor:'#4BA586' }} /> :
                                <Image source={imagePath.secondInActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        )
                    }

                }}
            />

            <bottomTab.Screen name={navigationStrings.COMMUNITIES} component={Screens.Communities}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.thirdActiveIcon} style={{ height: 65, width: 65, resizeMode: 'contain',tintColor:'#4BA586' }} /> : <Image source={imagePath.thirdInActiveIcon} style={{ height: 65, width: 65, resizeMode: 'contain',tintColor:'#000'}} />
                        )
                    }

                }}
            />

            <bottomTab.Screen name={navigationStrings.CALLS} component={Screens.Calls}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.fourthActiveIcon} style={{ height: 15, width: 15, resizeMode: 'contain',tintColor:'#4BA586' }} />
                                :
                                <Image source={imagePath.fourthInActiveIcon} style={{ height: 15, width: 15, resizeMode: 'contain',tintColor:'#000' }} />
                        )
                    }

                }}
            />

        </bottomTab.Navigator>

    )
}

const styles = StyleSheet.create({
    customBottomTabStyle: {
        backgroundColor: colors.theme
    }
})

export default TabRoutes
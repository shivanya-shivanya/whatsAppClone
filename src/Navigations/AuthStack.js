import React from "react";
import navigationStrings from "./navigationStrings";
import * as Screens from "../screens";


export default function (Stack, isFirstTime) {
    return (

        <>

            <Stack.Screen
                name={navigationStrings.INITIALSCREEN}
                component={Screens.InitialScreen} />
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Screens.Login} />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Screens.Signup} />


        </>

    )
}
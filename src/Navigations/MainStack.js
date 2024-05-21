import React from "react";
import navigationStrings from "./navigationStrings";
import * as Screens from "../screens";
import TabRoutes from "./TabRoutes";

export default function (Stack) {
    return (

        <>

            <Stack.Screen
                name={navigationStrings.SPLASH}
                component={Screens.Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}
            />
        </>

    )
}
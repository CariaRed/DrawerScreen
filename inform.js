import React from "react"
import {StyleSheet, Text, View} from "react-native"


function information() {
    return(
        <View style={styles.container}>
            <Text style={styles.initialization}>
            Execute expo r -c Depois de adicionar o código abaixo ao babel.config.js:
            plugins: ['react-native-reanimated/plugin'],
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        flex: 1,
        backgroundColor:"gray",
        alignItems: "center",

    },

    initialization:{

        color: "green",
        borderRadius: 10,

    },  
})

export default information;
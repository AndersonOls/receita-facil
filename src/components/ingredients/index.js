import { View, StyleSheet, Text  } from "react-native";

export function Ingredientes({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        marginBottom:14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:12,
        borderRadius:4,
    },
    name:{
        fontWeight: 500,
        fontSize: 16,
    }
})
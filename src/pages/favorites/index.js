import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import {FoodList} from '../../components/foodlist'

import { getFavorites } from "../../utils/storage";

export function Favorites() {
  const [receips, setReceips] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setReceips(result)
      }
    }

    if (isActive) {
      getReceipes();
    }

    return () =>{
        isActive = false;
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tittle}>Receitas Favoritas</Text>

      {receips.length === 0 && (
        <Text>Você ainda não tem nenhuma receita salva.</Text>
      )}

      <FlatList 
        showsVerticalScrollIndicator={false}
        style ={{marginTop: 14}}
        data={receips}
        keyExtractor={ (item) => String(item.id)}
        renderItem={ ({item}) => <FoodList data={item}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },
  tittle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
});

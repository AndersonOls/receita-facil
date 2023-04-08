import AssyncStorage from '@react-native-async-storage/async-storage'


export async function getFavorites(key){
    const favorites = await AssyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
}

export async function saveFavorites(key, newItem){
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some( item => item.id === newItem.id)

    if(hasItem){
        console.log("esse item já está salvo")
        return;
    }

    myFavorites.push(newItem)

    await AssyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("salvo com sucesso")
}

export async function removeItem(id){
    let receips = await getFavorites("@appreceitas")

    let myFavorites = receips.filter( item => {
        return (item.id !== id)
    })

    await AssyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log("Item deleteado")

    return myFavorites
    
}

export async function isFavorites(receipe){

    let myReceipes = await getFavorites ("@appreceitas")

    const favorite = myReceipes.find( item => item.id === receipe.id)
    
    if(favorite){
        return true;
    }

    return false;
}
 
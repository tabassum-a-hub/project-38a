class Food{
    constructor(){
        foodstock,
        lastfed;
    }

    getFoodStock(){
      var foodStockRef = database.ref('foodStock');
      foodStockRef.on("value",function(data){
        foodStock = data.val();
      })
    }
  
    updateFoodStock(count){
      database.ref('/').update({
        foodStock: count
      });
    }
  
    deductFood(name){
      database.ref(playerIndex).set({
        name:name
      });
    }
}


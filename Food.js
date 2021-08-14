class Food{
    constructor(){
        this.foodStock=15;
        this.lastFed;
       
    }


    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
    }

    deductFood(){
        if(this.foodStock>0)(
            this.foodStock=this.foodStock-1
        )
        return this.foodStock
    }

    getFoodStock(){
        return this.foodStock;
    }

   
}
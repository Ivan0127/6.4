const pizzaPie ={ //object
pizzaStyle: "supreme",
meats: ["pepproni", "sausage", "candian bacon", "bacon"],//array
veggies: ["mushrooms", "peppers", "olives", "onions"]//array
};



pizzaPie.name =function(){
return (this.meats+" "+this.veggies).toUpperCase();//object mothod



};



console.log (pizzaPie);
window.alert (pizzaPie);
meats[3] = "anchovies";//array method
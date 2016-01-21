var data = require("./products.json")

// Write your solutions below

//console.log(data["items"][0]['kind']);

//QUESTION 1--------------------------


var shoppingProducts = [];

for (var i = 0; i < (data['items'].length); i++) {
	if (data['items'][i]['kind'] === "shopping#product") {
		shoppingProducts.push("Item " + i + " is a shopping#product.");
	}
}

console.log(shoppingProducts);
console.log(shoppingProducts.length + " items total."); 


//Answer = 25, same as currentItemCount

//QUESTION 2----------------------------


var backOrdered = [];

for (var i = 0; i < (data['items'].length); i++) {
	for (var j = 0; j < data['items'][i]['product']['inventories'].length; j++) {
		if ((data['items'][i]['product']['inventories'][j]['availability']) === "backorder") {
			backOrdered.push("Item " + i + " has a backorder.");
		}
	}
}

console.log(backOrdered);
console.log(backOrdered.length + " items total.");


//Answer = 2 [Sony Alpha DSLR SLT-A77, Fujifilm FinePix FEAL 3D W3]

//QUESTION 3----------------------------


var manyImages = [];

for (var i = 0; i < data['items'].length; i++) {
	if (data['items'][i]['product']['images'].length > 1) {
		manyImages.push("Item " + i + " has more than one image link.");
	} 
} 

console.log(manyImages);
console.log(manyImages.length + " items total.");


//Answer = 6

//QUESTION 4------------------------------


var canonProducts = [];

for (var i = 0; i < data['items'].length; i++) {
	if (data['items'][i]['product']['brand'] === ("Canon" || "canon")) {
		canonProducts.push("Item " + i + " is a Canon product.");
	}
}

console.log(canonProducts);
console.log(canonProducts.length + " items total.");


//Answer = 7

//QUESTION 5----------------------------


var eBayAndCanon = [];

for (var i = 0; i < data['items'].length; i++) {
	if((data['items'][i]['product']['author']['name'].includes("eBay")) && (data['items'][i]['product']['brand'].includes("Canon" || "canon") === true)) {
		eBayAndCanon.push("Item " + i + " has product author name 'eBay' and brand 'Canon'.");
	}
}

console.log(eBayAndCanon);
console.log(eBayAndCanon.length + " items total.");



//Answer = 4

//QUESTION 6-----------------------------


var allProducts = [];

for (var i = 0; i < data["items"].length; i++) {
	console.log(data['items'][i]['product']['brand']);
	console.log(data['items'][i]['product']['inventories'][0]['price']);
	console.log(data['items'][i]['product']['images'][0]['link']);
}
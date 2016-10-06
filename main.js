
	var price = 0;
	items.forEach(function (obj) {
	    price += Number (obj.price)
	    
	})

       avg = price / items.length

console.log(avg.toFixed(2))


document.getElementById('answer1').innerHTML = avg.toFixed(2)

var arr = []
var newArr = items.filter(function(item){
  if (item.price > 14 && item.price < 18) {
    arr += item.title
  }
})
console.log(arr)
document.getElementById('answer2').innerHTML = arr

var GBP = ""
var currency = items.filter(function(item){
	if (item.currency_code === "GBP") {
      GBP += item.title + " " + item.price
		 
	}
	
})
console.log(GBP)
document.getElementById('answer3').innerHTML = GBP

var woodItems = []
var newArr = items.filter(function(item){
	if(item.materials.indexOf("wood") !== -1){
		woodItems += item.title
	}
})
console.log(woodItems)

document.getElementById('answer4').innerHTML = woodItems

var morMaterials = []
var newArr = items.filter(function(item){
	if (item.materials.length >= 8 ) {
		 morMaterials += item.title +" "+ item.materials + " " + item.materials.length
}
})
console.log(morMaterials)


document.getElementById('answer5').innerHTML = morMaterials

var me = 0
var numb = items.forEach(function(item){
	me += item.who_made === "i_did" 
		
})
newNum = me.length 
console.log(me + " " + "were made by sellers")

document.getElementById('answer6').innerHTML = me + " " + "were made by sellers"




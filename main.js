
	var price = 0;
	items.forEach(function (obj) {
	    price += Number (obj.price)
	    
	})

var avg = price / items.length

avg.toFixed(2)

var newArr = items.filter(function(item){
	 
  if (items.price > 14 && items.price < 18) {
    return true
  }else{
  	return false
  }
})

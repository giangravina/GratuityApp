//gratuity project

billAmount  = 92.2;

function gratuity(check){
	return check * 0.2;
}

function totalWithGrat(receipt){
	return receipt  + gratuity(receipt);
	var total = receipt + gratuity(receipt);
	return total.toFixed(3);
}
console.log("Your new  total including gratuity is: " +  totalWithGrat(billAmount));
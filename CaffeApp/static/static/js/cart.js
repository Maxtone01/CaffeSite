var updateBtns = document.getElementsByClassName('buy-btn')


for (i = 0; i < updateBtns.length; i++) {
	updateBtns[i].addEventListener('click', function(){
		var productId = this.id
		var action = this.dataset.action

		if (user === 'AnonymousUser'){
			addCookieItem(productId, action)
		}
	})
}

var quant = 0
cart[quant] = {'quant': 0}
function addCookieItem(productId, action){
	console.log('User is not authenticated')

	if (action === 'add'){
		var total = parseInt(document.getElementById("cart-total").textContent)
		total++
		cart[quant]['quant'] = total
		document.getElementById("cart-total").innerHTML = cart[quant]['quant']
		console.log(cart[quant]['quant'])
		if (cart[productId] === undefined){
		cart[productId] = {'quantity':1}

		}else{
			cart[productId]['quantity'] += 1
		}
	}

	if (action === 'remove'){
		cart[productId]['quantity'] -= 1

		if (cart[productId]['quantity'] <= 0){
			delete cart[productId];
			location.reload()
		}
	}

	if (action === 'add_cart'){
		cart[productId]['quantity'] += 1
		location.reload()
	}
	console.log('CART:', cart)
	document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"

	const element = document.getElementById("cart-image");
	element.classList.add('animation');
	setTimeout(function () {
		element.classList.remove('animation');
	}, 500)
}

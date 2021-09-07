if (shipping === 'True'){
		 	document.getElementById('shipping-info').innerHTML = ''
		}

		if (user !== 'AnonymousUser'){
		 	document.getElementById('user-info').innerHTML = ''
		 }

		if (shipping === 'False' && user !== 'AnonymousUser'){
			//Hide entire form if user is logged in and shipping is false
				document.getElementById('form-wrapper').classList.add("hidden");
				//Show payment if logged in user wants to buy an item that does not require shipping
			    document.getElementById('payment-info').classList.remove("hidden");
		}

		var form = document.getElementById('form')
		form.addEventListener('submit', function(e){
	    	e.preventDefault()
	    	console.log('Form Submitted...')
	    	document.getElementById('form-button').classList.add("hidden");
	    	document.getElementById('payment-info').classList.remove("hidden");
	    })

	    document.getElementById('make-payment').addEventListener('click', function(e){
	    	submitFormData()
	    })

	    function submitFormData(){
	    	console.log('Payment button clicked')

	    	var userFormData = {
				'name':null,
				'phone':null,
				'total':total,
			}

			var shippingInfo = {
				'address':null,
				'district':null,
			}

			if (shipping !== 'False'){
	    		shippingInfo.address = form.address.value
		    	shippingInfo.district = form.district.value
	    	}

	    	if (user === 'AnonymousUser'){
	    		userFormData.name = form.name.value
	    		userFormData.phone = form.phone.value
	    	}

	    	console.log('Shipping Info:', shippingInfo)
	    	console.log('User Info:', userFormData)


	    	var url = "/process_order/"
	    	fetch(url, {
	    		method:'POST',
	    		headers:{
	    			'Content-Type':'applicaiton/json',
	    			'X-CSRFToken':csrftoken,
	    		},
	    		body:JSON.stringify({'form':userFormData, 'shipping':shippingInfo}),

	    	})
	    	.then((response) => response.json())
	    	.then((data) => {
				console.log('Success:', data);
				var _name = document.getElementById("name").value
				var _phone = document.getElementById("phone").value
				var _district = document.getElementById("district").value
				var _address = document.getElementById("address").value
				var _all = document.getElementById("all_quantity").textContent
				var _sum = document.getElementById("sum").textContent
				const _product = document.querySelectorAll('.prod_name')
				const _quantity = document.querySelectorAll('.quantity')
				const list_prod = Array.prototype.map.call(_product, function(t){ return t.textContent })
				const list_quant = Array.prototype.map.call(_quantity, function(t){ return t.textContent })
				const a = list_prod.map(function (e, i) {return [e, list_quant[i]]})
				console.log(a)
				var my_text = `Новий заказ: %0A Имя: ${_name} %0A Телефон:${_phone} %0A Район: ${_district} %0A
				 Адресс: ${_address} %0A Блюда: ${a} %0A
				 Общее число блюд: ${_all} %0A Сумма: ${_sum} %0A`
				var token = "1995329067:AAGEzfVSF1LlBlnRKv_Uv9ur3DJx8-FdIPM"
				var chat_id = "-550447131"
				var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

				let api = new XMLHttpRequest()
				api.open("GET", url, true)
				api.send()


				alert('Transaction completed');

				cart = {}
				document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"

				window.location.href = "/ "

				})
	    }
var button = document.getElementsByClassName('switcher')
var weight = document.getElementsByClassName('weight')
var price = document.getElementsByClassName('price')
var buy_btn = document.getElementsByClassName('buy-btn')

var w_list = []
function get_blocks() {
    for(var a = 0; a < weight.length; a++ ){
        w_list.push(weight[a])
    }
    return w_list
}

var p_list = []
function get_price() {
    for(var a = 0; a < price.length; a++ ){
        p_list.push(price[a])
    }
    return p_list
}

var c_list = []
function get_button() {
    for(var a = 0; a < buy_btn.length; a++ ){
        c_list.push(buy_btn[a])
    }
    return c_list
}


{
    weight1 = get_blocks()[0]
    price1 = get_price()[0]
    btn1 = get_button()[0]
    weight2 = get_blocks()[1]
    price2 = get_price()[1]
    btn2 = get_button()[1]
    weight3 = get_blocks()[2]
    price3 = get_price()[2]
    btn3 = get_button()[2]
    weight4 = get_blocks()[3]
    price4 = get_price()[3]
    btn4 = get_button()[3]
    weight5 = get_blocks()[4]
    price5 = get_price()[4]
    btn5 = get_button()[4]
    weight6 = get_blocks()[5]
    price6 = get_price()[5]
    btn6 = get_button()[5]
}


for (var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function (e) {
        switch (true) {
            case (this.id === weight1.id && this.id === price1.id && weight1.innerHTML === '30 см'):
                this.innerHTML = 'Велика'
                weight1.innerHTML = '35 см'
                price1.innerHTML = '199.00 UAH'
                btn1.id = '70'
                break
            case (this.id === weight2.id && this.id === price2.id && weight2.innerHTML === '30 см'):
                this.innerHTML = 'Велика'
                weight2.innerHTML = '35 см'
                price2.innerHTML = '205.00 UAH'
                btn2.id = '71'
                break
            case (this.id === weight3.id && this.id === price3.id && weight3.innerHTML === '30 см'):
                this.innerHTML = 'Велика'
                weight3.innerHTML = '35 см'
                price3.innerHTML = '227.00 UAH'
                btn3.id = '72'
                break
            case (this.id === weight4.id && this.id === price4.id && weight4.innerHTML === '30 см'):
                this.innerHTML = 'Велика'
                weight4.innerHTML = '35 см'
                price4.innerHTML = '263.00 UAH'
                btn4.id = '73'
                break
            case (this.id === weight5.id && this.id === price5.id && weight5.innerHTML === '30 см'):
                this.innerHTML = 'Велика'
                weight5.innerHTML = '35 см'
                price5.innerHTML = '289.00 UAH'
                btn5.id = '74'
                break
            case (this.id === weight6.id && this.id === price6.id && weight6.innerHTML === '30 см'):
                this.innerHTML = 'Велика'
                weight6.innerHTML = '35 см'
                price6.innerHTML = '278.00 UAH'
                btn6.id = '75'
                break
            case (this.id === weight1.id && this.id === price1.id && weight1.innerHTML === '35 см'):
                this.innerHTML = 'Маленька'
                weight1.innerHTML = '30 см'
                price1.innerHTML = '139.00 UAH'
                btn1.id = '19'
                break
            case (this.id === weight2.id && this.id === price2.id && weight2.innerHTML === '35 см'):
                this.innerHTML = 'Маленька'
                weight2.innerHTML = '30 см'
                price2.innerHTML = '200.00 UAH'
                btn2.id = '20'
                break
            case (this.id === weight3.id && this.id === price3.id && weight3.innerHTML === '35 см'):
                this.innerHTML = 'Маленька'
                weight3.innerHTML = '30 см'
                price3.innerHTML = '200.00 UAH'
                btn3.id = '21'
                break
            case (this.id === weight4.id && this.id === price4.id && weight4.innerHTML === '35 см'):
                this.innerHTML = 'Маленька'
                weight4.innerHTML = '30 см'
                price4.innerHTML = '200.00 UAH'
                btn4.id = '22'
                break
            case (this.id === weight5.id && this.id === price5.id && weight5.innerHTML === '35 см'):
                this.innerHTML = 'Маленька'
                weight5.innerHTML = '30 см'
                price5.innerHTML = '200.00 UAH'
                btn5.id = '23'
                break
            case (this.id === weight6.id && this.id === price6.id && weight6.innerHTML === '35 см'):
                this.innerHTML = 'Маленька'
                weight6.innerHTML = '30 см'
                price6.innerHTML = '200.00 UAH'
                btn6.id = '24'
                break
        }
    })
}
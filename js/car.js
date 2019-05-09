//存储的形式：[{"id"，‘price’,'title','number'},{},{}]
function Cart(){}


Cart.prototype.getCar = function(){
  return JSON.parse( localStorage.getItem('cartlist') ) || [];
}


//添加商品到购物车
Cart.prototype.addCar = function(product){
  //1.判断是否有相同商品
  var cartlist = JSON.parse( localStorage.getItem('cartlist') ) || [];
  if(this.hasGoods(product.id)){
    //1-1,有：商品数量加1
    for(var i=0; i<cartlist.length; i++){
      if(cartlist[i].id == product.id){
        cartlist[i].number += product.number;
      }
    }
  }else{
    //1-2,没有，直接加入商品
    cartlist.push(product);
  }

  //再存储到本地存储
  localStorage.setItem('cartlist',JSON.stringify(cartlist));
  
 
}

//判断是否有相同商品
Cart.prototype.hasGoods = function(id){
  var cartlist = JSON.parse( localStorage.getItem('cartlist') ) || [];
  for(var i=0; i<cartlist.length; i++){
    //判断id是否相同
    if(cartlist[i].id == id){
      return true;
    }
  }

  return false;
}

//删除购物车商品
Cart.prototype.delCarGoods = function(id){
  var cartlist = JSON.parse( localStorage.getItem('cartlist') ) || [];
  for(var i=0; i<cartlist.length; i++){
    if(id == cartlist[i].id){
      cartlist.splice(i,1);
      //在写入本地存储
      localStorage.setItem('cartlist',JSON.stringify(cartlist));
      return true;
    }
  }
  return false;
}


//计算购物车的总价格
Cart.prototype.getTotalPrice = function(){
  var cartlist = this.getCar();
  var totalPrice = 0.00;
  for(var i=0; i<cartlist.length; i++){
    //总价 = 商品的单价*购买的数量
    totalPrice += cartlist[i].price * cartlist[i].number;
  }
  return totalPrice;
}



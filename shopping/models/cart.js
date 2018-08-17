module.exports = function Cart(oldCart) {
    //gdy undefined uzyj zero
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;


    //dodanie produktu do koszyka
    //za kazdym razem tworzymy nowy koszyk
    this.add = function (item, id) {
        //grupowanie tego samego produktu
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    //tworzenie tablicy do wypisania produktow
    this.generateArray = function () {
      var arr = [];
      for(var id in this.items){
          arr.push(this.items[id]);
      }
      return arr;
    };
};
(function () {
'use stirct';
angular.module('ShoppingListApp',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var Buy=this;

  Buy.items=ShoppingListCheckOffService.getItemstobuy();

  Buy.adding=function(itemIndex){
  ShoppingListCheckOffService.addItem(itemIndex)
  if(Buy.items.length==0)Buy.msg="Everything is bought!";
};



}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var Bought= this;
  Bought.items=ShoppingListCheckOffService.getitemsalreadybought();
Bought.v=ShoppingListCheckOffService.getverif();
  Bought.msg="bbb";





}

function ShoppingListCheckOffService(){
var service= this;
var itemsTobuy=[{name: "cookies" , quantity : 10},
{name: "Chips", quantity : 18},
{name: "Water", quantity : 5},
{name: "Milk", quantity : 7},
{name: "Bismol", quantity : 11},
];
var itemsAlreadyBought=[];
var message ="Nothing is bought yet!";
service.msg=message;
service.getItemstobuy=function(){return itemsTobuy;};
service.getitemsalreadybought=function(){return itemsAlreadyBought; };
service.verif = 1;

service.addItem=function(itemIndex){
  var item=itemsTobuy[itemIndex];
  service.verif=0;
  itemsAlreadyBought.push(item);
  itemsTobuy.splice(itemIndex,1)
;

};
service.getverif=function () {return service.verif ;
};

};


}

)();

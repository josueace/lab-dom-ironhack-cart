function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
}
 
function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let arrDiv=[];
  let numDiv=document.getElementsByClassName("flexy").length;
  for(let i=0;i<numDiv;i++){
    arrDiv.push(document.querySelector("body > div"))
  }
  let productPrice=getPriceByProduct();
}

function createQuantityInput(){
  
}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

function calculatePrice(){
let productPrice=getPriceByProduct();


}
 window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

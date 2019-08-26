var totalQty=2;

function deleteItem(e){
	
let parts=e.target.id.split("-");
let ele='flexy-'+parts[1];
debugger;
var parent = document.getElementById("items");
var child = document.getElementById(ele);

parent.removeChild(child);	

}

function getPriceByProduct(itemNode){
  
}
 
function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

 let totalAcum=0;
 
 for (let i=0;i<totalQty;i++)
 {
   
  let price=document.getElementById('price-'+i);
  let qty=document.getElementById('qty-'+i);
  
  let total=document.getElementById('total-'+i);
  let mytotal=Number(price.innerHTML)*Number(qty.value);
 
  total.innerHTML=mytotal;
  totalAcum+=mytotal;
 
 
 }
 
 let totalFinal=document.getElementById('total');
 totalFinal.innerHTML=totalAcum;
  	
  
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

function createNewItem(name,price){
	
  var itm = document.getElementById("flexy-0");
  var cln = itm.cloneNode(true);

  cln.id='flexy-'+totalQty;
  
  document.getElementById("items").appendChild(cln);
  
  var newitm = document.getElementById(cln.id);
  
  let children = newitm.querySelectorAll('span');
  
  var newname = document.getElementById('elename');
  var eleprice = document.getElementById('eleprice');
  debugger;
   children[0].innerHTML=newname.value;
   children[1].innerHTML=eleprice.value;
  
   children[1].id='price-'+totalQty;
   children[2].id='total-'+totalQty
   
     children = newitm.querySelectorAll('input');
    children[0].id='qty-'+totalQty;
     children = newitm.querySelectorAll('button');
    children[0].id='delete-'+totalQty;
	children[0].onclick = deleteItem;
   
   
	totalQty++;
  
}

function calculatePrice(){
	


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

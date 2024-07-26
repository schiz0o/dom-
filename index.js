// console.log(document.getElementsByClassName("plus")); // nadina plus
var plusBtns=document.getElementsByClassName("plus");//sna3ena var mte3 btns
for (let i = 0; i < plusBtns.length; i++)// tableau lel btns +
{ plusBtns[i].addEventListener("click",inc) 
}
function inc (e) 
 { 
var btnPlus= e.target
var divParent=btnPlus.parentElement
// console.log(divParent)
var Quantity = divParent.querySelector("p")
// console.log(p)
var Quantityvalue = Number(Quantity.innerHTML)// bech ne7i il  quantity value twali number aslaha string bech twali type number 
// console.log(value)
Quantityvalue ++
// console.log(value)
Quantity.innerHTML=Quantityvalue
var trParent=divParent.parentElement.parentElement
  var unitPrice=trParent.querySelector(".unitPrice");
  var price=trParent.querySelector(".price");
  var unitPriceValue=Number(unitPrice.innerHTML)
  var price_value=Number(price.innerHTML)
 price.innerHTML=(unitPriceValue*Quantityvalue)
}
// console.log(document.getElementsByClassName("plus")); // nadina plus
var mincBtns=document.getElementsByClassName("minus");//sna3ena var mte3 btns
for (let i = 0; i < mincBtns.length; i++)// tableau lel btns +
{ mincBtns[i].addEventListener("click",dec) 
}
function dec (e) 
 {
var btnMinc= e.target

// console.log(btnPlus)
var divParent=btnMinc.parentElement
// console.log(divParent)
var p = divParent.querySelector("p")
// console.log(p)
var value = Number(p.innerHTML)// bech ne7i il p twali nuber
// console.log(value)
value --
// console.log(value)
if(value>=0){

p.innerHTML=value 
var trParent=divParent.parentElement.parentElement
  var unitPrice=trParent.querySelector(".unitPrice");
  var price=trParent.querySelector(".price");
  var unitPriceValue=Number(unitPrice.innerHTML)
  var price_value=Number(price.innerHTML)
 price.innerHTML=(unitPriceValue*value)
}
var delteBtns=document.querySelectorAll(".fa-trash-alt");
for (let i= 0; i  < delteBtns.length; i ++) {
delteBtns[i].addEventListener('click',deletefunc);
}
function deletefunc(event) {
    var deleteBtn=event.target;
    var wholecontainer=deleteBtn.parentElement.parentElement.parentElement.parentElement;
    wholecontainer.remove();
}
 }
var likeBtn=document.querySelectorAll(".fa-heart");
for (let i= 0; i  < likeBtn.length; i ++) {
likeBtn[i].addEventListener('click',likefunc);
}
function likefunc(ev) {
    var likeBtn=ev.target;
   if (likeBtn.style.color=="red")
   { 
    likeBtn.style.color="#424242"
   }
   else
    likeBtn.style.color ="red"
}
// function selct(event) {
//     var checkBTn=document.addEventListener("check",selct);

    
// }
// var totalPrice =document.querySelector("#total");

// function totprice(e) {
//     for (let i = 0; i < Quantityvalue.length; i++) {
//         price_value[i].addEventListener("#total",totprice);
        
//     }
    
// }
// var totalvalue = Number(total.innerHTML)

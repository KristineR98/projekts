var myList = ['Rainis', 'Aspazija', 'Veidenbaums'];
var myList2 = new Array("N.Bumbiere", "Reiniks","Rajecka");

//pievienot jaunu elementu masīvam

function addName(){

var name  = document.getElementById("addItem").value;
myList.push(name);

}

//parādīt visus masīva elementus

function showall(){

  var all ="";

for(let i = 0; i<myList.length;i++){

all= all + myList[i] + "</br>" ;

}
document.getElementById('all').innerHTML = all;

}
//izdzēst masīva pēdējo elementu

function deleteLast(){

  var deleted = myList.pop();
}

function addToFront(){

var name2  = document.getElementById("addItem").value;
myList.unshift(name2);
}

function deleteFromFront(){

  var deleted2 = myList.shift();
}

function addArrays(){

var   myList3 = myList.concat(myList2);
var all2 ="";

for(let i = 0; i<myList3.length;i++){

all2= all2 + myList3[i] + "</br>" ;

}
document.getElementById('all2').innerHTML = all2;

}

function spliceArrays(){

var deleted3 = myList2.splice(1,0,"Liepiņš");
document.getElementById('spliceExample').innerHTML = myList2;
}

function sliceArrays(){

  var deleted4 = myList2.slice(1);
  document.getElementById('sliceExample').innerHTML = myList2;
}

function sortArray() {
myList.sort();  
}

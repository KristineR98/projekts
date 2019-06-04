//var person = {firstName:"Kristine", lastName:"Rulle", gender: 2 };

function Person(first, last, _gender, _age, _city){
  this.firstName = first;
  this.lastName = last;
  this.gender = _gender;
  this.age = age;
  this.city = city;


//console.log();
}
//var anna = new Person("Anna", "Liepiņa", "female", 32, "Cēsis");

function addPerson(){

Person.firstName = document.getElementById("fiName").value;
Person.lastName = document.getElementById("lName").value;
Person.gender = document.getElementById("gender").value;
Person.age = document.getElementById("age").value;
Person.city = document.getElementById("city").value;






document.getElementById("persona1").innerHTML =Person. firstName;
document.getElementById("persona2").innerHTML =Person. lastName;
document.getElementById("persona3").innerHTML =Person. gender;
document.getElementById("persona4").innerHTML =Person. age;
document.getElementById("persona5").innerHTML =Person. city;

console.log(Person.firstName);
}
document.getElementById("submit").addEventListener("click",authorize);
function authorize(){

alert("Vai pārliecinājies, ka aizpildīji visus laukus?");


}

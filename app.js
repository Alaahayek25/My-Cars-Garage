'use strict';
var table = document.getElementById('table');
var allData=[];
var header = ['car Madel', 'model year', 'pric', 'ManuFacturer']
function Cars(carMadel, modelyear, ManuFacturer) {
    this.carMadel = carMadel;
    this.modelyear = modelyear;
    this.ManuFacturer = ManuFacturer;
    this.min = 7000;
    this.max = 100000;
    this.randomNumber = 0;
allData.push(this);

}
Cars.prototype.getRandomInt = function () {

    this.randomNumber = Math.floor(getRandomInt(this.min, this.max));
}




shwoHeader();

var form = document.getElementById('form');
form.addEventListener('submit', addClick);
function addClick(event) {
    event.preventDefault();
    var carMadel = event.target.carMadel.value
    var modelyear = event.target.modelyear.value
    var ManuFacturer = event.target.ManuFacturer.value

    console.log(carMadel, modelyear, ManuFacturer);
    var anyName = new Cars(carMadel, modelyear, ManuFacturer);
  var  anyName= getRandomInt();
   var  anyName=showRow();


    localStorage.setItem('data', JSON.stringify(allData));

}

function shwoHeader() {
    var raw = document.createElement('tr');
    table.appendChild(raw);
    for (var i = 0; i < header.length; i++) {
        var thEl = document.createElement('th');
        raw.appendChild(thEl);
        thEl.innerHTML = `${header[i]}`;
    }
}
Cars.prototype.showRow =function (){
    var trEl = document.createElement('tr');
    table.appendChild(trEl);
var tdE1 =document.createElement('td');
trEl.appendChild(tdE1);
tdE1.innerHTML =`${this.carMadel}`

var tdE2 =document.createElement('td');
trEl.appendChild(tdE2);
tdE2.innerHTML =`${this.modelyear}`

var tdE3 =document.createElement('td');
trEl.appendChild(tdE3);
tdE3.innerHTML =`${this.modelyear}`

var tdE4 =document.createElement('td');
trEl.appendChild(tdE4);
tdE4.innerHTML =`${this.randomNumber}`


}







var pull=JSON.parse(localStorage.getItem('data'))
for(var i=0; i<pull.length; i++){
    new Cars(pull[i].AnyName, pull[i].modelyear, pull[i].ManuFacturer)
}
for(var o=0; o<allData.length; o++){
    allData[o].getRandomInt();
    allData[o].showRow();
}

function getTotal(){
    var total=0;
    for(let t=0; t<Cars.length; t++){
        total+= allData[t].randomNumber;
    }
    document.getElementById('p').innerHTML =`pric= ${total}`;
}
//helper function

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
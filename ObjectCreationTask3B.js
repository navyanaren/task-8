function Car(brand, model, year, mileage, isNew, color){
   
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.isNew = isNew;
    this.color = color;
this.calculateAge = function() {
    const currYear=new Date().getFullYear();
    return currYear - this.year;
    };

this.increaseMileage = function(newMileage) {
    this.mileage = newMileage;
};

this.needOilChange = function() {
    return this.mileage >= 25000;
};

this.changeColor = function (newColor) {
    this.color = newColor;
};
}
const myCar = new Car("BMW","X5",2023,20000,false,"black");

console.log("Current state :", myCar);

myCar.increaseMileage(25000);
console.log("Updated State: ", myCar);

console.log("Car Age: ", myCar.calculateAge());

console.log("Need for oil change: ", myCar.needOilChange());

myCar.changeColor("white");
console.log("Car color Changed ", myCar);
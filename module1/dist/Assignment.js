"use strict";
{
    //
    function formatString(input, toUpper) {
        if (toUpper === true || toUpper === '') {
            return input.toUpperCase();
        }
        else if (toUpper === false) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    }
    //
}
{
    //
    function filterByRating(items) {
        return items.filter(item => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.1 },
        { title: "Book D", rating: 3.0 },
        { title: "Book E", rating: 4.0 }
    ];
    //
}
{
    //
    function concatenateArrays(...arrays) {
        return arrays.reduce((result, current) => result.concat(current), []);
    }
    //
}
{
    //
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model: ${this.model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
}
{
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    //
}
{
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        else {
            return products.reduce((max, current) => current.price > max.price ? current : max);
        }
    }
    //
}
{
    //
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day === Day.Friday || day === Day.Saturday) {
            return "Weekend";
        }
        else {
            return "Weekday";
        }
    }
    //
}
{
    //
    async function squareAsync(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                }
                else if (n === 0) {
                    console.log(`hence the input is zero so output is zero`);
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    }
    //
}

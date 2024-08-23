// Define the Vehicle interface  
interface Vehicle {  
    make: string;  
    model: string;  
    year: number;  
    start(): void;  
}  

// Implement the Car class that implements the Vehicle interface  
class Car implements Vehicle {  
    make: string;  
    model: string;  
    year: number;  

    constructor(make: string, model: string, year: number) {  
        this.make = make;  
        this.model = model;  
        this.year = year;  
    }  

    start(): void {  
        console.log("Car engine started");  
    }  
}  

// Create an instance of the Car class and initialize it  
const myCar = new Car("Toyota", "Corolla", 2020);  

// Call the start method to verify the output  
myCar.start(); // This should log: "Car engine started"
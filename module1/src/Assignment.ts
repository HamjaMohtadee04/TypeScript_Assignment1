{
    //
    
    function formatString(input:string,toUpper?:boolean | '') :string{
        if(toUpper===true || toUpper ===''){
             return input.toUpperCase(); 
        }
        else if(toUpper===false){
            return input.toLowerCase();
        }else{
            return input.toUpperCase();
        }
        
       
}

//
}

{
    //
      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
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

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((result, current) => 
            result.concat(current), [] as T[]
    );
    }

    //
}

{
    //
    
      class Vehicle {
          private make: string;
          private year: number;
        
          constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
          }
        
          getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
          }
        }
        
        class Car extends Vehicle {
          private model: string;
        
          constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
          }
        
          getModel(): string {
            return `Model: ${this.model}`;
          }
        }
  const myCar = new Car("Toyota", 2020, "Corolla");
  
  }

  {
    function processValue(value: string | number): number {
        if (typeof value === "string") {
          return value.length;
        } else {
          return value * 2;
        }
      }
    
      //
}

{
    //
  
      interface Product {
      name: string;
      price: number;
    }
    const products = [
      { name: "Pen", price: 10 },
      { name: "Notebook", price: 25 },
      { name: "Bag", price: 50 }
    ];
    
    function getMostExpensiveProduct(products: Product[]): Product | null {
      if (products.length === 0) {
          return null
      }
    else{
      return products.reduce((max, current) => current.price > max.price ? current : max);
    }
    }
   
    //
  }  

  {
    //
  
      enum Day {
          Monday,
          Tuesday,
          Wednesday,
          Thursday,
          Friday,
          Saturday,
          Sunday
        }
        
        function getDayType(day: Day): string {
          if (day === Day.Friday || day === Day.Saturday) {
            return "Weekend";
          } else {
            return "Weekday";
          }
        }
      
        //
  }

  {
    //
      async function squareAsync(n: number): Promise<number> {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (n < 0) {
                reject(new Error("Negative number not allowed"));
              }else if(n===0){
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
  

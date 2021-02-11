//a program to validate working of class,object & methods of a class.
class Circle{
    radius:number=1;
    color:string ="red";

    constructor(rad?:number, colur?:string){
        this.radius= rad;
        this.color= colur;
    }
    
    getRadius():number{
        return this.radius;
    }
    
    setRadius(rad:number):void{
        this.radius=rad;
    }

    getColour():string{
        return this.color;
    }
    
    setColour(colr:string):void{
        this.color=colr;
    }

    toString():string{
        let str = "Circle[radius="+this.radius+"colour="+this.color+"]"
        return str
    }
    
//return area of the circle.    
    getArea():number{
        const pi = 3.14;
        let area = (Math.PI**2 * this.radius)
        return area; 
    }
    
//return circumference o f the circle.
    getCircumference():number{
        
        let cc = (Math.PI* 2 * this.radius)
        return cc;
    }

}
let abc2 = new Circle();
let abc1 = new Circle(1);
let abc = new Circle(1,"blue");

console.log(abc.getRadius())
abc.setRadius(3);

console.log(abc.getColour())
abc.setColour("white");

console.log(abc.toString())
console.log("Area: "+ abc.getArea());
console.log("Circumference: "+abc.getCircumference());
 

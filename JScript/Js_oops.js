class person{

    //data member
    pid=101;
    pname;"rahul";
    address="mumbai";

    //constructor
    constructor(id,name,addr,compname){
        this.pid=id;
        this.pname=name;
        this.address=addr;

    }


    //member function

    persondetail()
    {
      return `ID:${this.pid} Name:${this.pname} Address:${this.address}`;

    }

};

// creating
// var personObj =new person();
// console.log(personObj.pname);
// console.log(personObj.persondetail());

// var pobj1= new Person(102,"shubham","nashik");
// console.log(pobj1.persondetail());

// var pobj2= new Person(103,"shubh","chandwad");
// console.log(pobj2.persondetail());


// inheritence

class Employee extends person{
    cname;
    salary;
    post;


    details{
        return `ID:${this.pid} Name:${this.pname} Address:${this.address} Company:${this.cname} salary:${this.salary} Post:${this.post}`
    }
}

var empObj= new Employee(501,"shubham","USA","Amazon",95000,"manager");
empObj.details();
console.log(empObj.details());
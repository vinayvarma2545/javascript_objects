function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(103,"Vimal Jaiswal",30000);
    m=new emp(155, "mahesh", 400000);  
      
    console.log(e.id+" "+e.name+" "+e.salary); 
    console.log(m.id+" "+m.salary+" "+m.name); 
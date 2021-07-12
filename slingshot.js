class Slingshot {

    constructor(bodyA,pointB){
     var option ={
         bodyA:bodyA,
         pointB:pointB,
         stiffness: 0.1,
         length:1
     }   

     this.sling = Constraint.create(option)
     this.pointB=pointB
     World.add(world, this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
      var posA=this.sling.bodyA.position;
      var posB=this.pointB  
      strokeWeight(4)
      stroke("yellow")
    line (posA.x,posA.y,posB.x,posB.y)
    }
   }
 }
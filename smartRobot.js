var funcStore ={
communicate: function(num){
   if(num===0){console.log("Hello, I'm",this.name,"!! Nice to meet you")}
   if(num===1){console.log(this.name,": **waves**")}
   if(num>1){console.log("Be careful human, I can",this.features.map(f=>f+" you!!").join())}
},
addFeature: function(feature){this.features.push(feature)},

description: function(){ console.log("name:",this.name,"\nmodel:",this.model,"\ncreator:",this.creator,"\nfeatures:",this.features.map(f=>"\n"+f).join())}

}


var SmartRobot = function (name, model, creator, features=[] ){
this.name = name;
this.model = model;
this.creator = creator;
this.features = features;
}

SmartRobot.prototype = Object.create(funcStore);





let dumbAI = new SmartRobot("C3P1","T100","LAb technologies",["Pet","Snuggle","Buzz"]);

let warRobot = new SmartRobot("Terminator","TX","CIA");

warRobot.addFeature("Kill","Flamethrower");

warRobot.description();

warRobot.communicate(4);
warRobot.communicate(1);
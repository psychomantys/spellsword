
define(['Matter'],
function( Matter ){
	return function Spellsword(dom) {

		// Matter.js module aliases
		this.Engine = Matter.Engine;
		this.World = Matter.World;
		this.Bodies = Matter.Bodies;

		// create a Matter.js engine
		this.engine = this.Engine.create(dom);

		// create two boxes and a ground
		var boxA = this.Bodies.rectangle(400, 200, 80, 80);
		var boxB = this.Bodies.rectangle(450, 50, 80, 80);
		var boxC = this.Bodies.rectangle(500, -100, 80, 80);
		var ground = this.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

		// add all of the bodies to the world
		this.World.add(this.engine.world, [boxA, boxB, boxC, ground]);

		this.run=function(){
			// run the engine
			return this.Engine.run(this.engine);
		};
	};
});


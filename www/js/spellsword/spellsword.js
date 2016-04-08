
define(['Matter', 'Mousetrap'],
function( Matter, Mousetrap){
	return function Spellsword(dom) {

		this.World = Matter.World;
		this.Bodies = Matter.Bodies;
		this.Body = Matter.Body;
		this.Composites = Matter.Composites;
		this.Composite = Matter.Composite;
		this.Common = Matter.Common;

		this.Engine = Matter.Engine;
		this.engine = this.Engine.create(dom);

		var offset = 10,
			options = { 
				isStatic: true,
				render: {
					visible: false
				}
			};

		this.World.bodies = [];

		// these static walls will not be rendered in this sprites example, see options
		this.World.add(this.engine.world, [
			this.Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
			this.Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
			this.Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
			this.Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
		]);

		var t=this;
		var stack = this.Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
			if (t.Common.random() > 0.35) {
				return t.Bodies.rectangle(x, y, 64, 64, {
					render: {
						strokeStyle: '#ffffff',
						sprite: {
							texture: 'img/box.png'
						}
					}
				});
			}else{
				return t.Bodies.circle(x, y, 46, {
					density: 0.0005,
					frictionAir: 0.06,
					restitution: 0.3,
					friction: 0.01,
					render: {
						sprite: {
							texture: 'img/ball.png'
						}
					}
				});
			}
		});

		this.World.add(this.engine.world, stack);

		var renderOptions = this.engine.render.options;
		renderOptions.background = 'img/wall-bg.jpg';
		renderOptions.showAngleIndicator = false;
		renderOptions.wireframes = false;

		Mousetrap.bind('left', function(e){
			console.log('left');
			var bodies = t.Composite.allBodies(t.engine.world);
			var body = bodies[10];
			var forceMagnitude = 0.01 * body.mass;
			t.Body.applyForce(body, { x: 0, y: 0 }, {
				x: -(0.10 * forceMagnitude),
				y: 0
			});
		});
		Mousetrap.bind('right', function(e){
			console.log('right');
			var bodies = t.Composite.allBodies(t.engine.world);
			var body = bodies[10];
			var forceMagnitude = 0.01 * body.mass;
			t.Body.applyForce(body, { x: 0, y: 0 }, {
				x: (0.10 * forceMagnitude),
				y: 0
			});
		});
		this.run=function(){
			// run the engine
			return this.Engine.run(this.engine);
		};
	};
});


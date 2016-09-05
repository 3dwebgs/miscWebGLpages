

	var Star = function (position, size, scene) {
		this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 50, 50*size, scene); 
		this.mat = new BABYLON.StandardMaterial("white", scene);
		this.mat.diffuseTexture = new BABYLON.Texture("textures/suntexture.jpg", scene);
		this.mat.specularColor = new BABYLON.Color3(0, 0, 0);
		this.sphere.material = this.mat;
		this.sphere.position = position;
		

		this.particleSystem = new BABYLON.ParticleSystem("particles", 1500, scene);
		this.particleSystem.particleTexture = new BABYLON.Texture("textures/fireflare.jpg", scene);
		this.particleSystem.emitter = this.sphere;
		this.particleSystem.color1 = new BABYLON.Color4(0.984, 0.337, 0.047, 1);
		this.particleSystem.color2 = new BABYLON.Color4(0.984, 0.757, 0.047, 1);
		this.particleSystem.minSize = 16*size;
		this.particleSystem.maxSize = 60*size;
		this.particleSystem.minLifeTime = 0.25*size;
		this.particleSystem.maxLifeTime = 0.25*size;
		this.particleSystem.emitRate = 1500;
		this.particleSystem.direction1 = new BABYLON.Vector3(-120, -120, -120);
		this.particleSystem.direction2 = new BABYLON.Vector3(120, 120, 120);
		this.particleSystem.minAngularSpeed = 0;
		this.particleSystem.maxAngularSpeed = Math.PI;
		this.particleSystem.minEmitPower = 1;
		this.particleSystem.maxEmitPower = 3;
		this.particleSystem.updateSpeed = 0.01;
		this.particleSystem.start();
	};

	var WhiteStar = function(position, size, scene){
		this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 25, 25*size, scene); 
		this.mat = new BABYLON.StandardMaterial("white", scene);
		this.mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
		this.sphere.material = this.mat;
		this.sphere.position = position;
		

	}

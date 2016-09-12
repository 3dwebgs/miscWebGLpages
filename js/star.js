

	var YellowStar = function (position, size, scene) {
		this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 30, 30*size, scene); 
		this.mat = new BABYLON.StandardMaterial("white", scene);
		this.mat.diffuseTexture = new BABYLON.Texture("textures/suntexture.jpg", scene);
		this.mat.specularColor = new BABYLON.Color3(0, 0, 0);
		this.sphere.material = this.mat;
		this.sphere.position = position;
		
		this.particleSystem = new BABYLON.ParticleSystem("particles", 400, scene);
		this.particleSystem.particleTexture = new BABYLON.Texture("textures/fireflare.jpg", scene);
		this.particleSystem.emitter = this.sphere;
		this.particleSystem.color1 = new BABYLON.Color4(0.984, 0.337, 0.047, 1);
		this.particleSystem.color2 = new BABYLON.Color4(0.984, 0.757, 0.047, 1);
		this.particleSystem.minSize = 16*size;
		this.particleSystem.maxSize = 40*size;
		this.particleSystem.minLifeTime = 0.20*size;
		this.particleSystem.maxLifeTime = 0.20*size;
		this.particleSystem.emitRate = 300;
		this.particleSystem.direction1 = new BABYLON.Vector3(-120, -120, -120);
		this.particleSystem.direction2 = new BABYLON.Vector3(120, 120, 120);
		this.particleSystem.minAngularSpeed = 0;
		this.particleSystem.maxAngularSpeed = Math.PI;
		this.particleSystem.minEmitPower = 0.5;
		this.particleSystem.maxEmitPower = 2;
		this.particleSystem.updateSpeed = 0.01;
		this.particleSystem.start();
	};


	var WhiteStar = function(position, size, scene){
		this.sphere = BABYLON.Mesh.CreateSphere("whiteStar", 20, 15*size, scene); 
		this.mat = new BABYLON.StandardMaterial("white", scene);
		this.mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
		this.sphere.material = this.mat;
		this.sphere.position = position;
		

	}

	var RedStar = function (position, size, scene) {
		this.sphere = BABYLON.Mesh.CreateSphere("redStar", 20, 30*size, scene); 
		this.mat = new BABYLON.StandardMaterial("red", scene);
		this.mat.emissiveColor = new BABYLON.Color3(0.714, 0.239, 0.169);
		this.mat.specularColor = new BABYLON.Color3(0, 0, 0)
		this.sphere.material = this.mat;
		this.sphere.position = position;
	};

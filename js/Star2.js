

	function YellowStar (position, size, scene) {
		var sphere = BABYLON.Mesh.CreateSphere("sphere1", 30, 30*size, scene); 
		var yellowMat = new BABYLON.StandardMaterial("white", scene);
		yellowMat.diffuseTexture = new BABYLON.Texture("textures/suntexture.jpg", scene);
		yellowMat.specularColor = new BABYLON.Color3(0, 0, 0);
		sphere.material = yellowMat;
		sphere.position = position;
		
		var particleSystem = new BABYLON.ParticleSystem("particles", 400, scene);
		particleSystem.particleTexture = new BABYLON.Texture("textures/fireflare.jpg", scene);
		particleSystem.emitter = sphere;
		particleSystem.color1 = new BABYLON.Color4(0.984, 0.337, 0.047, 1);
		particleSystem.color2 = new BABYLON.Color4(0.984, 0.757, 0.047, 1);
		particleSystem.minSize = 16*size;
		particleSystem.maxSize = 40*size;
		particleSystem.minLifeTime = 0.20*size;
		particleSystem.maxLifeTime = 0.20*size;
		particleSystem.emitRate = 300;
		particleSystem.direction1 = new BABYLON.Vector3(-120, -120, -120);
		particleSystem.direction2 = new BABYLON.Vector3(120, 120, 120);
		particleSystem.minAngularSpeed = 0;
		particleSystem.maxAngularSpeed = Math.PI;
		particleSystem.minEmitPower = 0.5;
		particleSystem.maxEmitPower = 2;
		particleSystem.updateSpeed = 0.01;
		particleSystem.start();
		
		return sphere;
	};


	function WhiteStar (position, size, scene){
		this.sphere = BABYLON.Mesh.CreateSphere("whiteStar", 20, 15*size, scene); 
		this.whiteMat = new BABYLON.StandardMaterial("white", scene);
		this.whiteMat.emissiveColor = new BABYLON.Color3(1, 1, 1);
		this.sphere.material = this.whiteMat;
		this.sphere.position = position;
	}
	

	function RedStar = (position, size, scene) {
		this.sphere = BABYLON.Mesh.CreateSphere("redStar", 20, 30*size, scene); 
		this.redMat = new BABYLON.StandardMaterial("red", scene);
		this.redMat.emissiveColor = new BABYLON.Color3(0.714, 0.239, 0.169);
		this.sphere.material = this.redMat;
		this.sphere.position = position;
	};

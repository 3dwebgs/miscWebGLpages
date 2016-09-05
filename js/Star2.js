
	var Star2 = function (position, size, material, scene) {
		this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 50, 50*size, scene); 

		this.sphere.position = position;
		this.sphere.material = material;
	};

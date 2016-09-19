function createButtonControls (scene, camera) {
	
	var canvasWidth = canvas.width;
	
	var canvas2 = new BABYLON.ScreenSpaceCanvas2D(
		scene, 
		{ 
			id: "ScreenCanvas", 
			cachingStrategy: BABYLON.Canvas2D.CACHESTRATEGY_DONTCACHE,
			
		}
	);
	
	var grpMain = new BABYLON.Group2D(
		{ 
			parent: canvas2, 
			id: "grpMain", 
			position: new BABYLON.Vector2(40, 40), 
			origin: new BABYLON.Vector2(0.5, 0.5), 
			//size: new BABYLON.Size(canvasWidth, 600),
			layoutEngine:"HorizontalStackPanel"

		}
	);

	
	var grpLeft = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpLeft", 
			size: new BABYLON.Size(75, 200),
			layoutEngine:"VerticalStackPanel"
		}
	);
	
	var grpCenter = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpCenter",  
			size: new BABYLON.Size(75, 200),
			layoutEngine:"VerticalStackPanel"
		}
	);
	
	var grpRight = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpRight", 
			size: new BABYLON.Size(75, 200),
			layoutEngine:"VerticalStackPanel"
		}
	);
	
	//middle stack
	
	var downButton = new BABYLON.Rectangle2D({ parent: grpCenter, id: "downButton", marginTop:10, marginLeft: 10, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	var textDown = new BABYLON.Text2D(
		"D", 
		{ 
			parent: downButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
		
	var backButton = new BABYLON.Rectangle2D({ parent: grpCenter, id: "backButton", marginTop:5, width: 70, height: 40,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	var textBack = new BABYLON.Text2D(
		"B", 
		{ 
			parent: backButton,
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	var forwardButton = new BABYLON.Rectangle2D({ parent: grpCenter, id: "forwardButton", width: 70, height: 40,
		fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	var textForward = new BABYLON.Text2D(
		"F", 
		{ 
			parent: forwardButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);

	
	var upButton = new BABYLON.Rectangle2D({ parent: grpCenter, id: "upButton", marginBottom: 10, marginLeft: 10, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	var textUp = new BABYLON.Text2D(
		"U", 
		{ 
			parent: upButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	//left and right
	
	var leftButton = new BABYLON.Rectangle2D({ parent: grpLeft, id: "leftButton", marginBottom:80, marginLeft: 10, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	
	var textLeft = new BABYLON.Text2D(
		"L", 
		{ 
			parent: leftButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	var rightButton = new BABYLON.Rectangle2D({ parent: grpRight, id: "rightButton", marginBottom:80, marginLeft: 8, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
			
	
	var textRight = new BABYLON.Text2D(
		"R", 
		{ 
			parent: rightButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	
	/*
	 * 	camera rotation
	 */

	/*var grpCamMain = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpCamMain", 
			x: canvasWidth - 250,
			y: 40,
			size: new BABYLON.Size(600, 400),
			layoutEngine:"HorizontalStackPanel"
		}
	);*/
	
	var grpCamLeft = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpCamLeft", 
			size: new BABYLON.Size(55, 400),
			layoutEngine:"VerticalStackPanel"
		}
	);
	
	var grpCamCenter = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpCamCenter",
			size: new BABYLON.Size(55, 400),
			layoutEngine:"VerticalStackPanel"
		}
	);
	
	var grpCamRight = new BABYLON.Group2D(
		{ 
			parent: grpMain, 
			id: "grpCamRight", 
			size: new BABYLON.Size(55, 400),
			layoutEngine:"VerticalStackPanel"
		}
	);
	
	var leftCamButton = new BABYLON.Rectangle2D({ parent: grpCamLeft, id: "leftButton", marginBottom:80, marginLeft: canvasWidth-500, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	
	var textCamLeft = new BABYLON.Text2D(
		"L", 
		{ 
			parent: leftCamButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	var downCamButton = new BABYLON.Rectangle2D({ parent: grpCamCenter, id: "downButton", marginBottom:25, marginTop: 50, marginLeft: canvasWidth-495, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	var textCamDown = new BABYLON.Text2D(
		"D", 
		{ 
			parent: downCamButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	var upCamButton = new BABYLON.Rectangle2D({ parent: grpCamCenter, id: "upButton", marginBottom: 10, marginLeft: canvasWidth-495, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
	
	var textCamUp = new BABYLON.Text2D(
		"U", 
		{ 
			parent: upCamButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	var rightCamButton = new BABYLON.Rectangle2D({ parent: grpCamRight, id: "rightButton", marginBottom:80, marginLeft: canvasWidth - 495, width: 50, height: 50,
			fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.380, 0.525, 0.718, 1)), roundRadius: 10 });
			

	var textCamRight = new BABYLON.Text2D(
		"R", 
		{ 
			parent: rightCamButton, 
			marginAlignment: "h:center, v:center", 
			fontName: "12pt Arial", 
			defaultFontColor: new BABYLON.Color4(1, 1, 1, 1) 
		}
	);
	
	
	
	
	//observables
	
	var thing = BABYLON.MeshBuilder.CreateBox("thing", 10, scene);
	thing.showBoundingBox = true;
	camera.position.z = -10;
	var posStep = 20;
	var rotStep = .1;
	
	camera.parent = thing;
	thing.visibility = 0;

	forwardButton.pointerEventObservable.add(function (d, s) {
		thing.translate(BABYLON.Axis.Z, posStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
				
	backButton.pointerEventObservable.add(function (d, s) {
		thing.translate(BABYLON.Axis.Z, -posStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);	

	leftButton.pointerEventObservable.add(function (d, s) {
		thing.translate(BABYLON.Axis.X, -posStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
				
	rightButton.pointerEventObservable.add(function (d, s) {
		thing.translate(BABYLON.Axis.X, posStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);

	upButton.pointerEventObservable.add(function (d, s) {
		thing.translate(BABYLON.Axis.Y, posStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
	
	downButton.pointerEventObservable.add(function (d, s) {
		thing.translate(BABYLON.Axis.Y, -posStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
	
	leftCamButton.pointerEventObservable.add(function (d, s) {
		thing.rotate(BABYLON.Axis.Y, -rotStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
	
	rightCamButton.pointerEventObservable.add(function (d, s) {
		thing.rotate(BABYLON.Axis.Y, rotStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
	
	upCamButton.pointerEventObservable.add(function (d, s) {
		thing.rotate(BABYLON.Axis.X, -rotStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);
	
	downCamButton.pointerEventObservable.add(function (d, s) {
		thing.rotate(BABYLON.Axis.X, rotStep, BABYLON.Space.LOCAL);
	}, BABYLON.PrimitivePointerInfo.PointerUp);

}



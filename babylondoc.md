## Including External Assets

If you need to include an external file in the playground, the file will need to be hosted on the web so that the method you are using can access the URL.

Github is an ideal place to store assets. Even if you are unfamiliar with Git, you can create a repository within Github and upload files directly. Basic instructions on how to use Github can be found at https://help.github.com/.

To include a .babylon file in a Playground scene, navigate to your file on Github, and click "Raw". 

![](https://raw.githubusercontent.com/gson78/miscWebGLpages/master/textures/raw.jpg)

Copy and paste the url from the address bar into the Playground. Note that you will need to copy both the path and the file name separately for the "rootUrl" and "SceneFileName" parameters of SceneLoader class methods. If the imported mesh uses an image for texture, the image file will need to be in the same folder as the .babylon file you are importing.

BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/gson78/miscWebGLpages/gh-pages/blender-scenes/", "tinman1.babylon", scene...

http://www.babylonjs-playground.com/#1UQADD#0


Mp3 and WAV files can also be imported from Github. Click "Raw" from the Github file page and copy/paste the full URL into BABYLON.Sound: 

var music = new BABYLON.Sound("storm", "https://raw.githubusercontent.com/gson78/miscWebGLpages/master/sounds/storm-sound.mp3", scene, null, { loop: true, autoplay: true });

http://babylonjs-playground.azurewebsites.net/#1DKIRI


Do the same for an image that you are applying as a texture to a Babylon.js element:

//include smiley scene.

//finish markdown

//add helpful images

//add jquery

//CORS?

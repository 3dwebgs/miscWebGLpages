## Including External Assets

If you need to include an external file in the playground, the file will need to be hosted on the web so that the method you are using can access the URL.

Github is an ideal place to host assets. Even if you are unfamiliar with Git, you can create a repository within Github and upload files directly. Basic instructions on how to use Github can be found at https://help.github.com/.

To include a .babylon file in a Playground scene, navigate to your file on Github, and click "Raw". 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](https://raw.githubusercontent.com/gson78/miscWebGLpages/master/textures/raw.jpg)

<br>
Copy and paste the url from the address bar into the Playground. Note that you will need to copy both the path and the file name separately for the "rootUrl" and "SceneFileName" parameters of SceneLoader class methods. If the imported mesh uses an image for texture, the image file will need to be in the same folder as the .babylon file you are importing.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](https://raw.githubusercontent.com/gson78/miscWebGLpages/master/textures/importmeshex.jpg)

http://www.babylonjs-playground.com/#1UQADD#0

<br>
Sound files and images can also be imported. Click the same "Raw" button from the Github file page and copy/paste the full URL into the method: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](https://raw.githubusercontent.com/gson78/miscWebGLpages/master/textures/sound.music.ex.jpg)

http://babylonjs-playground.azurewebsites.net/#1DKIRI

Imgur can also be used for images, as it allows CORS (Cross-Origin Resource Sharing), unlike many photo sharing sites that have restrictions. You can upload photos without signing up, though terms of service apply.

Additional scripts can be included by using jQuery.getScript() in the first line. In the next example, this method was used to add extra functionality to the playground.  Notice the new 'WUKONG' button added to the top menu:

http://www.babylonjs-playground.com/#5FLDS#0


<script src="https://simplycodingcourses.com/files/simply.js"></script>
<script>
			function start(){
				sjs.open("target",800,500);

				//background music


				var playM = new Audio('Music/ova.mp3');
				var toggle = true;
				var musicOn = false;

				document.addEventListener("keydown", event => {
					if (event.key == "m") {
						if(toggle == true){
							if(musicOn == false){
								playM.play();
								musicOn = true;
								toggle = false;

							} else {
								playM.pause();
								musicOn = false;
								toggle = false;

							}
							setTimeout(function(){
								toggle = true;

							},2000); 

						}
					}if (event.key == "ArrowRight") {
						r_faceing = true;
						r_track = r_track + 1;
						player.pushRight(2);
						player.setImage(r_images[r_track]);
						if(r_track == 7){
							r_track = 0;

						}

						if(r_track >= 8){
							player.setImage("Images/r_jump.png");
						}
					}if (event.key == "ArrowLeft") {
						r_faceing = false;
						l_track = l_track + 1;
						player.pushLeft(2);
						player.setImage(l_images[l_track]);
						if(l_track == 7){
							l_track = 0;
						}

						if(l_track >= 8){
							player.setImage("Images/l_jump.png");
						}
					}if (event.key == "ArrowUp") {
						if(canJump == true){
							canJump = false
							player.pushUp(55);
							if(r_faceing == true){
								player.setImage("Images/r_jump.png");
								r_track = 8;

							} else {
								player.setImage("Images/l_jump.png");
								l_track = 8;

							} 
						}
					}
				});//end keyDown functions

			
				var background = new sjs.Image("Images/background.png");
				background.setSize(2500, 500);
</script>

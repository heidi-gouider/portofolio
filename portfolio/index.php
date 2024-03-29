<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Portfolio</title>
	<!-- <link rel="stylesheet" href="style.css"> -->
</head>


<body>

	<?php
	include('partials/header.php')
	?>

	<!-- <header class="header">
		<div class="container"> -->
	<!-- navigation -->
	<!-- <div class="navigation">
				<div class="navigation_mask">
					<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
						<path d="M0 100 L 0 0 C 25 100 75 100 100 0 L 100 100" fill-opacity="0.5"></path>
					</svg>
				</div>


				<div class="header_nav">
					<a href="#" class="header_logo">
						<img src="assets\img\logo.svg" alt="logo" width="30px" height="50px">
						accueil</a>
					<nav class="header_menu">
						<a href="#">A propos</a>
						<a href="#">savoirs-faire</a>
						<a href="#">projets</a>
						<a href="#">contact</a>
					</nav> -->

	<!-- menu hamburger si la taille de l'écran est réduite -->
	<!-- <div class="hamburger">
						<div class="line"></div>
						<div class="line"></div>
						<div class="line"></div>
					</div>
				</div>
			</div>

			<div class="accueil"> -->
	<!-- <div class="accueil_mask"> -->
	<!-- je crée une courbe de Bézier quadratique -->
	<!-- <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
						<path d="M0 100 L 0 0 Q 25 100 75 100 100 0 L 100 100"  fill-opacity="0.5"></path>
					</svg>
				</div> -->
	<!-- <div class="accueil_texture"> -->
	<!-- <div id="présentation">
					<div class="titre">
						<p>HEIDI GOUIDER</p>
						<p>Développeuse web</p>
					</div>
				</div>
				<div id="canvas"></div>
 -->
	<div class="contenu">

		<!-- animation -->
		<!-- <canvas id="zone" width="600" height="600">zone animation</canvas> -->
		<div class="container">
			<!-- séparer l'image en plusieurs parties -->
			<!-- <div class="image-part" style="background-image: url('votre-image.jpg');"></div> -->
			<!-- Répétez cette structure pour chaque morceau d'image -->
		</div>

		<div class="animation">
			<!-- je crée pls span pour séparer l'image en pls partie (je les crérais dans le fichier js par la suite) -->
			<div class="pluie">
				<div id="drop">
					<!-- <span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span> -->
				</div>
				<div class="content"></div>


				<div id="plants">plant</div>

			</div>

			<div class="animation_description">

				<p>bla bla bla</p>
				<p>bla bla bla</p>
				<p>bla bla bla</p>
				<p>bla bla bla</p>
				<p>bla bla bla</p>
				<p>bla bla bla</p>
				<p>bla bla bla</p>
			</div>

			<!-- command animation -->
			<!-- créer les boutons d'actions dans le script -->
			<div class="commande">
				<div class="boutons">
					<input type="button" id="playBtn" value="play"></input>
					<input id="stopBtn" type="button" value="stop"></input>
				</div>
				<div class="icons">
					<div class="icon_play"></div>
					<div class="icon_stop"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- </header> -->

	<main>grille</main>
	<!-- <script src="assets\js\main.js"></script> -->
	<!-- ici svg est null et il n'y a aucune animation -->
	<!-- <script src="assets\js\main1.js"></script> -->
	<!-- <script src="assets\js\main2.js"></script> !!le stop animation n'est pas defini-->
	<!-- <script src="assets\js\main3.js"></script> pas de script d'animation ici -->
	<?php
	include('partials/footer.php');
	?>

	<!-- <script type="module" src="../dist/assets/index.js"></script> -->
	<script type="module" src="commun/index.js"></script>


</body>

</html>
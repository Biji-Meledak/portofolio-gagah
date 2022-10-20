<template>
  <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet">
	<!-- Icons -->
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<!-- Fonts -->
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Alice|Open+Sans:400,300,700">
  
  <header id="header">
	<div id="head" class="parallax" parallax-speed="2">
		<h1 id="logo" class="text-center">
			<img class="img-circle" src="../assets/img/aku.jpg" alt="">
			<span class="title">Muhammad Caesar Gilang Indrawan</span>
			<span class="tagline">Orang Ganteng Parah<br></span>
		</h1>
	</div>

	<nav class="navbar navbar-default navbar-sticky">
		<div class="container-fluid">
			
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li><RouterLink to="/">Home</RouterLink></li>
					<li><RouterLink :to="{ name: 'contact' }">Contact</RouterLink></li>
					<li><RouterLink :to="{ name: 'project' }">Projects</RouterLink></li>
				</ul>
			</div>
			</div><!--/.nav-collapse -->			
	</nav>
</header>

<div class="container">
		<div class="row section topspace">
			<div class="col-md-12">
				<p class="lead text-center text-muted">Halo, Saya Caesar dari Program Studi Ilmu Komputer Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Udayana Angkatan 2020. Saya lahir di Denpasar pada 19 Desember 2001.</p>
			</div>
		</div>
</div>

<div class="row section recentworks topspace">
			
			<h2 class="section-title"><span>Project Terbaru</span></h2>
			
			<div class="thumbnails recentworks row">
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
					<a class="thumbnail">
						<span class="img">
							<img src="../assets/img/1.png" alt="">
						</span>
						<span class="title">Web Inventory Sederhana</span>
					</a>
					<span class="details"><a href="https://id.wikipedia.org/wiki/HTML" target="_blank">HTML</a> | <a href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a> | <a href="https://id.wikipedia.org/wiki/PHP" target="_blank">PHP</a></span>
					<h4></h4>
					<p></p>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
					<a class="thumbnail">
						<span class="img">
							<img src="../assets/img/port.png" alt="">
						</span>
						<span class="title">Web Portofolio Sederhana</span>
					</a>
					<span class="details"><a href="https://id.wikipedia.org/wiki/HTML" target="_blank">HTML</a> | <a href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a></span>
					<h4></h4>
					<p></p>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
					<a class="thumbnail">
						<span class="img">
							<img src="../assets/img/port2.png" alt="">
						</span>
						<span class="title">Web Portofolio Vue.js</span>
					</a>
					<span class="details"><a href="https://id.wikipedia.org/wiki/Vue.js" target="_blank">Vue.js</a> | <a href="https://id.wikipedia.org/wiki/HTML" target="_blank">HTML</a> | <a href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a></span>
					<h4></h4>
					<p></p>
				</div>
        </div>
        </div>

<footer id="footer">
	<div class="container">
		<div class="row">
			<div class="col-md-3 widget">
				<h3 class="widget-title">Kontak Saya</h3>
				<div class="widget-body">
					<p>+62 8998427430<br>
						<a href="mailto:#">caesargilang50@gmail.com</a><br>
						<br>
						Jalan Gunung Ungaran Gang Sandat Buntu No. 1 Denpasar, Bali, Indonesia
					</p>	
				</div>
			</div>

			<div class="col-md-3 widget">
				<h3 class="widget-title">Sosial Media Saya</h3>
				<div class="widget-body">
					<p class="follow-me-icons">
						<a href="https://twitter.com/m_caesar19" target="_blank"><i class="fa fa-twitter fa-2"></i></a>
						<a href="https://www.instagram.com/muhammadcaesar19/" target="_blank"><i class="fa fa-instagram fa-2"></i></a>
						<a href="https://github.com/Biji-Meledak" target="_blank"><i class="fa fa-github fa-2"></i></a>
						<a href="https://web.facebook.com/MuhammadCaesar19" target="_blank"><i class="fa fa-facebook fa-2"></i></a>
					</p>
				</div>
			</div>
		</div> <!-- /row of widgets -->
	</div>
</footer>

<footer id="underfooter">
	<div class="container">
		<div class="row">
			<div class="col-md-6 widget">
				<div class="widget-body">
					<p>&copy; 2022 Muhammad Caesar Gilang Indrawan</p>
				</div>
			</div>
		</div> <!-- /row of widgets -->
	</div>
</footer>
</template>

<style>

#head {
  background: #f4f4f4 top center;
  background-size: cover;
  color: #7C7C7C;
  padding: 30px 0 35px 0;
}
#head img.img-circle {
  display: block;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 9px solid rgba(0, 0, 0, 0.05);
  margin: 0 auto;
}
#head .title {
  font-family: Alice, Georgia, serif;
  font-size: 49px;
  font-size: 3.0625rem;
}

#head .tagline {
  padding-top: 50px;
  display: block;
  font-size: 14px;
  font-size: 2.875rem;
  line-height: 1.2em;
  color: #7C7C7C;
  margin: 5px 0 0;
}

.home #head {
  padding: 90px 0;
}
.home #head .title {
  font-size: 49px;
  font-size: 3.0625rem;
}
.home #head .tagline {
  font-size: 16px;
  font-size: 1rem;
  margin: 15px 0 0;
}

.navbar {
  border-width: 1px 0;
  -webkit-border-radius: 0;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0;
  -moz-background-clip: padding;
  border-radius: 0;
  background-clip: padding-box;
  width: 100%;
}

.navbar-collapse {
  -webkit-border-radius: 0;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0;
  -moz-background-clip: padding;
  border-radius: 0;
  background-clip: padding-box;
  font-family: "Open sans", Helvetica, Arial, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
}
.navbar-collapse .navbar-nav {
  float: none;
  margin: 0 auto;
  text-align: center;
}
.navbar-collapse .navbar-nav > li {
  float: none;
  display: inline-block;
}
.navbar-collapse .navbar-nav > li > a {
  padding: 20px 30px;
}

.navbar-default {
  background-color: #ffffff;
  border-color: #cccccc;
}
.navbar-default .navbar-nav > li > a {
  color: #454545;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #000000;
  background-color: #ffffff;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #000000;
  background-color: #ffffff;
}

.navbar-default .navbar-toggle {
  border-color: #666666;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ffffff;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #333333;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #cccccc;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: #ffffff;
  color: #000000;
}

.section-title,
.entry-title {
  display: block;
  width: 100%;
  overflow: hidden;
  margin: 0px 0 25px;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 36px;
  font-size: 2.25rem;
  letter-spacing: 1px;
}
.section-title a,
.entry-title a {
  color: #333333;
}
.section-title span,
.entry-title span {
  display: inline-block;
  position: relative;
}
.section-title span:before,
.entry-title span:before,
.section-title span:after,
.entry-title span:after {
  content: "";
  position: absolute;
  height: 4px;
  top: .53em;
  width: 400%;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.section-title span:before,
.entry-title span:before {
  right: 100%;
  margin-right: 45px;
}
.section-title span:after,
.entry-title span:after {
  left: 100%;
  margin-left: 45px;
}
.entry-header .entry-meta {
  text-align: center;
  font-family: Georgia, serif;
  font-size: 18px;
  font-size: 1.125rem;
  font-style: italic;
  font-weight: normal;
  color: #a5a5a5;
  margin: 0 0 15px 0;
}
.entry-header .entry-meta a {
  color: #a5a5a5;
}
.entry-content {
  margin: 0 0 60px 0;
}
.entry-content h2 {
  line-height: 1.2;
  font-size: 30px;
  font-size: 1.875rem;
  padding-top: 20px;
  margin-bottom: 20px;
}
.meta-nav,
.more-link {
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: bold;
  color: #666666;
  text-decoration: none;
}
.meta-nav:hover,
.more-link:hover {
  color: #333333;
  text-decoration: underline;
}
.more-link {
  display: block;
  width: 100%;
  text-align: right;
}
/* Posts navigation */
#nav-below {
  position: fixed;
  top: 48%;
}
#nav-below .meta-nav {
  display: block;
  padding: 27px 7px;
  background: #444;
  color: #fff;
  -webkit-border-radius: 3px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 3px;
  -moz-background-clip: padding;
  border-radius: 3px;
  background-clip: padding-box;
  font-family: "Open sans", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  opacity: 0.2;
}
#nav-below .meta-nav:hover {
  text-decoration: none;
  color: #333;
}
#nav-below .nav-next {
  position: fixed;
  right: -3px;
}
#nav-below .nav-previous {
  position: fixed;
  left: -3px;
}
#nav-below b {
  display: none;
}
#footer {
  background: #232323;
  padding: 30px 0 0 0;
  font-size: 12px;
  color: #999;
}
#footer a {
  color: #ccc;
}
#footer a:hover {
  color: #fff;
}
#footer h3.widget-title {
  font-size: 15px;
  font-size: 1.9375rem;
  text-transform: uppercase;
  color: #ccc;
  margin: 0 0 20px;
}
#underfooter {
  background: #191919;
  padding: 15px 0;
  color: #777;
  font-size: 12px;
}
#underfooter a {
  color: #aaa;
}
#underfooter a:hover {
  color: #fff;
}
#underfooter p {
  margin: 0;
}
.follow-me-icons {
  font-size: 30px;
}
.follow-me-icons i {
  float: left;
  margin: 0 10px 0 0;
}

.page-header {
  padding-bottom: 0;
  margin: 0;
  border-bottom: none;
  text-align: left;
}
.page-header .page-title {
  margin-top: 0;
  margin-bottom: 30px;
}

img {
  max-width: 100%;
}
.btn {
  font-size: 12px;
  font-size: 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  -webkit-border-radius: 0px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0px;
  -moz-background-clip: padding;
  border-radius: 0px;
  background-clip: padding-box;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  -ms-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  border: 0 none;
  padding: 12px 35px;
  text-shadow: 0 1px 0px #780d33;
}
.btn-primary {
  color: #fff;
  background-color: #bd1550;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active {
  color: #fff;
  background-color: #e61f65;
}
.btn-action {
  font-weight: bold;
  background: transparent!important;
  border: 1px solid #333;
  text-shadow: none;
}
.btn-action:hover,
.btn-action:focus,
.btn-action:active,
.btn-action.active {
  color: #bd1550;
  border-color: #bd1550;
}
.btn-lg {
  padding: 15px 60px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: bold;
}
.panel-cta {
  box-shadow: 0 0 0 1px #e1e1e1, 0 0 0 3px #fff, 0 0 0 4px #e1e1e1;
  background: #f3f3f3;
  -webkit-border-radius: 0;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0;
  -moz-background-clip: padding;
  border-radius: 0;
  background-clip: padding-box;
}
.panel-cta p,
.panel-cta h3,
.panel-cta h4,
.panel-cta h5,
.panel-cta h6 {
  margin: 0;
}
.panel-cta .panel-body {
  padding: 35px;
}
/* Section - Featured */
.featured {
  font-size: 13px;
  font-size: 0.8125rem;
}
.featured h3 {
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.4em;
  vertical-align: middle;
  margin: 0 0 25px 0;
}
/* Section - Recent works */
.thumbnails {
  padding: 0;
}
.thumbnails li {
  margin-bottom: 30px;
}
.thumbnails .details {
  display: block;
  text-align: center;
  font-size: 12px;
  font-size: 1.75rem;
}
.thumbnail {
  display: block;
  -webkit-border-radius: 0;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0;
  -moz-background-clip: padding;
  border-radius: 0;
  background-clip: padding-box;
  border: 0 none;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  text-decoration: none;
  color: #333;
}
.thumbnail .img {
  display: block;
  width: 100%;
  overflow: hidden;
  height: 180px;
  margin: 0 0 20px;
  position: relative;
}
.thumbnail .title {
  text-transform: uppercase;
  margin: 0 2em;
  display: block;
  text-indent: 0;
}
.thumbnail .cover {
  position: absolute;
  display: block;
  opacity: 0;
  width: 100%;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  -ms-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 550ms;
  -moz-transition-duration: 550ms;
  -o-transition-duration: 550ms;
  transition-duration: 550ms;
}
.thumbnail .cover .more {
  position: absolute;
  bottom: 15px;
  right: 0;
  height: 32px;
  line-height: 32px;
  padding: 0 20px;
  -webkit-border-radius: 1px 0 0 1px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 1px 0 0 1px;
  -moz-background-clip: padding;
  border-radius: 1px 0 0 1px;
  background-clip: padding-box;
  font-size: 12px;
  font-size: 1.75rem;
  text-transform: uppercase;
  text-shadow: 0 1px 0px #3e3abc;
  background: #eeeeee;
  color: 3e3abc;
}
.thumbnail img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.thumbnail:hover {
  color: #333;
  text-decoration: none;
}

.thumbnail:hover .cover {
  opacity: 1;
}
/* pagination */
.pagination > li > a {
  color: #808080;
  border: 0 none;
  font-size: 20px;
  font-size: 1.25rem;
  font-family: Georgia, serif;
}
.pagination > li > a:hover {
  color: #000000;
  background: none;
}
.pagination > li.active > a {
  color: #333333;
  background: none;
}
.pagination > li.active > a:hover {
  color: #000000;
  background: none;
}
</style>
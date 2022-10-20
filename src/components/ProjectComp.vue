<script>
import imageStore from "../stores/image";
import BaseCard from "../components/CardComp.vue";
import { mapState } from "pinia";

export default {
  name: "ProjectComp",
  props: {
    data: Object,
  },
  components: {
    BaseCard,
  },
  computed: {
    ...mapState(imageStore, ["g$list"]),
  },
};
</script>

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
					<li><RouterLink to="/contact">Contact</RouterLink></li>
					<li><RouterLink to="/project">Projects</RouterLink></li>
				</ul>
			</div>
			</div><!--/.nav-collapse -->			
	</nav>
</header>
<template v-for="(img, index) in g$list" :key="index">
	<RouterLink :to="{ name: 'detail', params: { id: img.slug } }">
            <BaseCard class="gambar" :data="img" />
    </RouterLink>
</template>
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

</style>

<!-- <template v-for="(img, index) in g$list" :key="index">
  <div class="konten">
    <RouterLink :to="{ name: 'project', params: { id: img.slug } }">
      <BaseCard class="gambar" :data="img" />
    </RouterLink>
    <div class="desc">
    </div>
  </div>
</template> -->
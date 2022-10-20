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

	<div class="container">
	<div id="respond">
		<h3 id="reply-title">Hubungi Saya</h3>
			<form id="commentform">
				<div class="form-group">
					<label for="inputName">Nama</label>
					<input type="text" class="form-control" id="inputName" placeholder="Masukkan Nama Anda" v-model="form.nama">
				</div>
				<div class="form-group">
					<label for="inputEmail">Email<i class="text-danger">*</i></label>
					<input type="email" class="form-control" id="inputEmail" placeholder="Masukkan Alamat Email Anda" v-model="form.email">
				</div>
				<div class="form-group">
					<label for="inputWeb">Nomor Telepon</label>
					<input type="text" class="form-control" id="inputWeb" placeholder="Masukkan Nomor Telepon Anda" v-model="form.nomer">
				</div>
				<div class="form-group">
					<label for="inputComment">Pesan</label>
					<textarea class="form-control" rows="6" v-model="form.pesan"></textarea>
				</div>
				<div class="col-md-14 text-right">
					<button type="submit" class="btn btn-action">Kirim</button>
				</div>
			</form>
	</div> <!-- /respond -->
</div>
</header>
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
		</div> 
	</div>
</footer>
</template>

<script>
export default {
	name: "ContactView",
	components: {},
    data:() => ({
	title: "Contact",
    data: [],
        form: {
            nama: "",
            email: "",
            nomer: "",
			pesan: "",
            },
        }),
    methods: {
        async submit(){
			const data = new FormData();
			Object.keys(this.form).forEach((key) =>
			data.append(key, this.form[key])
		);
		await fetch("https://formspree.io/f/xoqbnqpd", {
			method: "POST",
			body: data,
		});
			this.reset();
		},
			logEmits(event) {
			console.log("formEmits", event);
		},
	},
	watch: {
    "form.nama"(val) {
    console.log("Input nama berubah menjadi", val);
    },
  },
};
</script>

<style>

</style>

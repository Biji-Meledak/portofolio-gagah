<script>
import ImageComp from "./ImageComp.vue";

export default {
  name: "CardComp",
  props: {
    data: Object,
  },
  components: {
    ImageComp,
},
};
</script>

<template>
  <div class="container">
  <div class="card">
    <h1>{{data.title}}</h1>
    <ImageComp class="gambarcard" :src="data.img"/>
  </div>
  </div>
</template>

<style>

h1{
  padding: 30px;
  display: block;
  margin-top: 30px;
  color: #7C7C7C;
  text-align: center;
}

.card{
  padding: 30px;
}
</style>

<template>
  <f7-page >
    <f7-navbar v-bind:title=" $f7route.hash " back-link="Back" color="black"></f7-navbar>
    <f7-block-title>This is category id : {{$f7route.params.pathId}} </f7-block-title>

      <f7-list media-list v-for="product in products" :key="product.product_id">
          <f7-list-item
            link="#"
            v-bind:title="product.name"
            v-bind:after="product.price"
            subtitle="Ratings : 15"
            v-bind:text="product.description"
          >
            <img slot="media"  v-bind:src=" product.thumb " width="80" />
          </f7-list-item>
 
    </f7-list>

   <!-- <f7-button big @click="getPostsViaREST" color="green">Load more..</f7-button> -->

   <f7-button big color="green">Load more..</f7-button>
   
  </f7-page>
</template>

<script>
import axios from 'axios';
export default {
   data: function () {
    return {
      id:this.$f7route.params.pathId,
      products: {}
    }
  },
  methods: {
    getPostsViaREST (event) {
      axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path=443').then(response => {this.products = response.data})
    }
  },
  created(){
          axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path='+this.id).then(response => {this.products = response.data})
          // window.addEventListener('scroll', this.handleScroll); // helps to handle scroll //
        },
  

}
</script>
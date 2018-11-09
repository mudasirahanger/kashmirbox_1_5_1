<template>
  <f7-page>
    <f7-navbar color="black">
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>KB</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:search" icon-if-md="material:search" ></f7-link>
        <f7-link icon-if-ios="f7:favorite" icon-if-md="material:favorite" ></f7-link>
        <f7-link icon-if-ios="f7:shopping_cart" icon-if-md="material:shopping_cart" panel-open="right"></f7-link>
      </f7-nav-right> 
    </f7-navbar>

    <f7-block-title> {{ $f7route.hash }} </f7-block-title>

      <f7-list media-list v-for="product in products" :key="product.product_id">
          <f7-list-item
            v-bind:link="'/product/'+product.product_id"
            v-bind:title="product.name"
            v-bind:after="product.price"
            v-bind:subtitle="product.kbcode"
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
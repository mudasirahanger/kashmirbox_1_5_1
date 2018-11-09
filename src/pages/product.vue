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
    
    <f7-row  v-if=" products.length ">
      <f7-col>
            <f7-swiper pagination >
              <f7-swiper-slide>
                <img  v-bind:src=" products[0].thumb " />
              </f7-swiper-slide>
              <f7-swiper-slide><img  v-bind:src=" products[0].thumb " /></f7-swiper-slide>
              <f7-swiper-slide><img  v-bind:src=" products[0].thumb " /></f7-swiper-slide>
            </f7-swiper>
      </f7-col>
    </f7-row>


    <f7-row  v-if=" products.length ">
      <f7-col>
            <h3>{{  products[0].name }}   </h3>
      
            <p>{{  products[0].description }}   </p>

            <span> {{ products[0].price }}</span>

            
      </f7-col>
    </f7-row>
   
   <div class="tax">Additional tax may apply; charged at checkout</div>
  </f7-page>
</template>
<script>
import axios from 'axios';
export default {
   data: function () {
    return {
      id:this.$f7route.params.productId,
      products: {}
    }
  },
  created(){
          axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProductDetials&product_id='+this.id).then(response => {this.products = response.data})
          // window.addEventListener('scroll', this.handleScroll); // helps to handle scroll //
        },
  

}
</script>
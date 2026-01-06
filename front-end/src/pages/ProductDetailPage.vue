<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageName" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import { products } from '../temp-data.js';
export default {
  name: 'ProductsDetailPage',
  data() {
    return {
      product: products.find(p => p.id === this.$route.params.productId)
    };
  },
  components: {
    NotFoundPage
  },
}
</script>
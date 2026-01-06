<template>
    <h1>Products</h1>
    <ProductsList :products="products" />
</template>

<script>
import { products } from '../temp-data.js';
import ProductsList from '@/components/ProductsList.vue';
export default {
  name: 'ProductsPage',
  components: {
    ProductsList
  },
  data() {
    return {
      products
    };
  },
}
</script>
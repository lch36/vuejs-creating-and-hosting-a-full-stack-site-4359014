<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :cartItems="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    <p>Your cart is empty.</p>
  </div>
</template>

<script>

import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

export default {
  name: 'ShoppingCartPage',
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems,
    };
  }
}
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Products</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useProducts from "@/composables/products";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  async setup() {
    const { products } = await useProducts();

    return { products };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

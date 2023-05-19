<template>
  <div class="products-wrap border pt-5 ps-5 pe-5">
    <div class="row pb-4">
      <div class="col-2 p-0">
        <h3 class="text-start fw-bold m-0 products-wrap-header-text">
          Продукты
        </h3>
      </div>

      <div class="col-2 select-wrap text-start p-0">
        <label>Тип:</label>
        <select
          v-model="filter"
          class="type-select"
        >
          <option
            value=""
            disabled
            selected
          >
            Все типы
          </option>
          <option
            v-for="productType in productsTypeList"
            :key="productType.type"
          >
            {{ productType }}
          </option>
        </select>
      </div>
    </div>

    <div class="products-list-scroll">
      <div
        v-for="item in filteredItems"
        :key="item.type"
        class="pt-4"
      >
        <Product
          :product="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Product from '../components/Product'

export default {
  name: 'Products',
  components: { Product },
  
  data() {
    return {
      productsTypeList: [],
      filter: ''
    }
  },

  computed: {
    getProducts() {
      return store.getters.products
    },
    filteredItems() {
      return this.getProducts.filter(item => {
        return item.type.toLowerCase().indexOf(this.filter.toLowerCase()) > -1
      })
    }
  },

  mounted() {
    store.dispatch('fetchOrders')
    store.dispatch('fetchProducts')

    this.productsTypeList = [...new Set(this.getProducts.map((object) => {
      return object.type
    }))]
  }
}
</script>

<style>
.products-wrap {
  height: 700px;
}

.type-select {
  border: 1px solid #b4b4b4;
  width: 200px;
  border-radius: 5px;
  padding: 0 10px;
  height: 25px;
}

.select-wrap {
  height: 42px;
  display: flex;
  align-items: center
}

.products-wrap-header-text {
  line-height: 42px;
}

.products-list-scroll {
  height: 830px;
  overflow: scroll;
}

.products-list-scroll::-webkit-scrollbar { width: 0; }
</style>

<template>
  <div class="products-wrap pt-5 ps-5 pe-5">
    <div class="pb-4">
      <h3 class="text-start fw-bold m-0 products-wrap-header-text">
        Приходы
      </h3>
    </div>

    <div class="row">
      <div class="col">
        <div
          :class="{'active-block': active}"
          class="orders-wrap"
        >
          <div
            v-for="order in getOrders"
            :key="order.type"
            class="pt-4"
          >
            <div>
              <div
                class="product-wrap border row bg-light"
                :class="{'active': active}"
              >
                <div
                  v-if="!active"
                  class="product-name col-5 product-content-centered text-decoration-underline overflow-scroll"
                >
                  <p>
                    {{ order.title }}
                  </p>
                </div>

                <div
                  class="order-product-list col row"
                  @click="active = true, getBlockOfProducts(order)"
                >
                  <div class="col-4 pe-0 product-content-centered">
                    <div class="order-svg-wrap float-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-list-ul"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="col-7 ps-0 product-content-centered">
                    <div>
                      <p class="fs-2 m-0 text-start">
                        {{ order.products.length }}
                      </p>
                      <p class="product-amount-text text-start text-secondary">
                        Продукта
                      </p>
                    </div>
                  </div>
                </div>

                <div class="order-date col product-content-centered fw-bold p-0">
                  <div class="row">
                    <p>
                      {{ $moment(order.date).format("MMM Do YY") }}
                    </p>

                    <p class="text-secondary secondary-date">
                      {{ $moment(order.date).subtract(10, 'days').calendar() }}
                    </p>
                  </div>

                  <div
                    v-if="itemBlock.id === order.id && active"
                    class="active-indicator"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="white"
                      class="bi bi-caret-right-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                  </div>
                </div>

                <div
                  v-if="!active"
                  class="order-price col-2 product-content-centered row fw-bold"
                >
                  <p>
                    {{ getTotalOrderAmount(0, order) }} $
                  </p>

                  <p>
                    {{ getTotalOrderAmount(1, order) }} UAH
                  </p>
                </div>

                <div
                  v-if="!active"
                  class="col-1  product-content-centered"
                >
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                  </button>
                </div>

                <div
                  id="exampleModal"
                  class="mt-5 modal fade"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          id="exampleModalLabel"
                          class="modal-title"
                        >
                          Вы уверены что хотите удалить этот приход?
                        </h5>
                        <button
                          type="button"
                          class="btn-close btn-order-delete-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div class="modal-body text-decoration-underline">
                        {{ order.title }}
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn rounded-5 text-primary text-white fw-bold me-3"
                          data-bs-dismiss="modal"
                        >
                          Отменить
                        </button>
                        <button
                          type="button"
                          class="btn bg-light rounded-5 text-danger ps-5 pe-5"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="active"
        class="col"
      >
        <OrderBlockWithProducts
          :order="itemBlock"
          class="border mt-4"
        />
        <button
          type="button"
          class="btn-close btn-order-delete-modal btn-close-block"
          @click="active = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import OrderBlockWithProducts from '../components/OrderBlockWithProducts'

export default {
  name: 'Orders',
  components: { OrderBlockWithProducts },

  data() {
    return {
      productsTypeList: [],
      filter: '',
      active: false,
      itemBlock: ''
    }
  },

  computed: {
    getOrders() {
      return store.getters.orders
    }
  },

  mounted() {
    store.dispatch('fetchOrders')
    store.dispatch('fetchProducts')
  },

  methods: {
    getBlockOfProducts (data) {
      this.itemBlock = data
    },

    getTotalOrderAmount(price, order) {
      let amounts = order.products.map(function(product) {
        return product.price[price].value
      })
      return amounts.reduce(function(total, current) {
        return total + current
      }, 0).toFixed(2)
    }
  }
}
</script>

<style>
.products-wrap {
  height: 700px;
}

.products-wrap-header-text {
  line-height: 42px;
}

.active-block {
  width: 500px;
}

.product-wrap {
  height: 100px;
  border-radius:10px;
}

.product-content-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-content-centered p {
  margin: 0;
}

.secondary-date {
  font-size: 13px;
}

.order-svg-wrap {
  border: 1px solid #c7c7c7;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order-svg-wrap svg {
  display: block;
}

.product-amount-text {
  font-size: 17px;
}

.btn-order-delete-modal {
  position: relative;
  bottom: 30px;
  background-color: white;
  opacity: 1;
  border-radius: 50%;
  color: black;
  left: 20px;
  -webkit-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.35);
  -moz-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.35);
  box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.35);
}

.modal-footer {
  background-color: #9dd734;
}

.active {
  width: 500px;
}

.btn-close-block {
  position: relative;
  bottom: 715px;
  background-color: white;
  opacity: 1;
  border-radius: 50%;
  color: black;
  left: 425px;
  padding: 10px;
  -webkit-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.35);
  -moz-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.35);
  box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.35);
}

.orders-wrap {
  height: 830px;
  overflow: scroll;
}

.orders-wrap::-webkit-scrollbar { width: 0; }

.active-indicator {
  height: 100%;
  width: 40px;
  background-color: #e0e8e8;
  justify-content: center;
  display: flex;
  align-items: center;
}

.order-svg-wrap:hover {
  background-color: #dedede;
  cursor: pointer;
}
</style>

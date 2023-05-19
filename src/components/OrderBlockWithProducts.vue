<template>
  <div class="info-block bg-light">
    <h3 class="p-4">
      {{ order.title }}
    </h3>
    <p class="text-start add-product ps-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#9dd734"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
      Добавить продукт
    </p>

    <div class="product-list">
      <div
        v-for="product in order.products"
        class="row border-bottom border-top pt-3"
      >
        <div class="col-10">
          <p>{{ product.title }}</p>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn"
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
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['order']
}
</script>

<style>
.info-block {
  height: 700px;
  width: 850px;
}

.add-product {
  color: var(--color-green)
}

.product-list {
  height: 550px;
  overflow: scroll;
}

.product-list::-webkit-scrollbar { width: 0; }
</style>
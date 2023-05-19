<template>
  <div class="product-wrap border row bg-light">
    <div class="product-name col product-content-centered text-decoration-underline">
      <p>
        {{ product.title }}
      </p>
    </div>

    <div class="product-type col product-content-centered">
      <p>
        {{ product.type }}
      </p>
    </div>

    <div class="product-guarantee col product-content-centered row fw-bold">
      <p>
        <span class="fw-normal text-secondary">c</span> {{ $moment(product.guarantee.start).format("MMM Do YY") }}
      </p>

      <p class="text-secondary secondary-date">
        {{ $moment(product.guarantee.start).subtract(10, 'days').calendar() }}
      </p>

      <p>
        <span class="fw-normal text-secondary">по</span> {{ $moment(product.guarantee.end).format("MMM Do YY") }}
      </p>

      <p class="text-secondary secondary-date">
        {{ $moment(product.guarantee.end).subtract(10, 'days').calendar() }}
      </p>
    </div>

    <div class="product-price col product-content-centered row">
      <p
        v-for="item in product.price"
        :key="item"
      >
        {{ item.value + ' ' + item.symbol }}
      </p>
    </div>

    <div class="product-order col product-content-centered text-decoration-underline overflow-scroll">
      <p>
        {{ product.order }}
      </p>
    </div>

    <div class="col  product-content-centered">
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
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

.product-order::-webkit-scrollbar { width: 0; }

</style>

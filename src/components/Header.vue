<template>
  <div class="header-wrap row bg-light">
    <div class="header-logo col-3 row justify-content-end">
      <div class="col-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#9dd734"
          class="logo-svg float-end col-6 bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>
      <h5 class="col-4 fw-bold m-0 logo-text">
        INVENTORY
      </h5>
    </div>

    <div class="header-search-bar col-6 ps-5">
      <div class="input-group">
        <input
          type="text"
          class="bg-light text-secondary header-search-bar-input"
          placeholder="Поиск"
        >
      </div>
    </div>

    <div class="header-date col-3 text-start pt-3 fw-bold">
      <div>
        <p class="m-0">
          {{ getDayOfWeek }}
        </p>
      </div>

      <div class="row">
        <div class="col-4 p-0">
          <p>
            {{ getDayMonthYear }}
          </p>
        </div>
        <div class="col-6">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#9dd734"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <span
              id="datetime"
              class="ps-2"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    getDayMonthYear() {
      return (
        moment.locale('uk'),
        moment().utc().format('D MMM, y')
      )
    },
    getDayOfWeek() {
      return (
        moment.locale('uk'),
        moment().format('dddd')
      )
    }
  },

  mounted() {
    let update = function() {
      document.getElementById('datetime')
        .innerHTML = moment().utc().format('LT')
    }
    setInterval(update, 1000)
  }
}
</script>

<style>
.header-wrap {
  height: 80px;
  -webkit-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.09);
  -moz-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.09);
  box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.09);
  z-index: 999;
  position: relative;
}

.header-logo h5 {
  color: var(--color-green) !important;
}

.logo-text {
  line-height: 80px;
}

.logo-svg {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

.header-search-bar div {
  height: 80px;
  display: flex;
  align-items: center
}

.header-search-bar-input {
  width: 300px !important;
  -webkit-box-shadow: 0 0 8px -3px rgba(34, 60, 80, 0.72) inset;
  -moz-box-shadow: 0 0 8px -3px rgba(34, 60, 80, 0.72) inset;
  box-shadow: 0 0 8px -3px rgba(34, 60, 80, 0.72) inset;
  border-radius: 5px;
  padding: 5px 15px;
  border: none;
}

.header-search-bar-input::placeholder {
  color: black;
  font-weight: bold;
}

</style>
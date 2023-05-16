<template>
  <div class="header-wrap row">
    <div class="header-logo col-3 border">
      <h5>INVENTORY</h5></div>
    <div class="header-search-bar col-6 border">
      <div class="input-group w-50 h-100">
        <input type="text" class="form-control bg-light text-secondary" placeholder="Поиск">
      </div>
    </div>
    <div class="header-date col-3 border">
      {{ getDayOfWeek }}
      {{ getDayMonthYear }}
      {{ $moment(getDate).utc().format('LT') }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      time: '',
      date: ''
    }
  },
  computed: {
    getDate() {
      return (
          moment.locale("uk"),
          new Date())
    },
    getDayMonthYear() {
      return (
        moment(this.getDate).utc().format('D MMM y')
    )
    },
    getDayOfWeek() {
      return moment(this.getDate).format('dddd')
    }
  },
  mounted() {
    // let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // let timerID = setInterval(updateTime, 1000);
    // updateTime();
    // function updateTime() {
    //   let cd = new Date();
    //   clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    //   clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    // };
    //
    // function zeroPadding(num, digit) {
    //   var zero = '';
    //   for(var i = 0; i < digit; i++) {
    //     zero += '0';
    //   }
    //   return (zero + num).slice(-digit);
    // }

  }
}
</script>

<style>
.header-wrap {
  height: 80px;
}

.header-logo h5 {
  color: var(--color-green) !important;
}
</style>
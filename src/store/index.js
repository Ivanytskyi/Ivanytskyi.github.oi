import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    orders: []
  },
  mutations: {
    orders(state, value) {
      state.orders = value
    },
    products(state, value) {
      state.products = value
    },
    addOrders(state, value) {
      state.orders = value
    },
    addProducts(state, value) {
      state.products = value
    }
  },
  getters: {
    orders: (state) => state.orders,
    products: (state) => state.products
  },
  actions: {
    fetchProducts(context) {
      context.commit('addProducts', products)
    },
    fetchOrders(context) {
      orders.forEach(item => {
        item.products = products
      })
      context.commit('addOrders', orders)
    }
  },
  modules: {}
})

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 4800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 'длинное предлиноое название прихода',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 4800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 'длинное предлиноое название прихода',
    date: '2017-06-29 12:09:33'
  }, {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 4800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 'длинное предлиноое название прихода',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 4800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 'длинное предлиноое название прихода',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 6,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 4800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 'длинное предлиноое название прихода',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 7,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 4800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 'длинное предлиноое название прихода',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 160, symbol: 'USD', isDefault: 0 },
      { value: 5900.2333333, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Keyboard',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Screen',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]
const orders = [
  {
    id: 12,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 23,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 43,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 17,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 42,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 63,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 14,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 22,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  },
  {
    id: 33,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: []
  }
]

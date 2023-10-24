import Vue from "vue";
import axios from "axios";

var cc = require("currency-codes");
console.log(cc.code("EUR"));

new Vue({
  data() {
    return {
      amount: null,
      result: null,
      convertFrom: "",
      convertTo: "",
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response.data.bpi));
  },
  computed: {
    convertCurrency(number, convertFrom, convertTo) {
      const convertFrom = cc.code(convertFrom);
      const convertTo = cc.code(convertTo);
    },
  },
  methods: {},
}).mount("#app");

import Vue from "vue";
import axios from "axios";

var cc = require("currency-codes");
console.log(cc.code("EUR"));

new Vue({
  data() {
    return {
      number: "",
      result: "",
      convertFrom: "",
      convertTo: "",
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.monobank.ua/bank/currency")
      .then((response) => (console.log(this.info), (this.info = response)));
  },
  computed: {
    convertCurrency(number, convertFrom, convertTo) {
      const convertFrom = cc.code(convertFrom);
      const convertTo = cc.code(convertTo);
    },
  },
  methods: {},
}).mount("#app");

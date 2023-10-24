import { createApp } from "vue";
import axios from "axios";
import currencyCodes from "currency-codes";

export default createApp({
  data() {
    return {
      amount: null,
      convertFrom: "Euro",
      convertTo: "Euro",
      result: null,
    };
  },
  mounted() {
    axios.get("https://api.apilayer.com/currency-code/v1/convert", {
      params: {
        from: this.convertFrom,
        to: this.convertTo,
        amount: this.amount,
      },
    });
  },
  methods: {
    convertCurrency() {
      this.result = response.data.result;
    },
  },
});

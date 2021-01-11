<template>
  <div id="container"></div>
</template>

<script>
import props from "@/GooglePaySettings";
export default {
  props: ["address", "phoneNum"],
  data() {
    return {
      ...props,
      cardPaymentMethod: null,
      paymentsClient: null,
    };
  },
  async mounted() {
    const varsSet = await this.assignVars();
    if (varsSet) this.injectGooglePayScript();
  },
  methods: {
    async assignVars() {
      Object.assign(this, this.options);
      return await this.$nextTick();
    },
    injectGooglePayScript() {
      if (!this.paymentsClient) {
        const googlePayScript = document.createElement("script");
        googlePayScript.setAttribute(
          "src",
          "https://pay.google.com/gp/p/js/pay.js"
        );
        googlePayScript.setAttribute("async", true);
        googlePayScript.setAttribute("defer", true);
        googlePayScript.onload = () => this.onGooglePayLoaded();
        document.head.appendChild(googlePayScript);
      }
    },
    async initPaymentsVars() {
      this.cardPaymentMethod = Object.assign({}, this.baseCardPaymentMethod, {
        tokenizationSpecification: this.tokenizationSpecification,
      });
      return await this.$nextTick();
    },
    getGoogleIsReadyToPayRequest() {
      return Object.assign({}, this.baseRequest, {
        allowedPaymentMethods: [this.baseCardPaymentMethod],
      });
    },
    getGooglePaymentsClient() {
      if (this.paymentsClient === null) {
        // eslint-disable-next-line
        this.paymentsClient = new google.payments.api.PaymentsClient({
          environment: this.environment,
        });
      }
      return this.paymentsClient;
    },
    addGooglePayButton() {
      const button = this.paymentsClient.createButton({
        onClick: () => this.googlePayButtonClick(),
        buttonColor: this.buttonColor,
        buttonType: "short",
      });
      document.getElementById("container").appendChild(button);
    },
    async onGooglePayLoaded() {
      const varsSet = await this.initPaymentsVars();
      if (varsSet) {
        const paymentsClient = this.getGooglePaymentsClient();
        paymentsClient
          .isReadyToPay(this.getGoogleIsReadyToPayRequest())
          .then((response) => {
            if (response.result) {
              this.addGooglePayButton();
              // @todo prefetch payment data to improve performance after confirming site functionality
              // prefetchGooglePaymentData();
            }
          })
          .catch((err) => {
            // show error in developer console for debugging
            console.error(err);
          });
      }
    },
    getGooglePaymentDataRequest() {
      const paymentDataRequest = Object.assign({}, this.baseRequest);
      paymentDataRequest.allowedPaymentMethods = [this.cardPaymentMethod];
      paymentDataRequest.transactionInfo = this.transactionInfo;
      paymentDataRequest.merchantInfo = {
        // @todo a merchant ID is available for a production environment after approval by Google
        // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
        merchantId: this.merchantInfo.merchantId,
        merchantName: this.merchantInfo.merchantName,
      };
      return paymentDataRequest;
    },
    googlePayButtonClick() {
      const paymentDataRequest = this.getGooglePaymentDataRequest();
      paymentDataRequest.transactionInfo = this.transactionInfo;

      const paymentsClient = this.getGooglePaymentsClient();
      paymentsClient
        .loadPaymentData(paymentDataRequest)
        .then((paymentData) => {
          //this.$emit("payed", paymentData);
          this.buy();
          console.log("success");
        })
        .catch((err) => {
          // show error in developer console for debugging
          console.error(err);
          if (err.statusCode === "CANCELED") console.log("cancel"); //this.$emit("cancel");
        });
    },
    async buy() {
      let sCart = await this.getCart();
      let config = {
        method: "patch",
        url: "api/shoppinglist/finish",
        headers: { uid: this.checktLogin.uid },
        data: {
          address: this.address,
        },
      };
      let _rp = await this.axios(config)
        .then(function(response) {
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (_rp == 1) {
        this.dopush();
      }
    },
    dopush() {
      alert("購買成功");
      this.$router.push({
        name: "History",
      });
    },
    async getCart() {
      let config = {
        method: "get",
        url: "api/shoppinglist/cart",
        headers: { uid: this.checktLogin.uid },
      };
      let doc = await this.axios(config)
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return this.cart;
        });
    },
  },
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
  },
};
</script>

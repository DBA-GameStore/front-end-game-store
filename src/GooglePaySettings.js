export default {
    environment: "TEST",
    buttonColor: "black",
    baseRequest: {
      apiVersion: 2,
      apiVersionMinor: 0
    },
    allowedCardNetworks: [
      "AMEX",
      "DISCOVER",
      "INTERAC",
      "JCB",
      "MASTERCARD",
      "VISA"
    ],
    allowedCardAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
    merchantInfo: {
      merchantName: "Example Merchant",
      merchantId: "0123456789"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPrice: "1.00",
      currencyCode: "USD",
      countryCode: "US"
    },
    tokenizationSpecification: {
      type: "PAYMENT_GATEWAY",
      parameters: {
        gateway: "example",
        gatewayMerchantId: "exampleGatewayMerchantId"
      }
    },
    baseCardPaymentMethod: {
      type: "CARD",
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: [
          "AMEX",
          "DISCOVER",
          "INTERAC",
          "JCB",
          "MASTERCARD",
          "VISA"
        ]
      }
    },
    cardPaymentMethod: null,
    paymentDataRequest: {
      baseRequest: {
        apiVersion: 2,
        apiVersionMinor: 0
      },
      allowedPaymentMethods: null,
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPrice: "1.00",
        currencyCode: "USD",
        countryCode: "US"
      },
      merchantInfo: {
        merchantName: "Example Merchant",
        merchantId: "0123456789"
      }
    }
  };
  
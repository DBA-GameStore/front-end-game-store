<template>
  <v-container class="Checkout">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6">
        <v-card elevation="0">
          <v-stepper v-model="e6" vertical class="elevation-0">
            <v-stepper-step :complete="e6 > 1" step="1" color="#0e0b0e">
              <v-card-title>購物清單</v-card-title>
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-container v-if="cart != null">
                <v-row>
                  <v-col cols="6">商品</v-col>
                  <v-col cols="6">價格</v-col>
                </v-row>
                <v-row v-for="(item, index) in cart" :key="index">
                  <v-col cols="6">{{ item.name }}</v-col>
                  <v-col cols="6">{{ item.price }}</v-col>
                </v-row>
              </v-container>
              <v-container v-else>
                <v-row>
                  <v-card-subtitle class="grey--text"
                    >您的購物車是空的！</v-card-subtitle
                  >
                </v-row>
              </v-container>
              <br />
              <v-btn
                @click="e6 = 2"
                text
                :disabled="cart == null"
                color="white"
              >
                <span :class="cart == null ? 'grey--text' : 'black--text'">
                  下一步
                </span>
              </v-btn>
            </v-stepper-content>
            <v-stepper-step :complete="e6 > 2" step="2" color="#0e0b0e">
              Shipping address
              <small>Information of your Shipping</small>
            </v-stepper-step>
            <v-stepper-content step="2">
              <step1 />
              <v-row>
                <v-btn @click="e6 = 3" text color="white">
                  <span class="black--text"> 下一步 </span>
                </v-btn>
                <v-spacer />
                <v-btn text color="white" @click="e6 = 1">
                  <span class="black--text"> 返回 </span>
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-step step="3" color="#1b1b1b">
              訂單確認
            </v-stepper-step>

            <v-stepper-content step="3">
              <step2 />
              <v-row>
                <googlePay />
                <v-divider
                  class="mx-4"
                  vertical
                  style="display: inline"
                ></v-divider>
                <v-btn text @click="e6 = 2"> 返回 </v-btn>
              </v-row>
            </v-stepper-content>
          </v-stepper>
        </v-card>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import step1 from "@/components/Checkout/StepperEqualsToOne.vue";
import step2 from "@/components/Checkout/StepperEqualsToTwo.vue";
import googlePay from "@/components/Checkout/GooglePay.vue";
export default {
  name: "Home",
  components: {
    step1,
    step2,
    googlePay,
  },
  data() {
    return {
      e6: 1,
      cart: null,//[{ name: "Gris", price: 100 }]
    };
  },
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
  },
  mounted() {
    if (this.checktLogin == null) {
      this.$router.push("/Profile");
    }
  },
};
</script>

<template>
  <v-container class="Checkout">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6">
        <v-card elevation="0">
          <v-stepper v-model="e6" vertical class="elevation-0">
            <v-stepper-step :complete="e6 > 1" step="1" color="#0e0b0e">
              <v-card-title>購物清單</v-card-title>
              <small>Shopping Cart</small>
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-container v-if="cart.length > 0 && cart != null">
                <v-row>
                  <v-col cols="5">商品</v-col>
                  <v-col cols="5">價格</v-col>
                </v-row>
                <v-row v-for="(item, index) in cart" :key="index">
                  <v-col cols="5">{{ item.name }}</v-col>
                  <v-col cols="5">{{ item.price }}</v-col>
                  <v-col cols="1">
                    <v-btn icon @click="remove(item)"
                      ><v-icon>mdi-close-circle-outline</v-icon></v-btn
                    >
                  </v-col>
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
                :disabled="cart == null || cart.length <= 0"
                color="white"
              >
                <span
                  :class="
                    cart == null || cart.length <= 0
                      ? 'grey--text'
                      : 'black--text'
                  "
                >
                  下一步
                </span>
              </v-btn>
            </v-stepper-content>
            <v-stepper-step :complete="e6 > 2" step="2" color="#0e0b0e">
              物流資訊
              <small>Shipping address</small>
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
              確認付款
              <small>Payment</small>
            </v-stepper-step>

            <v-stepper-content step="3">
              <step2 :cart="cart" shipping="100" />
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
      cart: [],
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
    this.updateCart();
  },
  methods: {
    remove(e) {
      console.log(e);
      this.cart = this.cart.filter((item) => item != e);
      this.axios
        .delete("http://127.0.0.1/sqlproject/shoppinglist/cart/" + e.id)
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async updateCart() {
      let vm = this;
      let doc = await this.retrive("shoppinglist/cart");
      this.cart = doc.data;
    },
    async retrive(collection) {
      const snapshot = await this.axios
        .get("http://127.0.0.1/sqlproject/" + collection)
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
      return snapshot;
    },
  },
};
</script>

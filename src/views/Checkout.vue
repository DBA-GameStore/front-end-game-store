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
                <v-btn @click="caculate" text color="white">
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
              <v-card elevation="0">
                <h1>Checkout Order</h1>
                <br />
                <v-row>
                  <v-col cols="5">
                    <h2 class="Half-Grey">Total Price:</h2>
                  </v-col>
                  <v-col cols="4">
                    <h3 class="pa-0 ma-0">${{ totalPrice }}</h3>
                  </v-col>
                  <v-col cols="2"> </v-col>
                </v-row>
                <v-row v-for="(item, index) in cart" :key="index">
                  <v-col cols="2">
                    <v-divider
                      class="mx-4"
                      vertical
                      style="display: inline"
                    ></v-divider>
                  </v-col>
                  <v-col cols="7">
                    <h4>{{ item.name }}</h4>
                  </v-col>
                  <v-spacer />
                  <v-col cols="2" style="left: -10px">
                    <h4>{{ item.price }}</h4>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="2">
                    <v-divider
                      class="mx-4"
                      vertical
                      style="display: inline"
                    ></v-divider>
                  </v-col>
                  <v-col cols="7">
                    <h4>運費</h4>
                  </v-col>
                  <v-spacer />
                  <v-col cols="2" style="left: -10px">
                    <h4>{{ shipping }}</h4>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      :items="coupon"
                      append-icon="mdi-ticket"
                      label="優惠券"
                      :placeholder="coupon == [] ? '暫無優惠券' : '選擇優惠券'"
                      v-model="coupon"
                      outlined
                      dense
                      :disabled="coupon == []"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card>
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
import googlePay from "@/components/Checkout/GooglePay.vue";
import replyVue from "../components/SingleGamePage/reply.vue";
import googleprops from "@/GooglePaySettings";

export default {
  name: "Home",
  components: {
    step1,
    googlePay,
  },
  data() {
    return {
      e6: 1,
      cart: [],
      shipping: 100,
      totalPrice: 0,
      coupon: ["滿千折百"],
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
      let config = {
        method: "delete",
        url: "api/shoppinglist/cart/" + e.id,
        headers: { uid: this.checktLogin.uid },
      };
      this.axios(config)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          return this.cart;
        });
      this.cart = this.cart.filter((item) => item != e);
    },
    async updateCart() {
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
      this.cart = doc.data;
    },
    async caculate() {
      this.totalPrice = 0;
      this.cart.forEach((element) => {
        this.totalPrice += parseInt(element.price);
      });
      this.totalPrice += parseInt(this.shipping);
      googleprops.transactionInfo.totalPrice = this.totalPrice.toString();
      googleprops.paymentDataRequest.transactionInfo.totalPrice = this.totalPrice.toString();
      this.e6 = 3;
    },
  },
};
</script>

<style>
.Half-Grey {
  background: linear-gradient(to top, #bbdefb 50%, transparent 50%);
  border-radius: 0;
}
.v-label.theme--light {
  color: black !important;
}
</style>

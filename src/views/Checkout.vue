<template>
  <v-container class="Checkout">
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6">
        <v-card elevation="0">
          <v-stepper v-model="e6" vertical class="elevation-0">
            <v-stepper-step :complete="e6 > 1" step="1" color="#1b1b1b">
              Shipping address
              <small>Information of your Shipping</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <step1 />
              <v-row>
                <v-btn @click="e6 = 2" text color="white">
                  <span class="black--text"> Continue </span>
                </v-btn>
                <v-spacer />
                <v-btn text color="white">
                  <span class="black--text"> Cancel </span>
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2" color="#1b1b1b">
              Your order
            </v-stepper-step>

            <v-stepper-content step="2">
              <step2 />
              <v-row>
                <googlePay />
                <v-divider
                  class="mx-4"
                  vertical
                  style="display: inline"
                ></v-divider>
                <v-btn text @click="e6 = 1"> Cancel </v-btn>
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
import step1 from "@/components/Checkout/StepperEqualsToOne.vue"
import step2 from "@/components/Checkout/StepperEqualsToTwo.vue"
import googlePay from '@/components/Checkout/GooglePay.vue'
export default {
  name: "Home",
  components: {
    step1,
    step2,
    googlePay
  },
  data(){
    return {
        e6: 1
    }
  }
};
</script>

<template>
  <v-form ref="form">
    <v-text-field v-model="context" outlined label="優惠說明"></v-text-field>
    <v-text-field v-model="discount" outlined label="折扣金額"></v-text-field>
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateRangeText"
          label="Date range"
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          readonly
        ></v-text-field>
      </template>
      <v-date-picker v-model="dates" no-title range></v-date-picker>
    </v-menu>
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn text @click="dopost">
        Upload
      </v-btn>
    </v-toolbar>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      context: "",
      discount: "",
      menu1: false,
      dates: ["", ""],
    };
  },
  mounted() {},
  computed: {
    dateRangeText() {
      return this.dates[0] + "~" + this.dates[1];
    },
  },
  methods: {
    async dopost() {
      //   let start = new Date(this.dates[0] + " 00:00:00");
      //   let end = new Date(this.dates[1] + " 00:00:00");
      let config = {
        method: "post",
        url: "api/coupon",
        data: {
          discount: this.discount,
          context: this.context,
          startdate: this.dates[0],
          enddate: this.dates[1],
        },
      };
      await this.axios(config)
        .then(function(response) {
          alert("新增優惠券");
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
    },
  },
};
</script>

<style>
.v-label.theme--light {
  color: black !important;
}
.v-input__icon v-input__icon--clear {
  color: black !important;
}
</style>

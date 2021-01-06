<template>
  <v-form ref="form" lazy-validation>
    <v-row v-for="(i, index) in formDatas" :key="index">
      <v-col cols="6">
        <v-text-field
          class="white--text"
          :label="i.first.label"
          required
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field :label="i.second.label" required outlined></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      formDatas: [
        {
          first: { label: "姓氏" },
          second: { label: "名字" },
        },
        {
          first: { label: "地址一" },
          second: { label: "地址二" },
        },
        {
          first: { label: "國家" },
          second: { label: "城市" },
        },
        {
          first: { label: "Zip Code" },
          second: { label: "聯絡電話" },
        },
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>
.theme--light.v-input input,
.theme--light.v-input textarea {
  color: black;
}
.v-label.theme--light {
  color: black !important;
}
</style>

<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row v-for="(i, index) in formDatas" :key="index">
      <v-col cols="6">
        <v-text-field
          outlined
          dense
          :counter="10"
          :label="i.first.label"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field
          outlined
          dense
          :counter="10"
          :label="i.second.label"
          required
        ></v-text-field>
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
          first: { label: "First name" },
          second: { label: "Last name" }
        },
        {
          first: { label: "Address Line 1" },
          second: { label: "Address Line 2" }
        },
        {
          first: { label: "Country" },
          second: { label: "City" }
        },
        {
          first: { label: "Zip name" },
          second: { label: "Phone number" }
        }
      ]
    };
  }
};
</script>

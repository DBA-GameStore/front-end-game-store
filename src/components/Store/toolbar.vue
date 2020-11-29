<template>
  <v-toolbar elevation="0" color="#424242" class="custom-bar" dense>
    <v-menu offset-y bottom open-on-hover :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          dark
          v-bind="attrs"
          v-on="on"
          text
          style="position: relative; left: -15px"
        >
          <div class="white--text">瀏覽</div>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in hotSale" :key="index">
          <v-btn text color="white">
            <v-list-item-title class="black--text">{{
              item.title
            }}</v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      color="white"
      dark
      v-bind="attrs"
      v-on="on"
      text
      style="position: relative; left: -15px"
    >
      <div class="white--text">活動</div>
    </v-btn>
    <v-btn
      color="white"
      dark
      v-bind="attrs"
      v-on="on"
      text
      style="position: relative; left: -15px"
    >
      <div class="white--text">遊戲分級</div>
    </v-btn>
    <v-spacer />
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      color="white"
      hide-no-data
      hide-details
      label="Search for games"
      solo-inverted
    ></v-autocomplete>
  </v-toolbar>
</template>

<script>
export default {
    props:['on','attrs'],
    data () {
      return {
        hotSale:[
            { title: "免費遊玩"},
            { title: "預購"},
            { title: "熱門遊戲"},
        ],
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
}
</script>

<style>
.custom-bar {
  padding: 0, 0, 0, 0;
}
.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
  transform: none;
}
label.v-label.theme--light {
  color: white;
}
</style>
<template>
  <v-toolbar elevation="1" dense color="white">
    <v-menu offset-y bottom open-on-hover :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          style="position: relative; left: -15px"
        >
          <div>瀏覽</div>
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
      v-bind="attrs"
      v-on="on"
      text
      style="position: relative; left: -15px"
    >
      <div>活動</div>
    </v-btn>
    <v-btn
      v-bind="attrs"
      v-on="on"
      text
      style="position: relative; left: -15px"
    >
      <div>遊戲分級</div>
    </v-btn>
    <v-spacer />
    <!-- <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="Search for games"
      solo-inverted
      dark
    ></v-autocomplete> -->
    <v-card elevation="0">
      <v-autocomplete
        append-icon="mdi-search"
        :loading="loading"
        :filter="(v) => v"
        :items="items"
        :search-input.sync="search"
        v-model="select"
        flat
        hide-no-data
        hide-details
        rounded
        color="#efefef"
        return-object
        solo
        placeholder="Search games"
      >
      </v-autocomplete>
    </v-card>
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
.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
  transform: none;
}
label.v-label.theme--light {
  color: white;
}
</style>
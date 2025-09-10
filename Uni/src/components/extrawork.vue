<script setup>
import DataService from "../services/DataService";

export default {
  name: "extraw-list",
  data() {
    return {
      extrawork: [],
      currentextrawork: null,
      currentIndex: -1,
      name: "",
      extraworkname: this.extraworkname
    };
  },
  methods: {
    retrieveextrawork() {
      DataService.getAllExtrawork()
        .then(response => {
          this.extrawork = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveextrawork();
      this.currentextrawork = null;
      this.currentIndex = -1;
    },

    setActiveextrawork(extrawork, index) {
      this.currentextrawork = extrawork;
      this.currentIndex = index;
    },

    removeAllextrawork() {
      DataService.deleteAllExtrawork()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveextrawork();
  }
};
</script>

<template>
<main>
  <div>
    <ul class="list-group">
        <li class="list-group-item" style="background-color:lightsteelblue;">Дополнительная работа</li>
        <li class="list-group-item" v-for="item in extrawork">{{item.extraworkname}}</li>
    </ul>
  </div>
</main>
</template>

<style scoped>
li{
  width:1050px;
}
ul{
  padding-top: 120px;
}

</style>
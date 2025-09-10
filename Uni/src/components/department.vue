<script setup>
import DataService from "../services/DataService";

export default {
  name: "profs-list",
  data() {
    return {
      profs: [],
      currentprof: null,
      currentIndex: -1,
      name: "",
      profname: this.profname,
      auditorium: this.auditorium,
      jobtitle: this.jobtitle,
      rate: this.rate
    };
  },
  methods: {
    retrieveprofs() {
      DataService.getAllProfs()
        .then(response => {
          this.prof = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveprofs();
      this.currentcourse = null;
      this.currentIndex = -1;
    },

    setActiveprof(prof, index) {
      this.currentprof = prof;
      this.currentIndex = index;
    },

    removeAllProfs() {
      DataService.deleteAllprofs()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchFields() {
      DataService.findByFieldsProfs(data)
        .then(response => {
          this.profs = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveprofs();
  }
};
</script>

<template>
<main>
  <label for="search" class="form-label">Поиск</label>
  <div class="input-group" id="search" style="padding-bottom: 50px;">
    <input type="text" aria-label="Name" class="form-control" v-model="profname" placeholder="ФИО">
    <input type="text" aria-label="Jobtitle" class="form-control" v-model="jobtitle" placeholder="Должность">
    <input type="text" aria-label="Auditorium" class="form-control" v-model="auditorium" placeholder="Аудитория">
    <input type="text" aria-label="Rate" class="form-control" v-model="rate" placeholder="Ставка">
    <button class="btn btn-outline-secondary" @click="searchFileds" type="button" id="buttonsearch">Поиск</button>
</div>
  <div>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item" id="name" style="background-color:lightsteelblue;">ФИО</li>
      <li class="list-group-item" id="jobtitle" style="background-color: lightsteelblue;">Должность</li>
      <li class="list-group-item" id="auditorium" style="background-color: lightsteelblue;">Аудитория</li>
      <li class="list-group-item" id="rate" style="background-color: lightsteelblue;">Ставка</li>
    </ul>
    <ul class="list-group list-group-horizontal" v-for="item in profs">
      <li class="list-group-item" id="name">{{item.profname}}</li>
      <li class="list-group-item" id="jobtitle">{{item.jobtitle}}</li>
      <li class="list-group-item" id="auditorium">{{item.auditorium}}</li>
      <li class="list-group-item" id="rate">{{item.rate}}</li>
    </ul>
  </div>
</main>
</template>

<style scoped>
#name{
  width:500px;
}

#jobtitle{
  width:300px;
}

#auditorium{
  width:150px;
}

#rate{
  width:100px;
}

</style>
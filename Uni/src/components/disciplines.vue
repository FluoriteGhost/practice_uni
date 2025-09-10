<script setup>

import DataService from "../services/DataService";

export default {
  name: "courses-list",
  data() {
    return {
      courses: [],
      currentcourse: null,
      currentIndex: -1,
      name: "",
      coursename: this.coursename,
      audit: this.audit,
      selfstudy: this.selfstudy,
      credits: this.credits
    };
  },
  methods: {
    retrievecourses() {
      DataService.getAllCourses()
        .then(response => {
          this.courses = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievecourses();
      this.currentcourse = null;
      this.currentIndex = -1;
    },

    setActivecourse(course, index) {
      this.currentcourse = course;
      this.currentIndex = index;
    },

    removeAllcourses() {
      DataService.deleteAllCourses()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchFields() {
      DataService.findByFieldsCourses(data)
        .then(response => {
          this.courses = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievecourses();
  }
};
</script>

<template>
<main>
  <label for="search" class="form-label">Поиск</label>
  <div class="input-group" id="search" style="padding-bottom: 50px;">
    <input type="text" aria-label="Name" class="form-control" v-model="coursename" placeholder="Название дисциплины">
    <input type="text" aria-label="Auditorium" class="form-control" v-model="audit" placeholder="Аудиторные часы">
    <input type="text" aria-label="Selfstudy" class="form-control" v-model="selfstudy" placeholder="Самостоятельные часы">
    <input type="text" aria-label="Credits" class="form-control" v-model="credit" placeholder="Кредиты">
    <button @click="searchCourses" class="btn btn-outline-secondary" type="button" id="buttonsearch">Поиск</button>
</div>
  <div>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item" id="name" style="background-color:lightsteelblue;">Название дисциплины</li>
      <li class="list-group-item" id="auditorium" style="background-color: lightsteelblue;">Аудиторные часы</li>
      <li class="list-group-item" id="selfstudy" style="background-color: lightsteelblue;">Самостоятельные часы</li>
      <li class="list-group-item" id="credits" style="background-color: lightsteelblue;">Кредиты</li>
    </ul>
    <ul class="list-group list-group-horizontal" v-for="item in courses">
      <li class="list-group-item" id="name">{{item.coursename}}</li>
      <li class="list-group-item" id="auditorium">{{item.audit}}</li>
      <li class="list-group-item" id="selfstudy">{{item.selfstudy}}</li>
      <li class="list-group-item" id="credits">{{item.credits}}</li>
    </ul>
  </div>
</main>
</template>

<style scoped>
#name{
  width:500px;
}

#auditorium{
  width:200px;
}

#selfstudy{
  width:250px;
}

#credits{
  width:100px;
}
</style>
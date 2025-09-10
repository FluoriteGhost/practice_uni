import http from "../http-common";

class DataService {
  getAllProfs() {
    return http.get("/profs");
  }
  getAllCourses() {
    return http.get("/courses");
  }
  getAllExtrawork() {
    return http.get("/extrawork");
  }
  getAllKJobtitles() {
    return http.get("/kjobtitle");
  }

  getProf(id) {
    return http.get(`/profs/${id}`);
  }
  getCourses(id) {
    return http.get(`/courses/${id}`);
  }
  getExtrawork(id) {
    return http.get(`/extrawork/${id}`);
  }


  createProf(data) {
    return http.post("/profs", data);
  }
  createCourse(data) {
    return http.post("/courses", data);
  }
  createExtrawork(data) {
    return http.post("/extrawork", data);
  }

  updateProf(id, data) {
    return http.put(`/profs/${id}`, data);
  }
  updateCourses(id, data) {
    return http.put(`/courses/${id}`, data);
  }
  updateExtrawork(id, data) {
    return http.put(`/extrawork/${id}`, data);
  }

  deleteProf(id) {
    return http.delete(`/profs/${id}`);
  }
  deleteCourses(id) {
    return http.delete(`/courses/${id}`);
  }
  deleteExtrawork(id) {
    return http.delete(`/extrawork/${id}`);
  }
  deleteKJobtitle(id) {
    return http.delete(`/kjobtitle/${id}`);
  }

  deleteAllProfs() {
    return http.delete(`/profs`);
  }
  deleteAllCourses() {
    return http.delete(`/courses`);
  }
  deleteAllExtrawork() {
    return http.delete(`/extrawork`);
  }
  deleteAllKJobtitles() {
    return http.delete(`/kjobtitle`);
  }

  findByFieldsProfs(data) {
    return http.get(`/profs?name=${data.name}&rate=${data.rate}&auditorium=${data.audit}&kjobtitle=${data.job}`);
  }
  findByFieldsCourses(data) {
    return http.get(`/courses?coursename=${data.coursename}&audit=${data.audit}&selfstudy=${data.selfstudy}&credits=${data.credits}`);
  }
  findByNameExtrawork(name) {
    return http.get(`/extrawork?extra_work=${name}`);
  }
  findCourseByProf(name) {
    return http.get(`/profcourse?profsID=${name}`);
  }
  findProfByCourse(name) {
    return http.get(`/profcourse?coursesID=${name}`);
  }
  findExtraByProf(name) {
    return http.get(`/profextrawork?profsID=${name}`);
  }
  findProfByExtra(name) {
    return http.get(`/profextrawork?extraworkID=${name}`);
  }
}

export default new DataService();

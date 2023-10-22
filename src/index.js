import { createApp } from "vue";
import axios from "axios";

createApp({
  data() {
    return {
      students: [],
      searchName: "",
      deleteLink: "",
      newStudent: {
        id: "",
        name: "",
        group: "",
        grade: "",
        workDone: false,
      },
    };
  },
  mounted() {
    axios.get("http://34.82.81.113:3000/students").then((response) => {
      console.log(response.data);
      this.students = response.data;
    });
  },
  computed: {
    filteredStudents: function () {
      const searchNameLower = this.searchName.toLowerCase();
      return this.students.map((stud) => ({
        ...stud,
        highlighted:
          stud.name.toLowerCase().includes(searchNameLower) &&
          searchNameLower.length > 0,
      }));
    },
  },
  methods: {
    deleteStudent(id) {
      const index = this.students.findIndex((stud) => stud.id === id);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
    },
    addStudent() {
      newStudent.id = this.students.length + 1;
      this.students.push({ ...newStudent });

      newStudent.name = "";
      newStudent.workDone = false;
      newStudent.group = "";
      newStudent.grade = "";
    },
  },
}).mount("#app");

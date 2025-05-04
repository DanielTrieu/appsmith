export default {
  async postStudentData() {
    try {
      const response = await createStudent.run();
      showAlert("Student created", "success");

      const list = await getStudentList.run();
      return list;
    } catch (err) {
      showAlert("Failed to create student", "error");
    }
  }
}

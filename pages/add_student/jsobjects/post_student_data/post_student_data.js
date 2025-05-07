export default {
  async postStudentData() {
    try {
      await createStudent.run();
      showAlert("Student created", "success");

      await getStudentList.run();
    } catch (err) {
      showAlert("Failed to create student", "error");
    }
  }
}

function giveJobToStudent(student, jobName) {
  const workingStudent = {
    ...student,
    job: jobName,
  };

  console.log(
    `Поздравляем! Теперь у студента ${workingStudent.fullName} появилась работа! Теперь он ${workingStudent.job}`
  );

  return workingStudent;
}

const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log(updatedStudent);

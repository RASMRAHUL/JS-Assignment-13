let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95" },
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
  ];
  
  // Calculate grade based on marks
  function calculateGrade(marks) {
    if (marks > 90) {
      return "A";
    } else if (marks > 80) {
      return "B";
    } else if (marks > 70) {
      return "C";
    } else if (marks > 60) {
      return "D";
    } else if (marks > 50) {
      return "E";
    } else {
      return "F";
    }
  }
  
  // Map grades of each student
  let grades = students.map((student) => {
    let grade = calculateGrade(student.marks);
    return { name: student.name, grade: grade };
  });
  
  // Group students by their grades
  let groupedStudents = {};
  grades.forEach((student) => {
    if (groupedStudents[student.grade]) {
      groupedStudents[student.grade].push(student);
    } else {
      groupedStudents[student.grade] = [student];
    }
  });
  
  // Display the grouped students
  console.log(groupedStudents);
  
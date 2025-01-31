let students = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
  ];
  
  let result = students.map(student => {
    let studentName = Object.keys(student)[0];
    let scores = Object.values(student)[0];
    let average = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.keys(scores).length;
    return { [studentName]: { average: Math.round(average) } };
  });
  
  console.log(result);
  
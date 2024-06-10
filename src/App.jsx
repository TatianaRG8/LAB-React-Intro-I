import "./App.css";

const username = "Api";

const studentsArray = [
  { name: "Marta", grade: 8 },
  { name: "Angelo", grade: 3 },
  { name: "Diana", grade: 4.5 },
  { name: "Toni", grade: 6.5 },
  { name: "Karen", grade: 5 },
  { name: "Ale", grade: 9 },
  { name: "Zindy", grade: 7 },
  { name: "Tatiana", grade: 4 },
];

const showStudents = (arr) => {
  const studentsList = arr.map((student, index) => {
    return <li key={index}>{student.name}</li>;
  });
  return <ul>{studentsList}</ul>;
};

const showTotal = (arr) => {
  const studentsCount = arr.length;
  return studentsCount;
};

const studentsTable = (arr) => {
  let passed = true;
  const studentsList = arr.map((student, index) => {
    if (student.grade < 5) {
      passed = false;
    } else passed = true;
    return (
      <tr key={index}>
        <th className={passed ? "passed" : "failed"}>{student.name}</th>
        <th className={passed ? "passed" : "failed"}>{student.grade}/10</th>
      </tr>
    );
  });
  return (
    <table>
      <caption>Students</caption>
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      {studentsList}
    </table>
  );
};

/*  const passedStudentsTable = (array) => {
    const studentsList = array.map((student, index) => {
      if (student.grade >= 5) {
        return (
          <tr key={index}>
            <th>{student.name}</th>
            <th>{student.grade}/10</th>
          </tr>
        );
      } else return;
    });
    return (
      <table>
        <tr>
          <th>Student</th>
          <th>Grade</th>
        </tr>
        {studentsList}
      </table>
    ); 
  
}; */

function App() {
  return (
    <>
      <div>Welcome, {username}!</div>
      <div>{showStudents(studentsArray)}</div>
      <div>This class has {showTotal(studentsArray)} students.</div>
      <div>{studentsTable(studentsArray)}</div>
      {/* <div>{passedStudentsTable(studentsArray)}</div> */}
    </>
  );
}

export default App;

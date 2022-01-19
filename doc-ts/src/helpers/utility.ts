// ========== part 1 ==========
// Partial

interface Student {
  name: string;
  grade: number;
}

function createStudent(name: string, grade: number): Student {
  const student: Partial<Student> = {};
  student.name = name;
  student.grade = grade;

  return student as Student;
}

// ========== part 2 ==========
// Readonly

const students: Readonly<Array<string>> = [
  'tom',
  'amy',
];

// students.push('lucy'); // wrong
// students[1] = 'lucy'; // wrong

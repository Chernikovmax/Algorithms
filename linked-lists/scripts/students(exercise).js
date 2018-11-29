const lastNameInfo = document.querySelector('[name=last-name]');
const firstNameInfo = document.querySelector('[name=first-name]');
const patronymicInfo = document.querySelector('[name=patronymic]');
const birthdayInfo = document.querySelector('[name=birthday]');
const courseOfStudyInfo = document.querySelector('[name=course-of-study]');
const groupNumInfo = document.querySelector('[name=group-number]');

const englishPoint = document.querySelector('[name=english]');
const geometryAlgebraPoint = document.querySelector('[name=geometry-algebra]');
const mathAnPoint = document.querySelector('[name=math-analysis]');
const physicsPoint = document.querySelector('[name=physics]');
const computerSciencePoint = document.querySelector('[name=computer-science]');

const register = document.querySelector('.register-student');

const students = [];

class SubjectPoints {
  constructor(english, geometryAlgebra, mathAn, physics, computerScience) {
    this.English = english;
    this['Geometry and algebra'] = geometryAlgebra;
    this['Mathematical analysis'] = mathAn;
    this.Physics = physics;
    this['Computer science'] = computerScience;
  }
}

class Student {
  constructor(lastName, firstName, patronymic, birthday,
    courceOfStudy, groupNum) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.patronymic = patronymic;
    this.birthday = birthday;
    this.courceOfStudy = courceOfStudy;
    this.groupNum = groupNum;
    this.subjectsPoints = new SubjectPoints(englishPoint.value,
      geometryAlgebraPoint.value, mathAnPoint.value, physicsPoint.value, computerSciencePoint.value);
  }
}

register.addEventListener('submit', (currentForm) => {
  currentForm.preventDefault();

  const student = new Student(lastNameInfo.value, firstNameInfo.value, patronymicInfo.value,
    birthdayInfo.value, courseOfStudyInfo.value, groupNumInfo.value);
    students.push(student);
    console.table(students[0].subjectsPoints);
});

function toggleModalbox() {
  const modalDialog = document.querySelector('.modalbox-container');
  modalDialog.classList.toggle('modalbox--active')
}





// Дан список студентов. Элемент списка содержит фамилию, имя, отчество, год рождения,
// курс, номер группы, оценки по пяти предметам. Упорядочите студентов по курсу,
// причем студенты одного курса располагались в алфавитном порядке. Найдите средний
// балл каждой группы по каждому предмету. Определите самого старшего студента и самого
// младшего студентов. Для каждой группы найдите лучшего с точки зрения успеваемости
// студента.

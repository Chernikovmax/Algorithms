let lastNameInfo = document.querySelector('.input-info').value;
let firstNameInfo = document.querySelectorAll('.input-info')[1].value;
let patronymicInfo = document.querySelectorAll('.input-info')[2].value;
let birthdayInfo = document.querySelectorAll('.input-info')[3].value;
let courseOfStudyInfo = document.querySelectorAll('.input-info')[4].value;
let groupNumInfo = document.querySelectorAll('.input-info')[5].value;

let englishPoint = document.querySelector('.point').value;
let geometryAlgebraPoint = document.querySelectorAll('.point')[1].value;
let mathAnPoint = document.querySelectorAll('.point')[2].value;
let physicsPoint = document.querySelectorAll('.point')[3].value;
let computerSciencePoint = document.querySelectorAll('.point')[4].value;

const registerBtn = document.querySelector('#submit-btn');

class SubjectPoints {
  constructor(english, geometryAlgebra, mathAn, physics, computerScience) {
    this['English'] = english;
    this['Geometry and algebra'] = geometryAlgebra;
    this['Mathematical analysis'] = mathAn;
    this['Physics'] = physics;
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
    this.subjectsPoints = new SubjectPoints(englishPoint, geometryAlgebraPoint, mathAnPoint, physicsPoint, computerSciencePoint);
  }
}

(function registerStudent() {

  registerBtn.addEventListener('click', () => {
    const student = new Student(lastNameInfo, firstNameInfo, patronymicInfo,
      birthdayInfo, courseOfStudyInfo, groupNumInfo);

    return student;
  });
  return student;
} ());






// Дан список студентов. Элемент списка содержит фамилию, имя, отчество, год рождения,
// курс, номер группы, оценки по пяти предметам. Упорядочите студентов по курсу,
// причем студенты одного курса располагались в алфавитном порядке. Найдите средний
// балл каждой группы по каждому предмету. Определите самого старшего студента и самого
// младшего студентов. Для каждой группы найдите лучшего с точки зрения успеваемости
// студента.

const registerForm = document.querySelector('.register-student');

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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.append(...values);
  }
  _appendItem(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  append(...values) {
    return values.forEach(value => this._appendItem(value));
  }
}

const students = new DoublyLinkedList();

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
    this['Last Name'] = lastName;
    this['First Name'] = firstName;
    this['Patronymic'] = patronymic;
    this.Birthday = birthday;
    this['Cource of Study'] = courceOfStudy;
    this['Group Number'] = groupNum;
    this['Points by Subjects'] = new SubjectPoints(englishPoint.value,
      geometryAlgebraPoint.value, mathAnPoint.value, physicsPoint.value, computerSciencePoint.value);
  }
}

register.addEventListener('submit', (currentForm) => {
  currentForm.preventDefault();

  const student = new Student(lastNameInfo.value, firstNameInfo.value, patronymicInfo.value,
    birthdayInfo.value, courseOfStudyInfo.value, groupNumInfo.value);
    students.append(student);
    console.table(students.head.value);
    registerForm.reset();
});

function toggleModalbox() {
  const modalDialog = document.querySelector('.modalbox-container');
  modalDialog.classList.toggle('modalbox--active')
}

console.log(students);



// Дан список студентов. Элемент списка содержит фамилию, имя, отчество, год рождения,
// курс, номер группы, оценки по пяти предметам. Упорядочите студентов по курсу,
// причем студенты одного курса располагались в алфавитном порядке. Найдите средний
// балл каждой группы по каждому предмету. Определите самого старшего студента и самого
// младшего студентов. Для каждой группы найдите лучшего с точки зрения успеваемости
// студента.

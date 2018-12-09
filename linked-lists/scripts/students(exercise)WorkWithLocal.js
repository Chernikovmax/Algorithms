const register = document.querySelector('.register-student-form');


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(object) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  sortedAdd(object) {
    let node = new Node(object);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }

    let current = this.head;

    while (current) {
      if (current.value.fullName >= object.fullName) {
        if (current.prev === null) {
          node.next = current;
          current.prev = node;
          this.head = node;
          this.length++;
          return this;
        }
        current.prev.next = node;
        node.prev = current.prev;
        node.next = current;
        current.prev = node;
        this.length++;
        return this;
      }

      if (current.next === null) {
        node.prev = current;
        current.next = node;
        this.tail = node;
        this.length++;
        return this;
      }

      current = current.next;
    }
  }
  removeAt(position) {
    if (position === 0) {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (position === this.length - 1) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.length--;
      return this;
    }

    let current = this.head;
    let counter = 1;

    if (position <= (this.length-1 / 2)) {

      while (current) {
        current = current.next;
        if (counter === position) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.length--;
          return this;
        }
        counter++;
      }
    }

    if (position > (this.length-1 / 2)) {
      current = this.tale.prev;
      while (current) {
        current = current.prev;
        if (counter === position) {
          current.next.prev = current.prev;
          current.prev.next = current.next;
          this.length--;
          return this;
        }
        counter++;
      }
    }
  }
}

// Definition of doubly linked lists with students, according to the course
const course1 = new DoublyLinkedList();
const course2 = new DoublyLinkedList();
const course3 = new DoublyLinkedList();
const course4 = new DoublyLinkedList();
const course5 = new DoublyLinkedList();

//Listener of the "Register student" button, which creates an object of the
//new student and adds it to the appropriate course list.

register.addEventListener('submit',
  function(currentForm) {
    currentForm.preventDefault();

        // Variables needed to add a new student to the list
    const lastNameInfo = register.querySelector('[name=last-name]');
    const firstNameInfo = register.querySelector('[name=first-name]');
    const patronymicInfo = register.querySelector('[name=patronymic]');
    const birthdayInfo = register.querySelector('[name=birthday]');
    const course = register.querySelector('[name=course-of-study]');
    const courseOfStudyInfo = course.options[course.selectedIndex].value;
    const groupNumInfo = register.querySelector('[name=group-number]');
        // ...variables to create an object with grades by subject
    const english = register.querySelector('[name=english]');
    const englishPoint = english.options[english.selectedIndex].value;
    const geometryAlgebra = register.querySelector('[name=geometry-algebra]');
    const geometryAlgebraPoint = geometryAlgebra.options[geometryAlgebra.selectedIndex].value;
    const mathAn = register.querySelector('[name=math-analysis]');
    const mathAnPoint = mathAn.options[mathAn.selectedIndex].value;
    const physics = register.querySelector('[name=physics]');
    const physicsPoint = physics.options[physics.selectedIndex].value;
    const computerScience = register.querySelector('[name=computer-science]');
    const computerSciencePoint = computerScience.options[computerScience.selectedIndex].value;

      // Classes for creation of student's object;
    class SubjectPoints {
      constructor(english, geometryAlgebra, mathAn, physics, computerScience) {
        this.english = english;
        this.geometryAndAlgebra = geometryAlgebra;
        this.mathAn = mathAn;
        this.physics = physics;
        this.computerScience = computerScience;
      }
    }

    class Student {
      constructor(lastName, firstName, patronymic, birthday,
        courceOfStudy, groupNum) {
        this.fullName = `${lastName} ${firstName} ${patronymic}`;
        this.birthday = birthday;
        this.courceOfStudy = courceOfStudy;
        this.groupNumber = groupNum;
        this.pointsBySubjects = new SubjectPoints(englishPoint,
          geometryAlgebraPoint, mathAnPoint, physicsPoint, computerSciencePoint);
      }
    }

        // direct creation of the object of current student
    const student = new Student(lastNameInfo.value, firstNameInfo.value, patronymicInfo.value,
      birthdayInfo.value, courseOfStudyInfo, groupNumInfo.value);

    switch (courseOfStudyInfo) {
      case "1":
        course1.sortedAdd(student);
        break;
      case "2":
        course2.sortedAdd(student);
        break;
      case "3":
        course3.sortedAdd(student);
        break;
      case "4":
        course4.sortedAdd(student);
        break;
      case "5":
        course5.sortedAdd(student);
        break;
    }

    register.reset();
});

function listToArr(obj) {
  const currentStudents = [];
  let current = obj.head;
  while (current) {
    currentStudents.push(JSON.stringify(current.value));
    current = current.next;
  }
  const result = currentStudents.join('; ');
  switch (obj.head.value.courceOfStudy) {
    case "1":
      return localStorage.setItem("Students-of-the-1-Course", JSON.stringify(result));
    case "2":
      return localStorage.setItem("Students-of-the-2-Course", JSON.stringify(result));
    case "3":
      return localStorage.setItem("Students-of-the-3-Course", JSON.stringify(result));
    case "4":
      return localStorage.setItem("Students-of-the-4-Course", JSON.stringify(result));
    case "5":
      return localStorage.setItem("Students-of-the-5-Course", JSON.stringify(result));
  }
}

// How to get an object from localStore
// JSON.parse(JSON.parse(localStorage.getItem("Students-of-the-2-Course")).split(";")[0])


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

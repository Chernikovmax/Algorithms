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
    if (position === 0 && this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    if (position === 0 && this.length > 1) {
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


    // Code to work with server
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

const modalbox = document.querySelector('.modalbox');

const selectList = modalbox.querySelector('[name=open-a-course-list]');
const table = modalbox.querySelector('.table__body');


function clearTable() {
  const tBody = table.querySelectorAll('tr');
  for (i = 0; i < tBody.length; i++) {
    table.removeChild(tBody[i]);
  }
}

function displayCourseList() {

  const selectedListNum = selectList.options[selectList.selectedIndex].value;
  switch (selectedListNum) {
    case "1":
      clearTable()
      return printInfo(course1);
    case "2":
      clearTable()
      return printInfo(course2);
    case "3":
      clearTable()
      return printInfo(course3);
    case "4":
      clearTable()
      return printInfo(course4);
    case "5":
      clearTable()
      return printInfo(course5);
  }
}

function toggleModalbox() {
  const modalDialog = document.querySelector('.modalbox-container');
  modalDialog.classList.toggle('modalbox--active')
}

function clearAndCloseModal() {
  clearTable();
  selectList.options[0].selected = true;
  toggleModalbox()
}


function printInfo(linkedList) {

  let current = linkedList.head;
  let counter = 1;
  while(current) {
    let newRow = table.appendChild(document.createElement('tr'));

    let newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";;
    let deleteStudentBtn = document.createElement('button');
    deleteStudentBtn.className = "cross2";
    deleteStudentBtn.id = `${counter}`;
    deleteStudentBtn.addEventListener('click', () => {
      const selectedListNum = selectList.options[selectList.selectedIndex].value;
      switch (selectedListNum) {
        case "1":
          course1.removeAt(deleteStudentBtn.id - 1);
          return displayCourseList();
        case "2":
          course2.removeAt(deleteStudentBtn.id - 1);
          return displayCourseList();
        case "3":
          course3.removeAt(deleteStudentBtn.id - 1);
          return displayCourseList();
        case "4":
          course4.removeAt(deleteStudentBtn.id - 1);
          return displayCourseList();
        case "5":
          course5.removeAt(deleteStudentBtn.id - 1);
          return displayCourseList();
      }
    });
    deleteStudentBtn.innerText = "+";
    newCell.innerHTML = `${counter}`;
    newCell.appendChild(deleteStudentBtn);

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.fullName}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.birthday}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.groupNumber}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.english}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.geometryAndAlgebra}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.mathAn}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.physics}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.computerScience}`;

    current = current.next;
    counter++;
  }
}

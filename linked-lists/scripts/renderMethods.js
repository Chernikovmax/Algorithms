const register = document.querySelector('.register-student-form');
const modalbox = document.querySelector('.modalbox');
const selectList = modalbox.querySelector('[name=open-a-course-list]');
const table = modalbox.querySelector('.table__body');
const coursesLength = 5;

// Definition of doubly linked lists with students, according to the course
const courseMap = {};

for(let i = 1; i <= coursesLength; i++){
  courseMap[i] = new DoublyLinkedList();
}

//Listener of the "Register student" button, which creates an object of the
//new student and adds it to the appropriate course list.

register.addEventListener('submit',
  function(currentForm) {
    currentForm.preventDefault();

    const course = register.querySelector('[name=course-of-study]');
    const english = register.querySelector('[name=english]');
    const geometryAlgebra = register.querySelector('[name=geometry-algebra]');
    const mathAn = register.querySelector('[name=math-analysis]');
    const physics = register.querySelector('[name=physics]');
    const computerScience = register.querySelector('[name=computer-science]');

    const values = {
      lastName: register.querySelector('[name=last-name]').value,
      firstName: register.querySelector('[name=first-name]').value,
      patronymic: register.querySelector('[name=patronymic]').value,
      birthday: register.querySelector('[name=birthday]').value,
      course,
      courseOfStudy: course.options[course.selectedIndex].value,
      groupNum: register.querySelector('[name=group-number]').value,
    }

    const points = {
      englishPoint: english.options[english.selectedIndex].value,
      geometryAlgebraPoint: geometryAlgebra.options[geometryAlgebra.selectedIndex].value,
      mathAnPoint: mathAn.options[mathAn.selectedIndex].value,
      physicsPoint: physics.options[physics.selectedIndex].value,
      computerSciencePoint: computerScience.options[computerScience.selectedIndex].value,
    }

    const student = new Student(values, points);
    const courseList = courseMap[values.courseOfStudy];

    courseList.sortedAdd(student)
    // Code to work with server

    register.reset();
  });

function showSelectCourse(courseNumber) {
  clearTable();
  renderStudentsTable(courseMap[courseNumber]);
}

function toggleModalbox() {
  const modalDialog = document.querySelector('.modalbox-container');
  modalDialog.classList.toggle('modalbox--active')
}

function clearAndCloseModal() {
  selectList.options[0].selected = true;
  clearTable();
  toggleModalbox()
}

// modal table
function renderStudentsTable(linkedList) {
  let current = linkedList.head;
  let counter = 1;
  while(current) {
    let newRow = table.appendChild(document.createElement('tr'));

    let newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    let deleteStudentBtn = document.createElement('button');
    deleteStudentBtn.id = `${counter}`;
    deleteStudentBtn.addEventListener('click', () => {
      const selectedCourseNumber = getSelectedCourse();
      const selectedCourse = courseMap[selectedCourseNumber];
      selectedCourse.removeAt(deleteStudentBtn.id - 1);
      showSelectCourse(selectedCourseNumber);
    });
    deleteStudentBtn.innerText = "x";
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
    newCell.innerHTML = `${current.value.pointsBySubjects.englishPoint}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.geometryAlgebraPoint}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.mathAnPoint}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.physicsPoint}`;

    newCell = newRow.appendChild(document.createElement('td'));
    newCell.className = "table__cell";
    newCell.innerHTML = `${current.value.pointsBySubjects.computerSciencePoint}`;

    current = current.next;
    counter++;
  }
}

function getSelectedCourse() {
  return selectList.options[selectList.selectedIndex].value;
}

function onCourseChanged() {
  const selectedListNum = getSelectedCourse();
  showSelectCourse(selectedListNum);
}

function clearTable() {
  const tableRow = table.querySelectorAll('tr');
  for (let i = 0; i < tableRow.length; i++) {
    table.removeChild(tableRow[i]);
  }
}

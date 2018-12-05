const register = document.querySelector('.register-student');

register.addEventListener('submit',
  function(currentForm) {
    currentForm.preventDefault();

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
        this.pointsBySubjects = new SubjectPoints(englishPoint.value,
          geometryAlgebraPoint.value, mathAnPoint.value, physicsPoint.value, computerSciencePoint.value);
      }
    }

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
        this.sortedAdd(object);
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
    }

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

    const student = new Student(lastNameInfo.value, firstNameInfo.value, patronymicInfo.value,
      birthdayInfo.value, courseOfStudyInfo.value, groupNumInfo.value);

    students.append(student);
    localStorage.setItem('list-of-students', JSON.stringify(students));
    console.table(students.head.value);
    registerForm.reset();

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

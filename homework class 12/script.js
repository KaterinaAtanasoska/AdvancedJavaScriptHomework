function People(firstName, lastName, age ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        console.log(`${firstName} ${lastName} is ${age} years old.`)
    };
};

const person = new People("John", "Doe", 25);
person.getFullName();



function Student (firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new People(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function() {
        console.log(`The student ${firstName} is studying in the ${academyName}`);
    };
    this.checkAcademy = function() {
        console.log(`Student ${this.firstName} is in ${this.academyName} academy`);
    };
};

const student1 = new Student("Katerina", "Atanasoska", "22", "SEDC", "13665");
console.log(student1);
student1.study();
const student2 = new Student("John", "Doe", "25", "SEDC", "13565");
console.log(student2);
student2.study();
student1.checkAcademy();

function DesignStudent (firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = function() {
        console.log(`Student ${this.firstName} is doing an adobe exam!`);
    };
};

function CodeStudent (firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;

    this.doProject = function(type) {
        if(type === "individual") {
            this.hasIndividualProject = true;
        } else if( type === "group") {
            this.hasGroupProject = true;
        };
    };
};

function NetworkStudent(firstName, lastName, age, academyName, studentID, academyPart){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentID))
    this.academyPart = academyPart;

    this.attendCiscoExam = function() {
        console.log(`The student ${this.firstName} is doing a cisco exam!`)
    }
}

let studentDesign = new DesignStudent("Emma", "Smith", 25, "DesignAcademy", 1354, false)
console.log(studentDesign);
studentDesign.attendAdobeExam();
studentDesign.checkAcademy();

let studentCode = new CodeStudent("Olivia", "Brown", 25, "CodeAcademy", 1326);
console.log(studentCode);
studentCode.doProject("group");
studentCode.checkAcademy();

let studentNetwork = new NetworkStudent("William", "Miler", 25, "NetworkAcademy", 1355, 1);
console.log(studentNetwork);
studentNetwork.attendCiscoExam();
studentNetwork.checkAcademy();
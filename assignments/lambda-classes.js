class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        {
        this.speak = function () {
            console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
        }
        };
    }
}
        class Instructor extends Person {
            constructor(attributes) {
                super(attributes);
                this.specialty = attributes.specialty;
                this.favLanguage = attributes.favLanguage;
                this.catchPhrase = attributes.catchPhrase;
            }

            // demo = function(subject) {
            //     console.log(`Today we are learning about ${subject}`);
            // };
            // grade = function(student, subject){
            //     console.log(`${student.name} receives a perfect score on ${subject}`);
            // };
        }

        class Student extends Person {
            constructor(attributes) {
                super(attributes);
                this.previousBackground = attributes.previousBackground;
                this.className = attributes.className;
                this.favSubjects = attributes.favSubjects;
            }

            listSubjects() {
                this.favSubjects.forEach(function (item, index, array) {
                    console.log(index + 1, item);
                });
            };
            PRAssignment(subject) {
                console.log(`${this.name} has submitted a PR for ${subject}`);
            };
            sprintChallenge(subject) {
                console.log(`${this.name} has begun sprint challenge on ${subject}`);
            };
        }

        class ProjectManager extends Instructor {
            constructor(attributes) {
                super(attributes);
                this.gradClassName = attributes.gradClassName;
                this.favInstructor = attributes.favInstructor;
            }
        }

        standUp = function (channel) {
            console.log(`${this.name} announces to ${channel}, @channel standby times!`);
        };
        debugsCode = function (student, subject) {
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }

    const raajn = new Student ({
    name: "Raajn",
    location: "Irvine, CA",
    age: 26,
    previousBackground: "Hospitality",
    className: "Web 22",
    favSubjects: ["CS", "Math", "Physics"],
});

raajn.speak();
raajn.listSubjects();
raajn.PRAssignment("Javascript");
raajn.sprintChallenge("Functions");





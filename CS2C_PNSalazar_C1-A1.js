//Define a class to store student information.
class Student {
    constructor(first_name, middle_name, last_name, birthdate, birthplace, address, course, year, dream_job) {
      this.first_name = first_name;
      this.middle_name = middle_name;
      this.last_name = last_name;
      this.birthdate = birthdate;
      this.birthplace = birthplace;
      this.address = address;
      this.course = course;
      this.year = year;
      this.dream_job = dream_job;
    }
  
    toString() {
      return `${this.first_name} ${this.middle_name} ${this.last_name} was born on ${this.birthdate} at ${this.birthplace}, and currently living at ${this.address}. ${this.first_name} ${this.middle_name} ${this.last_name} is taking up ${this.course} ${this.year} and dreams to become a ${this.dream_job} after graduation.`;
    }
  }
  
  //Create instances of Student class for each persona.
  let student1 = new Student("Princess Nicole", "Garabilez", "Salazar", "March 31, 2002", "Paras, Candon City, Ilocos Sur, Phillippines, 2710", "Poblacion Norte, Salcedo, Ilocos Sur, Philippines, 2711", "Bachelor of Science in Computer Science", "2nd Year", "Software Engineer");
  let student2 = new Student("Joshua", "Morales", "Toquero", "September 25, 2005", " Dela Paz Norte, San Fernando City, Pampanga, Philippines, 2000", "Patpata, Candon City, Ilocos Sur, Philippines, 2710", "Bachelor of Science in Computer Science", "2nd Year", "Game Developer");
  let student3 = new Student("Rolly Mae", "Morales", "Caay", "April 11, 2005", "Barangobong, Santa Lucia, Ilocos Sur, Philippines, 2712", "Paras, Candon City, Ilocos Sur, Philippines, 2710", "Bachelor of Science in Computer Science", "2nd Year", "Computer Engineer");
  
  //Print the information of each student.
  console.log(student1.toString());
  console.log(student2.toString());
  console.log(student3.toString());
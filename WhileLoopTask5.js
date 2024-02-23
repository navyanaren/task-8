function enrollStudents() {
    const maxCapacity = 50;
    let current_Enrollment = 0;
  
    while (current_Enrollment < maxCapacity) {
      const studentDetails = prompt(`Enter your name, email, and any other relevant information. (e.g. Name: demo, Email: demo@example.com)  Note: Enrollment is limited to ${maxCapacity} students.`);
  
      if (studentDetails === null) {
        break;
      }
  
      console.log(`Enrolled ${studentDetails}`);
  
      current_Enrollment++;
  
      if (current_Enrollment === maxCapacity) {
        console.log(`Enrollment is now closed. The course has reached its maximum capacity of ${maxCapacity} students.`);
      }
    }
  }

  enrollStudents();
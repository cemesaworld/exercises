const express = require('express');
const app = express();

// Refactor the code to use async/await functions

async function main() { //using await or async function
  const student = await getStudentPromise(1);
  console.log('Student: ', student);
  if (student.isEnrolled) {
    const courses = await getCourseListPromise();
    console.log('Course List: ', courses);
    await sendNotificationPromise(student.email, courses);
    console.log('Notification sent...');
  }
}

function getStudentPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        isEnrolled: true,
        email: 'john.doe@example.com',
      });
    }, 4000);
  });
}

function getCourseListPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['course1', 'course2']);
    }, 4000);
  });
}

function sendNotificationPromise(email, courses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}...`)
);

main();

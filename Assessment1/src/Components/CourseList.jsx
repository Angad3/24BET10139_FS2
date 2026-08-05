import { useEffect } from "react";
import StudentProfileProps from "./StudentProfileProps";
import StudentProfileContext from "./StudentProfileContext";

function CourseList({ user, enrolledCount, setEnrolledCount }) {
  const courses = [
    { id: 1, name: "React Basics", price: 999 },
    { id: 2, name: "Node.js Essentials", price: 1199 },
    { id: 3, name: "UI/UX Design", price: 799 },
  ];

  useEffect(() => {
    console.log(
      `Enrollment updated. Total courses: ${enrolledCount}`
    );
  }, [enrolledCount]);

  const enroll = () => {
    setEnrolledCount((prev) => prev + 1);
  };

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h4>{course.name}</h4>
          <p>₹{course.price}</p>

          <button onClick={enroll}>
            Enroll
          </button>

          <hr />
        </div>
      ))}

      <h2>Using Prop Drilling</h2>
      <StudentProfileProps user={user} />

      <hr />

      <h2>Using Context API</h2>
      <StudentProfileContext />
    </>
  );
}

export default CourseList;
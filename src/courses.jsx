import { useState } from "react";
import './style.css';
import CommonTitles from './components/common_titles';
import CommonCourses from './components/common_courses_card';
import CoursesPopModel from "./components/courses_pop_model";  // note 'Model'

function Courses() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <CommonTitles
        titles="Courses"
        description="Not just any programs, we provide an excellent teaching and learning experience to prepare you for your career."
      />

      <button
        onClick={() => setShowModal(true)}
        style={{ margin: '20px', padding: '10px 15px', fontSize: '16px' }}
      >
        Show Alert
      </button>

      <div className="courses-container">
        <CommonCourses
          imageUrl="https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"
          title="B.Sc.CSIT"
          description="hhh"
          year="2"
          semester="2"
        />
        <CommonCourses
          imageUrl="https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"
          title="BBA"
          description="hhh"
          year="2"
          semester="2"
        />
        <CommonCourses
          imageUrl="https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"
          title="MBA"
          description="hhh"
          year="2"
          semester="2"
        />
      </div>

      {showModal && <CoursesPopModel onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default Courses;

import "../style.css";

function CoursesPopModel({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-button" onClick={onClose}>X</button>
        <h2 className="modal-title">Alert!!!</h2>
        <div className="modal-content">
          Hello, this is the example of a pop-up modal.
        </div>
      </div>
    </div>
  );
}

export default CoursesPopModel;

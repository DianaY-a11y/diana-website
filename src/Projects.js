import React from "react";
import "./styles/Projects.css";

function Projects() {
  return (
    <div className="Main">
      <div
        className="Container"
        onClick={() => window.open("https://dianayue-todo.netlify.app/")}
      >
        Todo-App
        <div className="Content">
          <div className="Image">
            <div className="TodoImage" />
          </div>
          <div className="Description">
            This is a todo-app made with javascript and React.js. It has
            rudimentary tasks of a todo-app which includes adding a function,
            editing a function, and deleting a function.
          </div>
        </div>
      </div>
      <div className="Container"></div>
      <div className="Container"></div>
    </div>
  );
}

export default Projects;

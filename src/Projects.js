import React from "react";
import "./styles/Projects.css";

function Projects() {
  return (
    <div className="Main">
      <div
        className="Container"
        onClick={() =>
          window.open("https://github.com/DianaY-a11y/flask-interactive-button")
        }
      >
        Button
        <div className="Content">
          <div className="Image">
            <div className="ButtonImage" />
          </div>
          <div className="Description">
            Button is a python Program where users can send SMS mesages to phone
            numbers using Twilio and browse past messaging history. Click on
            this container to view my github.
          </div>
        </div>
      </div>
      <div
        className="Container"
        onClick={() => window.open("https://dianayue-todo.netlify.app/")}
      >
        Todo-App
        <div className="Content">
          <div className="Image">
            <div className="TodoImage" box-shadow="0.5px" />
          </div>
          <div className="Description">
            This is a todo-app made with javascript and React.js. It has
            rudimentary tasks of a todo-app which includes adding a function,
            editing a function, and deleting a function. Click on this container
            to view the app.
          </div>
        </div>
      </div>
      <div className="Container">This website!</div>
    </div>
  );
}

export default Projects;

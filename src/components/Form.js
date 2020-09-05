import React, { useState } from "react";
// import InterviewerList from "components/InterviewerList";
import Button from "./Button";
import MovieList from './MovieList';

export default function (props) {
  const [name, setName] = useState(props.value);
  // const [movie, setMovie] = useState(props.name || null);
  const [error, setError] = useState("");

  console.log('propsForm:', props);

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
  }

  // const reset = function () {
  //   setInterviewer(null);
  //   setName("");
  // }

  // const cancel = () => {
  //   props.onCancel();
  //   reset();
  // }

  // function validate() {
  //   if (name === "") {
  //     setError("Student name cannot be blank");
  //     return;
  //   }
  //   if (interviewer === null) {
  //     setError("Must select an interviewer");
  //     return;
  //   }
  //   props.onSave(name, interviewer);
  // }

  // const save = () => {
  //   validate()
  // }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter movie title"
            value={props.value}
            onChange={props.onChange}
            data-testid="student-name-input"
          />
          {/* {<MovieList
            userSearch={name}
          />} */}
          {/* <section className="appointment__validation">{error}</section> */}
          {/* <InterviewerList
            interviewers={props.interviewers}
            interviewer={interviewer}
            onChange={setInterviewer}
          /> */}
        </form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={props.onSubmit} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
};
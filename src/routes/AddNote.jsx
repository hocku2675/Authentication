import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";
import NoteLayout from "../components/NoteLayout";

const AddNote = () => {
  const navigate = useNavigate();
  const userContext = useUserContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const addNote = () => {
    const createdNote = fetch(
      `http://localhost:5000/users?email=${userContext.user.email}`
    )
      .then((r) => r.json())
      .then((user) => user[0].id)
      .then((userId) =>
        fetch(`http://localhost:5000/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId.toString(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
          }),
        }).catch((e) => alert(e))
      )
      .then(() => navigate(-1));
  };

  const backToPrevRoute = () => {
    navigate(-1);
  };

  return (
    <NoteLayout
      backBtnFunction={backToPrevRoute}
      title={title}
      handleTitle={handleTitle}
      body={body}
      handleBody={handleBody}
      postBtnFunction={addNote}
      postBtnContent={"Create"}
    />
  );
};

export default AddNote;

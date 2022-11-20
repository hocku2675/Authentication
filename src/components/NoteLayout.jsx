import React from "react";

const NoteLayout = ({
  backBtnFunction,
  handleTitle,
  title,
  handleBody,
  body,
  postBtnFunction,
  postBtnContent,
}) => {
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] py-10">
      <button className="w-32 mx-3 my-20 bg-gray-200" onClick={backBtnFunction}>
        Back
      </button>
      <h1 className="flex flex-col text-5xl justify-center my-20 text-center  font-medium">
        {postBtnContent} note
      </h1>
      <input
        className=" px-4 py-1 bg-gray-200 col-start-2 my-2
        "
        placeholder="Name"
        onChange={handleTitle}
        value={title}
      />
      <input
        style={{ resize: "none" }}
        className="px-4 py-8 bg-gray-200 col-start-2 my-2 "
        placeholder="Note text"
        onChange={handleBody}
        value={body}
      />
      <button
        className="text-center mx-auto w-24  py-1 bg-gray-200 col-start-2 my-2"
        onClick={postBtnFunction}
      >
        Save
      </button>
    </div>
  );
};

export default NoteLayout;

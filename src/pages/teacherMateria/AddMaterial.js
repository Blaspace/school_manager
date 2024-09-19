/** @format */

import React, { useContext, useState } from "react";
import TeacherContext from "../../context/TeacherContext";
import Loading from "../../components/Loading";

function AddMaterial({ upload, setUpload }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pdfE, setPdfE] = useState();
  const { setMaterial, material } = useContext(TeacherContext);
  const handleUpload = () => {
    if (file){
      setUpload(null);
      setLoading(true);
      const formData = new FormData();
      formData.append("logo", file[0]);
      formData.append("description", description);
      formData.append("title", title);

      fetch(`${process.env.REACT_APP_APIURL}/teacher/material`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => setMaterial([...material, data]))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  };
  const handleChange = (e) => {

    const formfile = e.target.files;
    console.log(formfile[0].type);
    if (formfile[0].type === "application/pdf") {
      setFile(formfile);
      setPdfE(null)
    } else {
      setPdfE("We only accept PDF format at this time");
      setFile(null)
    }
  };
  return (
    <>
            <Loading loading={loading} />
      {upload && (
        <div className="popup-con">
          <div className="add-material">
            <br />
            <h3>Add your course material in docs, PDF, docx format</h3>
            <br />
            <button
              className="btn"
              style={{ position: "relative", width: "50%", borderRadius: "0" }}
            >
              <input
                type="file"
                accept="document"
                style={{
                  position: "absolute",
                  width: "100%",
                  opacity: "0",
                  height: "100%",
                }}
                onChange={(e) => handleChange(e)}
              />
              Select file
            </button>
            <span style={{ color: "red" }}>{pdfE}</span>
            <p>{file && file[0]?.name}</p>
            <br />
            <input
              type="text"
              placeholder="Material title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <textarea
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn" onClick={handleUpload}>
                Upload
              </button>
              <button className="btn2" onClick={() => setUpload(false)}>
                Cancil
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddMaterial;

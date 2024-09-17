/** @format */

import React, { useContext, useState } from "react";
import { GrDocumentDownload, GrDocumentUpload } from "react-icons/gr";
import { IoDocumentsOutline } from "react-icons/io5";
import AddMaterial from "./AddMaterial";
import TeacherContext from "../../context/TeacherContext";

function AllMaterials() {
  const [upload, setUpload] = useState(false);
  const {material} = useContext(TeacherContext)

  return (
    <div className="material-con">
      <AddMaterial upload={upload} setUpload={setUpload} />
      <div className="material">
        <div className="new-material" onClick={() => setUpload(true)}>
          <span>
            <GrDocumentUpload size={60} />
            <p>Add material</p>
          </span>
        </div>
        {material?.map((value) => {
          
          return (
            <div className="material-single">
              <p>
                <b>{value.title}</b>
              </p>
              <p>{value.description.slice(0, 50)}</p>
              <a href={value.file} download={value.title} style={{
                color:"#2d88d4",
                textDecoration: 'none'
              }}>
              <button
                className="btn"
                style={{ height: "30px", width: "70px", padding: 0 }}
              >
                Download
              </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllMaterials;

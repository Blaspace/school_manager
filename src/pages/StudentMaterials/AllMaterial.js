/** @format */

import React, { useContext} from "react";
import StudentContext from "../../context/StudentContext";

function AllMaterials() {
  const {material} = useContext(StudentContext)

  return (
    <div className="material-con">
      <div className="material">
        {material?.map((value) => {
          
          return (
            <div className="material-single">
              <p>
                <b>{value.title}</b>
              </p>
              <small>from: <b>{value.teacherName}</b></small>
              <p>{value.description.slice(0, 50)}</p>
              <a href={`${process.env.REACT_APP_APIURL}/download/${value.file.slice(7,1000000)}`} download={value.title} style={{
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

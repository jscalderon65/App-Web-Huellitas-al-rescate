import React from "react";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { Image, Button, Popconfirm, Tooltip } from "antd";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { deleteCourse } from "./FirebaseFunctions/AddCourse";
import { Link } from "react-router-dom";
import { DeleteOutlined, FolderAddOutlined } from "@ant-design/icons";
import EditCourseModal from "./EditCourseModal";
const CourseCard = ({ titulo, img, id, imgName, clases, descripcion }) => {
  const db = firebase.firestore();
  const refColl = db.collection(id);
  const [Data] = useOnSnapshotCollection(refColl);
  return (
    <div
      className="animate__animated animate__fadeIn courses-dashboard-card"
      style={{ background: "white" }}
    >
      <div style={{ alignSelf: "center" }}>
        <Image
          className="animate__animated animate__fadeIn courses-dashboard-card-img"
          src={img}
          alt={titulo}
        />
      </div>
      <div className="courses-dashboard-card-title">
        <Tooltip placement="top" title={titulo}>
          <h3>
            {titulo
              ? titulo.length >= 20
                ? `${titulo.substr(0, 20)} ....`
                : titulo
              : null}
          </h3>
        </Tooltip>
      </div>
      <div className="courses-dashboard-card-actions">
        {Data && (
          <>
            <Popconfirm
              title={"¿Deseas eliminar de forma permanente este curso?"}
              onConfirm={() => deleteCourse(id, Data, imgName)}
              okText="Si"
              cancelText="No"
            >
              <Button size="large" type="primary" danger>
                <DeleteOutlined />
                Eliminar
              </Button>
            </Popconfirm>
            <Tooltip placement="top" title={"Configuración de clases"}>
              <Link to={`/dashboard/cursos/${id}`}>
                <Button className="button-add" size="large">
                  <FolderAddOutlined />({clases.length})
                </Button>
              </Link>
            </Tooltip>
            <EditCourseModal
              Data={{ titulo, img, id, imgName, clases, descripcion }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

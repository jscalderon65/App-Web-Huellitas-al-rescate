import React from "react";
import { useFirebaseUser } from "my-customhook-collection";
import { Card, Button, Image } from "antd";
import { googleAuth, logout } from "../../Firebase/FirebaseAuth";
const Login = ({ firebase }) => {
  const { Meta } = Card;
  const [UserInfo] = useFirebaseUser(firebase);
  return (
    <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
      {UserInfo ? (
        <Card
          style={{ width: "400px", marginTop: 16 }}
          actions={[
            <Button onClick={()=>logout(firebase)} danger>
              Salir
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Image style={{ borderRadius: "100%" }} src={UserInfo.photoURL} />
            }
            title={UserInfo.displayName}
            description={UserInfo.email}
          />
        </Card>
      ) : (
        <Button onClick={()=>googleAuth(firebase)}>Entrar con Google</Button>
      )}
    </div>
  );
};

export default Login;

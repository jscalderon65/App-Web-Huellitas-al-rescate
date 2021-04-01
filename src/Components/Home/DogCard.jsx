import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Image, Typography, Divider, Carousel } from "antd";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((
) => ({
  root: {
    flexGrow: 1,
  },
}));
const DogCard = ({
  src,
  name,
  ExternalDescription,
  InternalDescription,
  galeryArray
}) => {
  const { Title } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className="dog-card izquierda" >
      <div className="dog-card-image">
        <Image
          style={{ borderRadius: "100%", width: "250px", height: "250px" }}
          src={src}
          alt="picsum"
        />
      </div>
      <br />
      <div className="dog-card-content">
        <Divider style={{ borderColor: "#423834" }} dashed>
          <Title style={{ color: "#423834" }}>{name}</Title>
        </Divider>
        <br />
        <div style={{ textAlign: "center" }}>
          <p style={{ textAlign: "center", margin: "auto" }}>
            <b>{ExternalDescription}</b>
          </p>
          <br />
          <Button
            id="profile-buttons"
            style={{ width: "40%" }}
            size="large "
            onClick={showModal}
          >
            Ver más
            </Button>
          <div>
            <Modal
              centered
              title={null}
              footer={null}
              closable={false}
              onCancel={showModal}
              visible={isModalVisible}
              width="80vw"
              style={{borderRadius:"50%"}}
            >
              <div className={useStyles.root}>
                <Grid container spacing={2} justify="center" alignItems="center" back style={{ borderRadius: "20px" }}>
                  <Grid item xs={12} md={4}>
                    <Carousel autoplay style={{ width: "100%" }}>
                      <div >
                        <Image
                          preview={false}
                          style={{
                            borderRadius: "20px", width: "100%", height: "auto",
                            alignItems: "center",
                            color: "#fff",
                            lineHeight: "160px",
                          }}
                          src={galeryArray[0]}
                          alt="picsum"
                        />
                      </div>
                      <div>
                        <Image
                          preview={false}
                          style={{
                            borderRadius: "20px", width: "100%", height: "auto",
                            color: "#fff",
                            lineHeight: "160px",
                          }}
                          src={galeryArray[1]}
                          alt="picsum"
                        />
                      </div>
                    </Carousel>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <p>{InternalDescription}</p>
                  </Grid>
                </Grid>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
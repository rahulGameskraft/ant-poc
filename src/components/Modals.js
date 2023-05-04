import { Button, Modal, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import SuccessModal from "./common/SuccessModal";
import DangerModal from "./common/DangerModal";

const AntModal = (props) => {

    return (
        <>
            {/* <div style={{marginTop:90, marginLeft:'6vw', background:'#fff', width:'26vw'}}>
                <Row style={{paddingTop:'2vh', paddingBottom:'2vh', paddingLeft:'3vw', paddingRight:'3vw'}}> */}
                    <SuccessModal />
                    <DangerModal />
                {/* </Row>
            </div> */}
        </>
    );


}

export default AntModal;
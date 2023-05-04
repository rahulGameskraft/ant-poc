import { Button, Modal, Row, Col } from "antd";
import { CheckCircleOutlined, CloseCircleFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const DangerModal = (props) => {

    const [openSimple, setOpenSimple] = useState(false) ;
    const [openCentered, setOpenCentered] = useState(false) ;

    return (
        <>
            <div style={{marginTop:20, marginLeft:'6vw', background:'#fff', width:'26vw'}}>
                <Row style={{paddingTop:'2vh', paddingBottom:'2vh', paddingLeft:'3vw', paddingRight:'3vw'}}>
                    <Button onClick={(e)=>{setOpenSimple(true)}}>Danger Modal</Button> 
                    <Button style={{marginLeft:10}} onClick={(e)=>{setOpenCentered(true)}}>Danger Centered Modal</Button>
                </Row>
            </div>

            <Modal open={openSimple} width={'22vw'} onCancel={()=>{setOpenSimple(false)}} footer={null} style={{borderTop:"2px solid #ff4d4f", borderTopLeftRadius:2, borderTopRightRadius:2}}>
                <div>
                    <br />
                    <Row justify={'center'}>
                        <Col  style={{font:30}}><CloseCircleFilled style={{fontSize:'32px', color:'#ff4d4f'}}/></Col>
                    </Row>
                    <Row style={{marginTop:5}} justify={'center'}><span style={{display:'flex', justifyContent:"center !important", fontSize:17,fontWeight:500 }}>Payment Failed</span></Row>
                    <br />
                    <Row style={{color:'rgb(97,104,118)',}}>
                        <div style={{textAlign:'center'}}>
                            Your payment of $290 was not successful. Please Contact support@antd.io or retry payment
                        </div>
                    </Row>
                    <br />
                    <Row justify={'space-between'}>
                        <Col><Button>Get More Info</Button></Col>
                        <Col><Button danger>Retry</Button></Col>
                    </Row>
                </div>
            </Modal>
            <Modal centered open={openCentered} width={'22vw'} onCancel={()=>{setOpenCentered(false)}} footer={null} style={{borderTop:"2px solid #ff4d4f", borderTopLeftRadius:2, borderTopRightRadius:2}}>
                <div>
                    <br />
                    <Row justify={'center'}>
                        <Col  style={{font:30}}><CloseCircleFilled style={{fontSize:'32px', color:'#ff4d4f'}}/></Col>
                    </Row>
                    <Row style={{marginTop:5}} justify={'center'}><span style={{display:'flex', justifyContent:"center !important", fontSize:17,fontWeight:500 }}>Payment Failed</span></Row>
                    <br />
                    <Row style={{color:'rgb(97,104,118)',}}>
                        <div style={{textAlign:'center'}}>
                            Your payment of $290 was not successful. Please Contact support@antd.io or retry payment
                        </div>
                    </Row>
                    <br />
                    <Row justify={'space-between'}>
                        <Col><Button>Get More Info</Button></Col>
                        <Col><Button danger>Retry</Button></Col>
                    </Row>
                </div>
            </Modal>
        </>
    );


}

export default DangerModal;
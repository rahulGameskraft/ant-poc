import { Button, Modal, Row, Col, Space } from "antd";
import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const SuccessModal = (props) => {

    const [openSimple, setOpenSimple] = useState(false) ;
    const [openCentered, setOpenCentered] = useState(false) ;

    return (
        <>
            <div style={{marginTop:90, marginLeft:'6vw', background:'#fff', width:'26vw'}}>
                <Row style={{paddingTop:'2vh', paddingBottom:'2vh', paddingLeft:'3vw', paddingRight:'3vw'}}>
                    <Button onClick={(e)=>{setOpenSimple(true)}}>Success Modal</Button> 
                    <Button style={{marginLeft:10}} onClick={(e)=>{setOpenCentered(true)}}>Success Centered Modal</Button>
                </Row>
            </div>
            
            
            <Modal open={openSimple} width={'22vw'} onCancel={()=>{setOpenSimple(false)}} footer={null} style={{borderTop:"2px solid #2fb344", borderTopLeftRadius:2, borderTopRightRadius:2}}>
                <div>
                    <br />
                    <Row justify={'center'}>
                        <Col  style={{font:30}}><CheckCircleFilled style={{fontSize:'32px', color:'#2fb344'}}/></Col>
                    </Row>
                    <Row style={{marginTop:5, }} justify={'center'}><span style={{display:'flex', justifyContent:"center !important", fontSize:17,fontWeight:500 }}>Payment Success</span></Row>
                    <br />
                    <Row style={{color:'rgb(97,104,118)',}}>
                        <div style={{textAlign:'center'}}>
                            Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.
                        </div>
                    </Row>
                    <br />
                    <Row justify={'space-between'}>
                        <Col><Button>Get More Info</Button></Col>
                        <Col><Button style={{borderColor:'#2fb344',color:'#fff',backgroundColor : '#2fb344'}}>View Invoice</Button></Col>
                    </Row>
                </div>
            </Modal>
            <Modal open={openCentered} width={'22vw'} onCancel={()=>{setOpenCentered(false)}} footer={null} centered style={{borderTop:"2px solid #2fb344", borderTopLeftRadius:2, borderTopRightRadius:2}}>
                <div>
                    <br />
                    <Row justify={'center'}>
                        <Col style={{font:30}}><CheckCircleFilled style={{fontSize:'32px', color:'#2fb344'}}/></Col>
                    </Row>
                    <Row style={{marginTop:5}} justify={'center'}><span style={{display:'flex', justifyContent:"center !important", fontSize:17,fontWeight:500 }}>Payment Success</span></Row>
                    <br />
                    <Row style={{color:'rgb(97,104,118)',}}>
                        <div style={{textAlign:'center'}}>
                            Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.
                        </div>
                    </Row>
                    <br />
                    <Row justify={'space-between'}>
                        <Col><Button>Get More Info</Button></Col>
                        <Col><Button style={{borderColor:'#2fb344',color:'#fff',backgroundColor : '#2fb344'}}>View Invoice</Button></Col>
                    </Row>
                </div>
            </Modal>
        </>
    );


}

export default SuccessModal;
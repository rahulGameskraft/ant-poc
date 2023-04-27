import { Button, Modal, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const AntModal = (props) => {

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
            
            
            <Modal open={openSimple} onCancel={()=>{setOpenSimple(false)}} footer={null} style={{borderTop:"#2fb344"}}>
                <div>
                    <br />
                    <Row justify={'center'}>
                        <Col  style={{font:30}}><CheckCircleOutlined style={{fontSize:'32px', color:'#2fb344'}}/></Col>
                    </Row>
                    <Row style={{marginTop:5}} justify={'center'}><span style={{display:'flex', justifyContent:"center !important", fontSize:17,fontWeight:500 }}>Payment Success</span></Row>
                    <br />
                    <span style={{display:"block",paddingLeft:'0.5vw', paddingRight:'1vw'}}>Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.</span>
                    <br />
                    <Row style={{width:'100%'}}>
                        <Col><Button>Get More Info</Button></Col>
                        <Col offset={12}><Button style={{borderColor:'#2fb344',color:'#fff',backgroundColor : '#2fb344'}}>View Invoice</Button></Col>
                    </Row>
                </div>
            </Modal>
            <Modal open={openCentered} onCancel={()=>{setOpenCentered(false)}} footer={null} centered style={{borderTop:"#2fb344"}}>
                <div>
                    <br />
                    <Row>
                        <Col offset={11}  style={{font:30}}><CheckCircleOutlined style={{fontSize:'32px', color:'#2fb344'}}/></Col>
                    </Row>
                    <Row style={{marginTop:5}} justify={'center'}><span style={{display:'flex', justifyContent:"center !important", fontSize:17,fontWeight:500 }}>Payment Success</span></Row>
                    <br />
                    <span style={{display:"block",paddingLeft:'0.5vw', paddingRight:'1vw'}}>Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.</span>
                    <br />
                    <Row style={{width:'100%'}}>
                        <Col><Button>Get More Info</Button></Col>
                        <Col offset={12}><Button style={{borderColor:'#2fb344',color:'#fff',backgroundColor : '#2fb344'}}>View Invoice</Button></Col>
                    </Row>
                </div>
            </Modal>
        </>
    );


}

export default AntModal;
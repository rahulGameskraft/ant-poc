import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd"
// import "./styles/modalStyle.css"
import { useState } from "react"

const FormModal = (props) => {

    const [openForm, setOpenForm] = useState(false);
    const [form] = Form.useForm();
    return (
        <>  
            <div style={{display:"flex", justifyContent:'center', marginTop:'5vh',marginLeft:'2vw',backgroundColor:'#fff', width:'12vw', height:'5vh', paddingTop:'2vh'}}>
                <Button onClick={()=>{setOpenForm(true)}}>Open Form</Button>
            </div>
            
            <Modal className="formModal" title={"Form Modal"} open={openForm} width={'30vw'} onCancel={()=>{setOpenForm(false)}} footer={null}>
                <hr style={{borderWidth:0.5,color:'rgb(97,104,118)'}}/>
                <Form form={form} layout="vertical" style={{marginTop:20}}>
                    
                    <Row justify={'space-between'}>
                        <Col>
                            <Form.Item
                                name="Field Label"
                                label="Field Label"
                               
                            >
                                <Input showCount maxLength={20} style={{
                                    width:'13vw'
                                }}/>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                name="API Key Name"
                                label="API Key Name"
                                
                            >
                                <Input showCount maxLength={15} style={{
                                    width:'13vw'
                                }}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={'space-between'}>
                        <Col>
                            <Form.Item
                                name="Type"
                                label="Type"
                                
                            >
                                <Select
                                    defaultValue="dropdown"
                                    options={[
                                        {
                                        value: 'dropdown',
                                        label: 'Dropdown',
                                        },
                                        {
                                        value: 'file',
                                        label: 'File',
                                        },
                                        {
                                        value: 'image',
                                        label: 'Image',
                                        },
                                        {
                                        value: 'input',
                                        label: 'Input',
                                        },
                                    ]}
                                    style={{
                                        width:'13vw'
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col >
                            <Form.Item
                                name="Active From"
                                label="Active From"
                                
                            >
                                <DatePicker showTime={{use12Hours:true, format:'h:mm:ss a'}} style={{
                                    width:'13vw'
                                }}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <br />
                    <Row justify={'space-between'}>
                        <Button
                            onClick={() => {
                            form.resetFields();
                            }}
                        >
                            Clear
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Row>
                    
                </Form>
                <br />
                
            </Modal>
        </>
    )

}

export default FormModal



// onClick={()=>{setTimeout(()=>{setOpenForm(false)},300)}}
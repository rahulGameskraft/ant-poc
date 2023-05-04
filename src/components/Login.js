import { GoogleCircleFilled, LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Divider, Form, Input, Row } from "antd"

const Login = (props) => {

    return (
        <>
            <div style={{display:"flex", justifyContent:"center", textAlign:"center",backgroundColor:"rgb(242, 245, 249)", width:"100vw", height:"100vh"}}>
                <div style={{marginTop:'20vh'}}>
                    <div>
                        <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.5872 8.77273V5.90909H44.965V8.77273H41.0275V19H37.5247V8.77273H33.5872ZM54.2226 19V5.90909H63.6572V8.77273H57.7766V11.0227H63.1714V13.8864H57.7766V16.1364H63.6317V19H54.2226ZM84.6665 5.90909V19H81.7006L76.9705 12.1222H76.8938V19H73.3398V5.90909H76.3569L81.0103 12.7614H81.1126V5.90909H84.6665ZM94.2677 19V5.90909H103.702V8.77273H97.8216V11.0227H103.217V13.8864H97.8216V16.1364H103.677V19H94.2677ZM113.027 8.77273V5.90909H124.405V8.77273H120.467V19H116.964V8.77273H113.027Z" fill="#206BC4"/>
                            <rect width="24" height="6" rx="1.5" fill="#206BC4"/>
                            <rect y="12" width="9" height="12" rx="1.5" fill="#206BC4"/>
                            <rect x="15" y="12" width="9" height="12" rx="1.5" fill="#206BC4"/>
                        </svg>
                    </div>
                    
                    <div style={{width:'20vw', minHeight:270,height:'40vh', marginTop:20,borderRadius:4, border:'1px solid rgb(230,231,233)', background:"white", padding:30}}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            layout="vertical"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                name="Email"
                                label="Email"
                                rules={[
                                {
                                    message: 'Please input your Email!',
                                },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="Password"
                                label="Password"
                                rules={[
                                {
                                    message: 'Please input your Password!',
                                },
                                ]}
                                style={{
                                    marginBottom:10
                                }}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Row justify={'space-between'}>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Row>
                            </Form.Item>

                            <Form.Item>
                                <Button onClick={props.logIn} style={{width:'20vw'}} type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                            <Divider style={{fontSize:10, fontWeight:700, color:"#616876"}}>OR</Divider>
                            <Form.Item>
                                <Button onClick={props.logIn} style={{width:'20vw', backgroundColor:"#D0463B", color:"#fff"}} htmlType="submit" className="login-form-button">
                                    <GoogleCircleFilled />
                                    Sign in with Google 
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                
            </div>
        </>
    )

}

export default Login 
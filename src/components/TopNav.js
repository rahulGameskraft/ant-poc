import {
  AppstoreOutlined,
  AntDesignOutlined,
  SettingOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

import { Menu, Button, Row, Col,Badge, Avatar, Alert} from 'antd';
import { useState } from 'react';

const TopNav = (props)=>{

    const items = [
        {
            label: 'Ant Design',
            key: 'antd',
            icon: <AntDesignOutlined />,
        },
        {
            label: 'Interface',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Data Grid',
                    key: 'data_grid',
                },
                {
                    label: 'Tables',
                    key: 'tables',
                },
                {
                    label : 'Modal',
                    key: 'modal'
                },
                {
                    label : 'Check Box',
                    key: 'checkbox' 
                },
                {
                    label:'Form Modal',
                    key:'formModal'
                }
            ],
        },
    ];

    return (
        <>
            <Row justify={'space-between'} align={'middle'} style={{position:'relative',height:'5vh', minHeight:43,width:'100%',borderBottom:'1px solid rgb(242, 245, 249)', padding:0}}>
                <Col style={{marginLeft:16}}>
                    <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5872 8.77273V5.90909H44.965V8.77273H41.0275V19H37.5247V8.77273H33.5872ZM54.2226 19V5.90909H63.6572V8.77273H57.7766V11.0227H63.1714V13.8864H57.7766V16.1364H63.6317V19H54.2226ZM84.6665 5.90909V19H81.7006L76.9705 12.1222H76.8938V19H73.3398V5.90909H76.3569L81.0103 12.7614H81.1126V5.90909H84.6665ZM94.2677 19V5.90909H103.702V8.77273H97.8216V11.0227H103.217V13.8864H97.8216V16.1364H103.677V19H94.2677ZM113.027 8.77273V5.90909H124.405V8.77273H120.467V19H116.964V8.77273H113.027Z" fill="#206BC4"/>
                        <rect width="24" height="6" rx="1.5" fill="#206BC4"/>
                        <rect y="12" width="9" height="12" rx="1.5" fill="#206BC4"/>
                        <rect x="15" y="12" width="9" height="12" rx="1.5" fill="#206BC4"/>
                    </svg>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Button>
                                <SettingOutlined /> Admin Settings
                            </Button>
                        </Col>
                        <Col style={{paddingLeft:10}}>
                            <Alert message="Live" type="success" style={{color:'#5BB053', height:32,background:'rgba(91, 176, 83, 0.24)', border:'none', borderRadius:4}}/>
                        </Col>
                        <Col style={{paddingLeft:10}}>
                            <Button>
                                <CheckCircleOutlined style={{ color:'#2fb344'}}/> All Healthy
                            </Button>
                        </Col>
                        <Col style={{paddingLeft:10}}>
                            <Row>
                                <Col>
                                    <Badge><Avatar  shape='square' style={{background:'black'}}/></Badge>
                                </Col>
                                <Col style={{paddingLeft:10, paddingRight:10}}>
                                    <Row>Rahul Srivastava</Row>
                                    <Row style={{color:'#5c6b77'}}>Organization</Row> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            <Menu 
                onClick={(e) => {
                    props.setCurrent(e.key);
                }} 
                selectedKeys={[props.current]} 
                mode="horizontal" 
                
                items={items} 
                style={{position:"relative", height:'5vh', minHeight:43}}
            />
        </>
    )
    

}

export default TopNav ;
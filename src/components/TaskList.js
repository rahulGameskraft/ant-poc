import { CalendarOutlined } from "@ant-design/icons"
import { Card, Row, Col, Checkbox, List } from "antd"

const TaskList = (props) => {

    const data = [
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox checked/></Col>
            <Col span={9}><span>Extend the data model.</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P0</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox /></Col>
            <Col span={9}><span>Verify the event flow.</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P1</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox checked/></Col>
            <Col span={9}><span>Database backup</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P1</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox /></Col>
            <Col span={9}><span>Identify the implementation team.</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P0</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox checked/></Col>
            <Col span={9}><span>Define users and workflow</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P2</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox checked/></Col>
            <Col span={9}><span>Check Pull Requests</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P0</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox checked/></Col>
            <Col span={9}><span>Check Pull Requests</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P0</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox /></Col>
            <Col span={9}><span>Check Pull Requests</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P0</Col>
        </Row>,
        <Row justify={'space-between'} style={{width:'100%'}}>
            <Col span={1}><Checkbox/></Col>
            <Col span={9}><span>Check Pull Requests</span></Col>
            <Col span={7} style={{color:'rgb(92, 107, 119)'}}><CalendarOutlined /> 24/04/23</Col>
            <Col span={7}>Priority : P0</Col>
        </Row>,
    ]
    return (
        <>
            <Card title="Task List">
                <List 
                    dataSource={data}
                    style={{width:'inherit',overflowY:"scroll", maxHeight:"41.8vh",}}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
                
            </Card>
        </>
    )

}

export default TaskList